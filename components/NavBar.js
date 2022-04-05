import Link from "next/link";
import { useRouter } from "next/router";

/*
    페이지 간  클라이언트 측 경로 전환을 활성화하고
    single-page app 경험을 제공하려면 
    Link Component가 필요
*/

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/"><a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a></Link>
            <Link href="/about"><a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>About</a></Link>
        </nav>
    )

}