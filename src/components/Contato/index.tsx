import { Section } from "./styles"


const Contato = () =>{
    
    return(
        <Section>
            <form id="contato">
                <div className="container">
                    <legend>Contato</legend>

                    <label htmlFor="name">Nome:</label>
                    <input type="name"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email"/>

                    <label htmlFor="tell">Telefone:</label>
                    <input type="tell"/>

                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Section>
    )
}

export default Contato;