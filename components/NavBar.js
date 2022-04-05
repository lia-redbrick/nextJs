import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

/*
    페이지 간  클라이언트 측 경로 전환을 활성화하고
    single-page app 경험을 제공하려면 
    Link Component가 필요
*/

export default function NavBar() {
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <Link href="/"><a className={
                `${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a></Link>
            <Link href="/about"><a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>About</a></Link>
        </nav >
    )

}