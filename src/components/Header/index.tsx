import { Link } from "react-router-dom";
import * as S  from "./styles";
import {useState} from "react"


const Header = () => {

    const [active,setActive] = useState("menu");

    const [icon, setToggleIcon] = useState("nav_ham");



    const navham = () => {
        active === 'menu'
        ? setActive('menu navactive')
        : setActive('menu')

        icon === 'nav_ham'
        ? setToggleIcon('nav_ham toggle')
        : setToggleIcon('nav_ham')
    };

    return (
        <S.header>
        <header>
            <nav className="nav">    

                <h1><Link to="/" className="Links">zeta.</Link></h1>

                    <ul className={active}>

                        <li>Sobre nós</li>

                        <li><Link to="/solucoes" className="Links">Nossas Soluções</Link></li>

                        <li><Link to="/Contato" className="Links">Contato</Link></li>
                    </ul>

                    <div onClick={navham}  className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
            </nav>
        </header>
        </S.header>
    )
}

export default Header;