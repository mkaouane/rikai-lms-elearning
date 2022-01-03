import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Context} from '../../../../context'
import {toast} from 'react-toastify'
import UserRoute from '../../../../components/routes/UserRoute'
import InstructorRoute from '../../../../components/routes/InstructorRoute'


export default function CreateCourse() {
    const context = useContext(Context);
    return (
        <InstructorRoute>
            <h1>Create Courses</h1>
        </InstructorRoute>
    )
}
