import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';







const AddFriend  = (props) => {

    const [addFriend, setaddFriend] = useState({
        name: '',
        age: '',
        email: ''
    });
    const handleChange = e => {
        setaddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth().post('http://localhost:5000/api/friends', addFriend)
        .then(response => {
            console.log(response)
            props.setaddFriends((friend) => [...friend, addFriend]);
            props.history.push('/protected')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={addFriend.name}
                    onChange={handleChange}
                    placeholder='Name'
                />
                <input
                    type='text'
                    name='age'
                    value={addFriend.age}
                    onChange={handleChange}
                    placeholder='Age'
                />
                <input
                    type='text'
                    name='email'
                    value={addFriend.email}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <button>Add Friend</button>
            </form>
        </div>
    );
};


export default AddFriend;