import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Complete Daily tasks and Earn a living everyday
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl">
            Earn a living everyday by completing daily tasks
          </p>
          <div className="space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="/signup"
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-500 bg-transparent px-6 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-gray-500 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Header