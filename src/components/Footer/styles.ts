import styled from "styled-components";

export const Footer = styled.footer`
   
    footer{
        background-color: #201f21;
        color: #fff;
        padding: 30px 0;
        font-weight: bold;
    }

    .container{
        max-width: 90%;
        margin: 0 auto;
        padding: 0 15px;
    }

    .row{
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col-md-4{
        flex: 0 0 33%;
        max-width: 33%;
        text-align: center;
    }

    h3{
        font-size: 25px;
        margin-bottom: 15px;
        color: #fff;
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li{
        margin-bottom: 10px;
    }

    .social-icons li{
        display: inline-block;
        margin-right: 10px;
    }

    .social-icons li a{
        color: #fff;
        font-size: 30px;
    }

    @media(max-width: 991px){
        .col-md-4{
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    @media (max-width: 767px){
        .col-md-4{
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
   

`