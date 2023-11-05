import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav>
      <Image
        src='/logo-4.png'
        alt='my-logo'
        width={70}
        height={70}
        quality={100}
        priority={true}
      />
      <h1>Ma&apos; HelpDesk</h1>
      <Link href='/'>Dashboards</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default Navbar