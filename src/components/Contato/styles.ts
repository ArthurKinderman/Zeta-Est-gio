import styled from "styled-components";


export const Section = styled.div`

    form{
        display: flex;
        width: 480px;
        justify-content:space-between;
        margin-left: auto;
        margin-right: auto;
    }
    .container{
        background: white; 
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 2px;
        margin-bottom: 50px;
        padding-bottom: 20px;
        padding-top: 10px;
        border: 1px solid black;
        border-radius: 4px;
    }
    legend , label{
        text-align: center;
        color: black;
    }

    input{
        margin: 10px;
        width: 320px;
        height: 45px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    button{
        background: white;
        width: 70px;
        margin: auto;
        border: 1px solid black;
        border-radius: 4px;
    }
`