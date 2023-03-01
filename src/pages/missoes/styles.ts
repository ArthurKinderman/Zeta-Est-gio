import styled from "styled-components";


export const Menu2 = styled.menu`


        h1{
            font-size: 60px;
            letter-spacing: 10px;
        }

        .container{
            width: 100%;
            min-height: 100vh;
            display: grid;
            place-items: center;
        }

        .row{
            width:80%;
            max-width: 1170px;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 50px 30px;
        }

        .row .left {
            overflow: hidden;
        }

        .row .left img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .row .right{
            display: flex;
            align-items: center;
        }

        .row .right .content{
            padding-left: 20px;
        }
    
        .row .right .content p{
            font-size: 16px;
            line-height: 26px;
            padding-bottom: 1px;
        }

        @media (max-width: 991px){
            .row .right .content{
                padding-left: 0;
            }
        }

        @media(max-width: 768px){
            .row{
                width: 80%;
                grid-template-columns: 1fr;
            }
            h1{
                text-align: center;
                font-size: 35px;
            }
        }
        
  

    

`