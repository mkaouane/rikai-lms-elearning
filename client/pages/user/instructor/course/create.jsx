import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Context} from '../../../../context'
import {toast} from 'react-toastify'
import UserRoute from '../../../../components/routes/UserRoute'


export default function CreateCourse() {
    const context = useContext(Context);
    return (
        <div>
            <h1>Create Courses</h1>
        </div>
    )
}
