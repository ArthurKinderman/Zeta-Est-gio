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
                    <div className="dropdown">
                        <li id="unic">Sobre nós</li>
                        <div className="menu2">
                            <li><Link to="/quemsomos" className="Links">Quem Somos</Link></li> 
                            <li><Link to="/missoes" className="Links">Missões e Valores</Link></li>                          
                        </div>
                    </div>
                        <li className="Links"><a href="#solucoes">Nossas Soluções</a></li>
                        <li className="Links"><a href="#contato">Contato</a></li>
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