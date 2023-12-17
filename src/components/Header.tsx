import React from 'react'
import Link from 'next/link'

const Header: React.FC<{}> = (): React.JSX.Element => (
  <header>
    <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href="/">
        <h1 className="text-2xl text-white font-bold mt-4">
          Physics Scribbles
        </h1>
      </Link>
      <p className="text-slate-300">
        ⚛️ Just random physics writings I do in my spare time. 🌃
      </p>
    </div>
  </header>
)

export default Header
