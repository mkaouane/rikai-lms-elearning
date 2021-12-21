import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context'


export default function UserIndex() {

    // state
    const [hidden, setHidden] = useState(false)

    // router
    const router = useRouter();
    useEffect(() => {
        fetchUser();
        if(user == null) {
            router.push('/login')
        }
    }, [])

    const { state: { user } } = useContext(Context)

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/current-user')
            console.log(data)
            setHidden(false)
        } catch (error) {
            console.log(error)
            setHidden(false)
        }
    }
    return (
        <>
            {!hidden && (
                <div>
                    <h1>{JSON.stringify(user)}</h1>
                </div>
            )}
        </>
    )
}
