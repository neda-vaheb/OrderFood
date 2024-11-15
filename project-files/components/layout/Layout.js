import styles from "./Layout.module.css";
import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Next.js course | BotoFood Project | Develop By Neda </footer>
    </>
  );
}

export default Layout;
