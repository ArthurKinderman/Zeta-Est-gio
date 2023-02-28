import { Section } from "./styles"

const Contato = () =>{
    
    return(
        <Section>
            <form id="contato">
                <div className="container">
                    <legend>Contato</legend>

                    <label htmlFor="name">Nome:</label>
                    <input type="name" id="name"/>
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>

                    <label htmlFor="tell">Telefone:</label>
                    <input type="tell" id="tell"/>
                    
                    <button type="submit" id="button">Enviar</button>
                </div>
            </form>
        </Section>
    )
}

export default Contato;
