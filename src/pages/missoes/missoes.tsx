import { Menu2 } from "./styles";
import imgMissoes from "../../assets/imgMissoes2.jpg"


const Missoes = () => {
    return(
      <Menu2>
           <div className="container">
           <h1>Missões e Valores</h1>
             <div className="row">
               <div className="left">
                  <img src={imgMissoes} alt="Logo Compressor" />
               </div>
               <div className="right">
                  <div className="content">
                    <p>Oferecer serviços e soluções inovadores com utilização de tecnologia de alta qualidade e excelência, concretizando o retorno do investimento de nossos clientes.
                    Nossos valores são os princípios de relacionamentos transparentes e respeito a todos clientes e colaboradores.</p>
                    <p>Oferecer serviços e soluções inovadores com utilização de tecnologia de alta qualidade e excelência, concretizando o retorno do investimento de nossos clientes.
                    Nossos valores são os princípios de relacionamentos transparentes e respeito a todos clientes e colaboradores.</p>
                    <p>Oferecer serviços e soluções inovadores com utilização de tecnologia de alta qualidade e excelência, concretizando o retorno do investimento de nossos clientes.
                    Nossos valores são os princípios de relacionamentos transparentes e respeito a todos clientes e colaboradores.</p>
                  </div>
               </div>
             </div>
           </div>
      </Menu2>
    )
}

export default Missoes;