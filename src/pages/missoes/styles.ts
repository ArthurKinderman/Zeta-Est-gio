import styled from "styled-components";


export const Menu2 = styled.menu`

    section {position: 30px 15%}

    @media (min-width:728px) {
        section{padding:30px 10%}
    }
    .banner{
        position: relative;
        display: flex;
        align-items: center;
        gap: 50px;
        justify-content: space-between;
        padding-top: 100px;
        min-height: 40vw;
        margin-bottom: 40px;
    }

    @media (min-width:700px) {
        .banner{
            text-align: center;
            flex-direction: column-reverse;
            justify-content: center;
        }
    }

    .banner{
        background: darkgray;
    }

    .banner h2 {
        white-space: nowrap;
        margin: 0 0 4px;
        font-size: 40px;
        color: rgb(255 255 255/ 90%);
    }

    .banner h3{
        font-weight: 400;
        margin: 0;
        color: rgb(255 255 255/ 57%);
    }

    @keyframes morph {
        0%,
        100% {
            border-radius: 40% 60% 70% 30% /
            40% 40% 60% 50%;
        }
        34%{
            border-radius: 70% 30% 50% 50% /
            30% 30% 70% 70%;
        }
        67%{
            border-radius: 100% 60% 60% 100% /
            100% 100% 60% 60%;
        }
    }

    .banner img{
        width: 220px;
        height: 220px;
        object-fit: cover;
        animation: morph 3.5s linear infinite;
    }

`