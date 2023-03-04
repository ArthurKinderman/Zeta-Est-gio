import { render } from "@testing-library/react";
import App from "./App";
import  renderer  from "react-test-renderer";


describe('App',()=>{

    it('should work app', () =>{
        render(<App/>)

    })

    it('renders correctly', ()=>{
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})