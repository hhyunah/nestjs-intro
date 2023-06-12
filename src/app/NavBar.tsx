'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  return (
    <nav>
      <Link href="/" style={{ color: pathname === '/' ? 'red' : 'blue' }}>
        Home
      </Link>
      <Link
        href="/dashboard"
        style={{ color: pathname === '/dashboard' ? 'red' : 'blue' }}
      >
        Dash
      </Link>
    </nav>
  )
}
