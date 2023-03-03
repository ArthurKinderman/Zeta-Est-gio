import styled from "styled-components"

export const header = styled.header`

    li{
        list-style: none;
        color: black;
    }
    a{
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
            width: 45%;
            height: 73vh;
            background: white;
            flex-direction: column;
            transform: translateX(100%);
            transition: 0.5s ease-in;
        }
        li{
            font-size: 20px;
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


    .dropdown {
        position: relative;
        cursor: pointer;
    }

    .dropdown > #unic{
        display: flex;
        align-items: center;
        gap: 2px;
        height: 72px;
    }

    .dropdown:hover .menu2{
        opacity: 1;
        visibility: visible;
    }

    .menu2 #unic{
        font-size: 14px;
        padding: 12px 20px;
    }

    .menu2 > #unic:hover{
        background: #f5f5f5;
    }

    .menu2 {
        position: absolute;
        top: 60px;
        right: -20px;
        display: grid;
        width: 200px;
        padding: 10px 0;
        background: #ffffff;
        border-radius: 10px;
        border: 1px solid gray;
        box-shadow: 0 40px 40px rgb(0 0 0/ 6%);
        opacity: 0;
        visibility: hidden;
        transition: 0.25s;
        display: row;
        justify-items: center;
    }

    .menu2::before{
        content: "";
        background: inherit;
        border-top: 1px solid gray;
        border-right: 1px solid gray;
        position: absolute;
        top: -7px;
        right: 45%;
        width: 12px;
        height: 12px;
        rotate: -45deg;
    }

`