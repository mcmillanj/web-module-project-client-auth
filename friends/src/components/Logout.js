import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
 import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Logout = (props) => {
     const {push} = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axiosWithAuth()
        .post('http://localhost:5000/api/logout')
        .then(res => {
            localStorage.removeItem('token')
           push('/login')
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    return(
        <div></div>
    );

}
export default Logout; 