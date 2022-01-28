import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context } from '../../../../context'
import { toast } from 'react-toastify'
import UserRoute from '../../../../components/routes/UserRoute'
import InstructorRoute from '../../../../components/routes/InstructorRoute'
import TopNav from '../../../../components/TopNav'


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
    setValues({ ...values, [e.target.value]: e.target.value })
  }

  const handleImage = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  return (
    <InstructorRoute>
      <TopNav/>
      <h1 className="text-center text-4xl font-semibold mt-10">Post a job</h1>
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit}
      >
        <label className="text-gray-600 font-medium">Job Title</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="title"
          placeholder="Full Stack Developer, Backend Engineer, etc."
          autoFocus

        />
        {/* {errors.title && (
          <div className="mb-3 text-normal text-red-500">
            {errors.title.message}
          </div>
        )} */}

        <label className="text-gray-600 font-medium block mt-4">Location</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="location"
          type="text"
          placeholder="Scranton, PA"
        />
        {/* {errors.location && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.location.message}
          </div> */}
        {/* )} */}

        <label className="text-gray-600 font-medium block mt-4">
          Description
        </label>
        <textarea
          className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
          name="description"
          rows={5}
          cols={5}
        />
        {/* {errors.description && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.description.message}
          </div>
        )} */}

        <label className="text-gray-600 font-medium block mt-4">
          Link to apply for this job
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="link"
          type="text"
          placeholder="https://www.customerengjobs.com"
        />
        {/* {errors.link && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.link.message}
          </div>
        )} */}

        <label className="text-gray-600 font-medium block mt-4">Job type</label>
        <label className="inline-block">
          <input
            className="mt-4 mr-1"
            name="jobtype"
            type="radio"
          />
          Full time
        </label>

        <label className="ml-8 inline-block">
          <input
            className="mt-4 mr-1"
            name="jobtype"
            type="radio"
          />
          Part time
        </label>

        {/* {errors.jobtype && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.jobtype.message}
          </div>
        )} */}

        <button
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </InstructorRoute>
  )
}
