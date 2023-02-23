import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import * as S from './styles'

const Footer = () =>{
    return(
        <S.Footer>
            <footer>
                <ul className="social_list">
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                </ul>
                <p className='copy_right'><span >ZETA</span> &copy; 2023</p>
            </footer>
        </S.Footer>
        
    )
}



export default Footer;