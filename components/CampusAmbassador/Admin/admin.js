import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Chip, Stack, Typography, Paper } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import toast from "react-hot-toast";
export default function Type1Submissions() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BACKEND_URL}/ambassador/type1-submissions`);
            const data = await res.json();
            console.log(data);

            if (res.ok) setSubmissions(data);
            else toast.error("Failed to fetch submissions");
        } catch {
            toast.error("Server error");
        } finally {
            setLoading(false);
        }
    };
    const updateStatus = async (id, status) => {
        try {
            const res = await fetch(`${BACKEND_URL}/ambassador/type1-submissions/${id}/status`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            if (!res.ok) throw new Error();
            setSubmissions((prev) => {
                const updated = prev.map((s) => (s.id === id ? { ...s, status } : s));
                // pending top pe rahege baki sab niche ( accpet ya reject )
                return [...updated.filter((s) => s.status === "pending"), ...updated.filter((s) => s.status !== "pending")];
            });

            toast.success(`Submission ${status}`);
        } catch {
            toast.error("Failed to update status");
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const getBgColor = (status) => {
        if (status === "accepted") return "#e8f5e9";
        if (status === "rejected") return "#fdecea";
        return "#f9f9f9";
    };

    if (loading) {
        return (
            <Box sx={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

  return (
    <Box sx={{ p: 3 }}>
        <Typography variant="h5" mb={3}>
            Task Submissions (Drive Link)
        </Typography>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Task Title</strong></TableCell>
                        <TableCell><strong>Student Name</strong></TableCell>
                        <TableCell><strong>Drive Link</strong></TableCell>
                        <TableCell><strong>Status</strong></TableCell>
                        <TableCell><strong>Actions</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...submissions]
                        .sort((a, b) => {
                            const taskCompare = a.taskTitle.localeCompare(b.taskTitle);
                            if (taskCompare !== 0) return taskCompare;
                            return (a.studentName || "").localeCompare(b.studentName || "");
                        })
                        .map((s) => (
                            <TableRow 
                                key={s.id}
                                sx={{ backgroundColor: getBgColor(s.status) }}
                            >
                                <TableCell>{s.taskTitle}</TableCell>
                                <TableCell>{s.studentName || "N/A"}</TableCell>
                                <TableCell>
                                    <a 
                                        href={s.driveLink} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        style={{ color: "#1976d2", textDecoration: "none" }}
                                    >
                                        Open Drive Link
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <Chip 
                                        label={s.status.toUpperCase()} 
                                        color={
                                            s.status === "accepted" ? "success" : 
                                            s.status === "rejected" ? "error" : 
                                            "warning"
                                        } 
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        <Button 
                                            variant="contained" 
                                            color="success" 
                                            disabled={s.status === "accepted"} 
                                            onClick={() => updateStatus(s.id, "accepted")}
                                            size="small"
                                        >
                                            Accept
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="error" 
                                            disabled={s.status === "rejected"} 
                                            onClick={() => updateStatus(s.id, "rejected")}
                                            size="small"
                                        >
                                            Reject
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);
}
