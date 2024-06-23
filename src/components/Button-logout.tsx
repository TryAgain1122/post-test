'use client'

import { signOut } from "next-auth/react"

const ButtonLogout = () => {
    return(
        <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-white hover:underline"
            >Logout</button>
    )
}

export default ButtonLogout