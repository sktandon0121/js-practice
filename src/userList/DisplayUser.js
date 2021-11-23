import React, { useState, useEffect } from "react";


export default function () {
    const [count, setCount] = useState(1);
    const [user, setUsers] = useState({});

    async function fetchUsers() {
        let url = `https://jsonplaceholder.typicode.com/users/${count}`;
        let data = await fetch(url).then((r) => r.json());
        setUsers({ ...data });
        // console.log(data);
    }

    const random = Math.random() * 10;
    console.log(random);

    useEffect(() => {
        fetchUsers();
        // let url = `https://jsonplaceholder.typicode.com/users/${count}`;
        // fetch(url)
        //   .then((r) => r.json())
        //   .then((res) => {
        //     console.log('users', res);
        //   });
    }, [count]);

    const clickHandler = () => {
        setCount(count + 1);
    };

    return (
        <div className="app">
            <h1>{count}</h1>
            <button onClick={clickHandler}>Click</button>
            <p>Id : {user.id} </p>
            <p>Name : {user.name} </p>
            <p>Email : {user.email} </p>
        </div>
    );
}