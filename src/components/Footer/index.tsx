import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import * as S from './styles'

const Footer = () =>{
    return(
        <S.Footer>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Informações adicionais</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quos impedit dolores, voluptas quis aperiam, consequatur provident recusandae reiciendis ullam minima, rerum unde. Earum doloremque rem aliquam eveniet odio voluptate.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Contato</h3>
                            <ul>
                                <li>Phone: 555-555-555</li>
                                <li>Email: zeta@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Nos acompanhe</h3>
                            <ul className='social-icons'>
                              <li><a href="#"> <FaFacebook></FaFacebook> </a></li>
                              <li><a href="#"> <FaInstagram></FaInstagram> </a></li>
                              <li><a href="#"> <FaLinkedin></FaLinkedin> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </S.Footer>
        
    )
}



export default Footer;