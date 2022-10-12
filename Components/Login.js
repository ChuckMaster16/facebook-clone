import React from 'react'
import Image from 'next/image'
import {signIn} from 'next-auth/react'

function Login() {
  return (
    <div className="grid place-items-center mt-[250px]">
      <Image
        src="https://res.cloudinary.com/chuckmaster/image/upload/v1665374690/facebook%20clone%20files/Facebook-logo_dcs8pi.png"
        height={250}
        width={400}
        ObjectFit="contain"
      />
      <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"> Login with Facebook</h1>

    </div>
  )
}

export default Login
