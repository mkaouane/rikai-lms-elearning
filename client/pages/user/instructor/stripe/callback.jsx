import axios from 'axios';
import React, {useEffect, useContext} from 'react'
import {Context} from '../../../../context'

export default function StripeCallback() {

    const {state: {user}, dispatch} = useContext(Context);

    useEffect(() => {
        if(user) {
            axios.post('/api/get-account-status')
            .then((res) => {
                // console.log(res)
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                });
                window.localStorage.setItem('user',JSON.stringify(res.data));
                window.location.href = '/user';
            })
        }
        
    }, [user]);
    return (
        <div>
            
        </div>
    )
}
