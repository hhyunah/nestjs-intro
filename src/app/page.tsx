import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './NavBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div>Home</div>
    </main>
  )
}
