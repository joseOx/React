// src/components/TaskList.jsx
import { useState, useEffect } from 'react';
import api from '../api/axios';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('tasks/');
                setTasks(response.data);
            } catch (error) {
                console.error("Error cargando tareas:", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Mis Tareas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title} - {task.completed ? '✅' : '⏳'}</li>
                ))}
            </ul>
        </div>
    );
}
