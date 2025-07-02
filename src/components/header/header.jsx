import Image from "next/image"
import Link from "next/link"
export const Header = () => {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image src={'/images/logo_black.png'} width={50} height={50} alt='icon'></Image>
                    <nav>
                        <ul>
                            <li>
                                <Link legacyBehavior href='/'><a>home</a></Link>
                            </li>
                            <li>
                                <Link legacyBehavior href='/events'><a >events</a></Link>
                            </li>
                            <li>
                                <Link legacyBehavior href='/about-us'><a>about us</a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title">Lorem Lorem</p>
            </div>
        </header>
    )
}