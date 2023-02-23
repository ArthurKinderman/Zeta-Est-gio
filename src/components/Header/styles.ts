import styled from "styled-components"

export const header = styled.header`

    li{
        list-style: none;
        color: black;
    }

    .Links{
        color: black;
    }

    h1 .Links{
        text-transform: uppercase;
        font-weight: bold;
    }

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 8vh;
        background: white;
        font-size: 20px;
        box-shadow: rgba(50,50,93, 0.23) 0 30px 30px -20px;
    }

    .menu{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 3rem;
    }

    .nav_ham{
        display: none;
    }
    
    .nav_ham div{
        width: 2.5rem;
        height: 0.2rem;
        margin: 0.4rem;
        background: black;
        transition: 0.4s ease-in;
    }
    .nav_ham{
        display: none;
    }

    @media screen and (max-width:768px){
        .nav_ham {
            display: block;
        }
        .menu{
            position: fixed;
            top: 7vh;
            right: 0;
            width: 50%;
            height: 93vh;
            background: white;
            flex-direction: column;
            transform: translateX(100%);
            transition: 0.5s ease-in;

        }
    }

    .navactive{
        transform: translateX(0%);
    }


    .toggle .line1{
        transform: rotate(-45deg) translate(-2px, 4px);
    }
    .toggle .line3{
        opacity: 0;
    }
    .toggle .line2{
        transform: rotate(45deg) translate(-2px, -4px);
    }

`