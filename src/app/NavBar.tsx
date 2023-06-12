'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <span className={pathname === '/' ? 'active' : ''}>Home</span>
      </Link>
      <Link href="/dashboard" legacyBehavior>
        <span className={pathname === '/dashboard' ? 'active' : ''}>Dash</span>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        Link {
          text-decoration: none;
        }
        span {
          cursor: pointer;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  )
}
