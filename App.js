import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';

const App = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/students')
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Student Management System</h1>
            <StudentForm />
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.name} - {student.course}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
