import Link  from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav";

const Header=()=>{
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* {logos} */}
                <Link href={"/"}>
                <h1 className="text-4xl font-semibold">
                    Nafiul<span className="text-accent">.</span>
                </h1>
                </Link>

                {/* {desktop nav ans hire me button} */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                      <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile Nav */}
                <div className="xl:hidden">movile nav</div>
            </div>
        </header>
    )
}
export default Header