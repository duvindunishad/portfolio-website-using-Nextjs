import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
        Build with<span className='text-primary text-2xl px-1'>&#9825;</span><Link href="https://github.com/duvindunishad" className='underline underline-offset-4' target={"_blank"}>Duvindu Nishad Karunasingha (GitHub)</Link>
        </div>
        <Link href="https://github.com/duvindunishad" target={"_blank"}>Hello Guys</Link>
      </Layout>
    </footer>
  )
}

export default Footer
