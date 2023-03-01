import {screen , render} from "@testing-library/react"
import Contato from "../Contato"

//erro no screen impossibilitando de continuar por enquanto
describe('Contato',()=>{

    it('Should have a Contato', ()=>{
        render(<Contato/>) 

    })

    it('should have a title contato', ()=>{
        render(<Contato/>)

        const linkElement = screen.getByText(/Contato/i); 
        expect(linkElement).toBeInTheDocument();
       
    })

    it('should have a button', async ()=>{
        render(<Contato/>)

       const submitButton = await screen.findByRole('button', {name: /Enviar/i})
    })

    it('should have a alert', ()=>{
        render(<Contato/>)

        expect(screen.queryByRole('alert')).toBeInTheDocument();
    })
    


    

    screen.debug();
})