import styled from "styled-components";

export const Section = styled.section`

    h1{
        padding-top: 10px;
        text-transform: uppercase;
        text-align: center;
        font-size: 130px;
        letter-spacing: 20px;
        margin: 0;
    }
    h2{
        text-transform: uppercase;
        text-align: center;
        font-size: 50px;
        letter-spacing: 10px;
        padding: 20px;
    }
    section p{
        padding: 20px;
        text-align: center;
    }

    .container{
        padding-bottom:140px;
    }
    .row{
        border: 2px solid darkgray;
        border-radius: 2px;
    }

        @media(max-width:991px){
            h1{
                font-size:60px;
            }
        }

        @media (max-width: 991px){
            .container  .row {
                padding-left: 0;
            }
        }

        @media(max-width: 768px){
            .row{
                width: 100%;
            }
        }

`