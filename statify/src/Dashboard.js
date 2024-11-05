import React from 'react'
import useAuth from './useAuth'

export default function Dashboard({ code }) {
    return (
        <div>
            const accessToken = useAuth(code)
            {code}
        </div>
    )
}