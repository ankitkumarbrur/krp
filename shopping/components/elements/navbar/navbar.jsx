import Link from 'next/link'
import Image from 'next/image'

const Navbar = ()=> {
    return (
        <>
            <h1>
                Navbar
            </h1>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/blog">
                Blog
            </Link>
        </>
    )
}

export default Navbar