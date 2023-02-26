import styled from "styled-components";

export const Menu = styled.menu`

    .home{
         height: 90vh;
         width: 100%;
         display: flex;
    }



    .home-intro{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 50px;
        color: black;
        font-size: 55px ;
    }

    .title{
        font-size: 5rem;
        animation-name: moveRigth;
        animation-duration: 1s;
    }

    .titleTwo{
        font-size: 5rem;
        animation-name: moveRigth;
        animation-duration: 1s;
    }

    .titleThree {
        font-size: 5rem;
        animation-name: moveRigth;
        animation-duration: 1s;
        color: yeelow;
        margin-bottom: 10px;
    }

    @keyframes moveRigth {
        0% {
            opacity:0;
            transform: translateX(100px);
        }
        100%{
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes moveLeft {
        0%{
            opacity: 0;
            transform: translateX(-150px);
        }
        100%{
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes moveUp {
        0%{
            opacity: 0;
            transform: translateY(50px);
        }
        100%{
            opacity: 1;
            transform: translate(0);
        }
    }

    @media screen and (max-width:1100px){
        .home-intro{
            width: 100vw;
            height: 80vh;
            display: flex;
            justify-content: center;
            font-size: 50px;
            margin: auto;
            padding-left: 80px;
        }
    }


    @media screen and (max-width:800px){
        .home-intro{
            padding-left: 40px;
            font-size: 40px;
        }
    }


    @media screen and (max-width:600px){
        .home-intro{
            font-size: 30px;
        }
        .text{
            font-size: 24px;
        }
    }

`


