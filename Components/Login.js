import React from 'react'
import Image from 'next/image'
import {signIn} from 'next-auth/react'

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://res.cloudinary.com/chuckmaster/image/upload/v1665374690/facebook%20clone%20files/Facebook-logo_dcs8pi.png"
        height={250}
        width={400}
        ObjectFit="contain"
      />
      <h1 onClick={signIn} className="bg-blue-500 rounded-full text-white text-center cursor-pointer p-3"> Login with Facebook</h1>

    </div>
  )
}

export default Login
