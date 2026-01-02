import { Box, Button, Modal, TextField, CircularProgress } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export default function ControlTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loader
    const [editingTask, setEditingTask] = useState(null);
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const fetchTasks = async () => {
        setLoading(true); // Show loader while fetching tasks
        try {
            // const response = await fetch(`${BACKEND_URL}/ambassador/getAllTasks`);
            const response = await fetch(`${BACKEND_URL}/ambassador/admin/tasks`);
            const data = await response.json();
            if (response.ok) {
                setTasks(data);
            } else {
                toast.error("Error fetching tasks");
            }
        } catch (error) {
            toast.error("An error occurred while fetching tasks");
        } finally {
            setLoading(false); // Hide loader after fetching
        }
    };
    const handleEditTask = (task) => {
        setEditingTask(task);
    };
    const handleDeleteTask = async (taskId) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            const response = await fetch(`${BACKEND_URL}/ambassador/tasks/${taskId}`, {
              method: "DELETE",
            });

            if (response.ok) {
                toast.success("Task deleted successfully!");
                fetchTasks();
            } else {
                toast.error("Error deleting task");
            }
        }
    };
    const handleSaveEdit = async () => {
        const response = await fetch(
          `${BACKEND_URL}/ambassador/tasks/${editingTask.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: editingTask.title,
              description: editingTask.description,
              lastDate: editingTask.lastDate,
            }),
          }
        );
        if (response.ok) {
            toast.success("Task updated successfully!");
            fetchTasks();
            setEditingTask(null);
        } else {
            toast.error("Error updating task");
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);
   return (
    <Box sx={{ p: 2 }}>
        <h3>All Tasks</h3>
        {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                <CircularProgress />
            </Box>
        ) : (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Title</strong></TableCell>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell><strong>Last Date</strong></TableCell>
                            <TableCell><strong>Points</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...tasks]
                            .sort((a, b) => new Date(a.lastDate) - new Date(b.lastDate))
                            .map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.title}</TableCell>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell>{new Date(task.lastDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{task.points}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => handleEditTask(task)}
                                            sx={{ mr: 1 }}
                                            size="small"
                                        >
                                            EDIT
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDeleteTask(task.id)}
                                            size="small"
                                        >
                                            DELETE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )}
        {editingTask && (
            <Modal open={true} onClose={() => setEditingTask(null)}>
                <Box sx={{ p: 4, background: "white", borderRadius: 2, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: 400 }}>
                    <h3>Edit Task</h3>
                    <TextField
                        label="Title"
                        value={editingTask.title}
                        onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Description"
                        value={editingTask.description}
                        onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Last Date"
                        value={editingTask.lastDate}
                        onChange={(e) => setEditingTask({ ...editingTask, lastDate: e.target.value })}
                        type="date"
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button variant="contained" onClick={handleSaveEdit}>
                        Save
                    </Button>
                </Box>
            </Modal>
        )}
    </Box>
);
}
