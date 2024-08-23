import React from "react";

const students = [
    {
        id:1,
        name: "suin",
    },
    {
        id:2,
        name: "jinhee",
    },
    {
        id:3,
        name: "seoyeon",
    },
    {
        id:4,
        name: "jihyun",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;