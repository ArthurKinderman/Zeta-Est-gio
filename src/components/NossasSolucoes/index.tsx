import { Section } from "./styles"
import Logo2 from "../../assets/compressor2.jpg"


const NossasSolucoes = () => {
    return(
        <Section>
            <div id="solucoes" className="container">
                <div className="row">
                    <div className="imgWrapper">
                        <img src={Logo2} alt="Foto Compressor" />
                    </div>
                    <div className="contentWrapper">
                        <div className="content">
                            <span className="textWrapper">
                                <span></span>Nossas Soluções
                            </span>
                            <h2>Compressor Inteligente</h2>
                            <p>Sistema embarcado inteligente e inovador, para gestão de operação e manutenção preventiva e preditiva de compressores de ar
                            que funcionará com integração e serviços em nuvem e inteligência artificial.</p>
                            <a href="#">Compre Agora</a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

    )
}

export default NossasSolucoes;