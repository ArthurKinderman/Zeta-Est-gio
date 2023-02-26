import styled from "styled-components";


export const Section = styled.section`



    .container{
        padding-bottom: 80px;
        display: grid;
        place-items: center;
    }

    .row{
        width: 80%;
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        overflow-x: hidden;
        padding: 5rem 0;
    }
    .row .imgWrapper{
        overflow: hidden;
    }
    .row .imgWrapper img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
    }
    .row .imgWrapper:hover img{
        transform: scale(1.25);
    }
    .row .contentWrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
    }

    .row .contentWrapper span.textWrapper{
        display: block;
        font-size: 30px;
        text-transform: capitalize;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
    }
    .row .contentWrapper span.textWrapper span{
        display: inline-block;
        background: black;
        width: 70px;
        height: 5px;
    }
    .row .contentWrapper h2{
        font-size: 40px;
        font-weight: 700;
        color: black;
        padding-bottom: 20px;
    }
    .row .contentWrapper p{
        font-size: 16px;
        line-height: 25px;
        padding-bottom: 25px;
    }
    .row .contentWrapper a{
        display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        background: black;
        color: #fff;
        padding: 15px 40px;
        letter-spacing: 1px;
        user-select: none;
    }


    @media (max-width: 991px){
        .row{
            grid-template-columns: 1fr;
            grid-gap: 50px;
        }
        .row .contentWrapper{
            padding-left: 0;
        }
    }
    @media (max-width: 768px) {
        .row{
            width: 90%;
        }
        .row .contentWrapper h2{
            font-size: 30px;
            padding-bottom: 20px;
        }
        .row .contentWrapper p{
            line-height: 24px;
        }
    }
    @media (max-width: 575px) {
        .row .contentWrapper span.textWrapper{
            font-size: 18px;
        }
        .row .contentWrapper h2{
            font-size: 25px;
        }
        .row .contentWrapper p{
            font-size: 15px;
            line-height: 22px;
        }
        .row .contentWrapper a{
            font-size: 15px;
            padding: 10px 20px;
        }
    }


`