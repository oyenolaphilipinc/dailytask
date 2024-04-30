import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between mb-1">
      <div className="ml-1">
        <Image 
          src={"/logo.png"}
          width={50}
          height={50}
          alt={"The Logo of dailytask"}
        />
      </div>
      <div className="mr-12 mt-1 hidden md:flex">
        <Link href="/" className="mr-8 mt-2 hover:border-b-2 hover:border-orange-600">Home</Link>
        <Link href="/" className="mr-8 mt-2 hover:border-b-2 hover:border-orange-600">About</Link>
        <Link href="/" className="mr-8 mt-2 hover:border-b-2 hover:border-orange-600">Features</Link>
        <Link href="/" className="mr-8 mt-2 hover:border-b-2 hover:border-orange-600">Pricing</Link>
        <Link href='/signup'>
          <button className="bg-gradient-to-r from-orange-400 to-purple-600 hover:from-pink-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded">Signup</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;