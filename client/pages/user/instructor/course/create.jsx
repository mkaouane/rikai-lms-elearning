import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Context} from '../../../../context'
import {toast} from 'react-toastify'
import UserRoute from '../../../../components/routes/UserRoute'
import InstructorRoute from '../../../../components/routes/InstructorRoute'


export default function CreateCourse() {
    const [values, setValues] = useState({
        name: '',
        imagePreview: '',
        description: '',
        price: '9,99',
        uploading: false,
        loading: false,
        paid: true,
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.value] : e.target.value})
    }

    const handleImage = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    return (
        <InstructorRoute>
            <h1>Create Courses</h1>
        </InstructorRoute>
    )
}
