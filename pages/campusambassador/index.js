import Leaderboard from "@/components/Campus ambassador/Leaderboard";
import Profile from "@/components/Campus ambassador/profile";
import TaskList from "@/components/Campus ambassador/Tasks";
import Nav from "@/components/navbar/NavLayout";
import Head from "next/head";
import React, { useState ,useEffect} from "react"
import { useForm } from "react-hook-form";
import { FaEdit, FaPlus } from "react-icons/fa"; 


const mockUserData = {
    name: "John Doe",
    collegeName: "IIT BHU",
    collegeYear: "2024",
    phone: "123-456-7890",
    points: 1200,
    tasks: [
        { id: 1, title: "Get the startupjunction form filled by at least 10 people", completed: true, lastDate: "2024-10-10" },
        { id: 2, title: "Task 2", completed: false, lastDate: "2024-10-05" },
        { id: 3, title: "Task 3", completed: false, lastDate: "2024-10-08" },
    ],
};

const mockLeaderboard = [
    { name: "Alice", points: 1500 },
    { name: "Bob", points: 1400 },
    { name: "John Doe", points: 1200 },
];

export default function CampusAmbassador() {

    return (
        <>
            <Head>
                <title>Startup Junction</title>
                <meta name="robots" content="index, follow" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div>
                <Nav />

                <div className="flex px-4 mb-6 flex-col gap-6">
                    <h1 className="text-3xl font-bold text-center p-6">Campus Ambassador Dashboard E-Cell IIT BHU</h1>
                    
                     {/* profile section */}
                    <Profile/>

                    {/* Leaderboard Section */}
                    <Leaderboard/>

                    {/* Task Section */}
                    
                    {/* <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">This Week&apos;s Tasks</h2>
                        <ul className="list-group">
                        {user.tasks.map((task) => {
    const taskLastDate = new Date(task.lastDate);
    const isLastDatePassed = currentDate > taskLastDate;

    let statusText = '';
    let bgColor = '';
    
    if (task.completed && !isLastDatePassed) {
        statusText = 'Submitted';
        bgColor = 'bg-primary'; 
    } else if (!task.completed && !isLastDatePassed) {
        statusText = 'Pending';
        bgColor = 'bg-warning'; 
    } else if (!task.completed && isLastDatePassed) {
        statusText = 'Missed';
        bgColor = 'bg-destructive'; 
    } else if (task.completed && isLastDatePassed) {
        statusText = 'Completed';
        bgColor = 'bg-success'; 
    }

    return (
        <li
            key={task.id}
            className={`list-group-item text-background d-flex justify-between align-items-center ${bgColor}`}
        >
            <div>
                {task.title}
                <br />
                <small>Last Date: {task.lastDate}</small>
            </div>
            <div className="flex  items-center gap-2">
                {task.completed && !isLastDatePassed ? (
                    <button className="btn flex items-center justify-between btn-outline-light me-2">
                        <p className="w-12">Edit</p><FaEdit /> 
                    </button>
                ) : !task.completed && !isLastDatePassed ? (
                    <button className="btn flex items-center gap-2 btn-outline-light">
                        <p className="w-12">Create</p>  <FaPlus />
                    </button>
                ) : null}
             <p>{statusText}</p>
            </div>
        </li>
    );
})}

                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    );
}
