import { render } from "@testing-library/react"
import Header from "../Header"
import { MemoryRouter } from "react-router-dom";

describe('Header', ()=>{
        
    it('Should be a Header with router', ()=>{
        render(<Header/>, {wrapper: MemoryRouter});
    })

})