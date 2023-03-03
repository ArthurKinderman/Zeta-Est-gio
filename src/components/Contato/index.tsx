import { Section } from "./styles"

const Contato = () =>{
    
    

    function click(){
        var name = (document.getElementById("name") as HTMLInputElement).value;
        var email = (document.getElementById("email") as HTMLInputElement).value;
        var tell = (document.getElementById("tell") as HTMLInputElement).value;

        alert("Seu nome é: " + name +
        " \n" + "Seu email é:" + email +
        "\n" + "Seu telefone é:" + tell
        )
    }

    return(
        <Section>
            <form id="contato">
                <div className="container">
                    <legend>Contato</legend>

                    <label htmlFor="name">Nome:</label>
                    <input  type="name" id="name" required/>
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required/>

                    <label htmlFor="tell">Telefone:</label>
                    <input type="tell" id="tell" required/>
                    
                    <button type="submit" id="buttonBtn" onClick={click}>Enviar</button>
                </div>
            </form>
        </Section>
    )
}

export default Contato;
