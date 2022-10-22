import React from 'react'
import Image from 'next/image'
import {signIn} from 'next-auth/react'

function Login() {
  return (
    <div className="flex items-center flex-col w-[100%] h-[100vh]  justify-self-center  ">
      <Image
        src="https://res.cloudinary.com/chuckmaster/image/upload/v1665374690/facebook%20clone%20files/Facebook-logo_dcs8pi.png"
        height={250}
        width={400}
        ObjectFit="contain"
      />
      <h1 onClick={signIn} className="text-[#1778f2] p-[20px] rounded-2xl"> Login with Facebook</h1>

    </div>
  )
}

export default Login
