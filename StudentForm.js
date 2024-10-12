import React, { useState } from 'react';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const student = { name, age, course };
        await fetch('/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={e => setCourse(e.target.value)}
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
