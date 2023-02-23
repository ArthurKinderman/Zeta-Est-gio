import styled from "styled-components";

export const Footer = styled.footer`

    footer{
        background-color: black;
        color: white;
        text-align: center;
        padding: 2em;
        bottom: 0;
        position: fixed;
        width: 100%;
    }

    .social_list {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }

    .social_list li {
        margin: 0 1em;
    }

    .social_list li:hover{
        color: #ffbb33;
    }

    .social_list svg{
        font-size: 1.5rem;
        cursor: pointer;
    }

    .copy_right{
        margin-top: 2em;
    }

`