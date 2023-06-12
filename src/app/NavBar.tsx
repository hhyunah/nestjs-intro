'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavBar.module.css'

export default function NavBar() {
  const pathname = usePathname()
  return (
    <nav>
      <Link
        href="/"
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className={[
          styles.link,
          pathname === '/dashboard' ? styles.active : '',
        ].join(' ')}
      >
        Dash
      </Link>
    </nav>
  )
}
