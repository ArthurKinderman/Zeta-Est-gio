import React, {Component} from 'react';
import styled ,{ keyframes} from 'styled-components'
import {bounce} from 'react-animations'


export const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

export const Section = styled.section`

    .title{
        text-align: center;
        margin-top: 4em;
        text-transform: uppercase;
        font-size: 40px;
        justify-content: center;
    }
    h3{
        margin: 40px 20px;
        text-align: center;
        font-size: 25px;
    }
    .section{
        padding-left: 40px;
        width: 22em;
        box-shadow: rgba(20,40,93, 0.23) 20px 30px 20px -10px;
        text-align: center;
        border-radius: 6%;
    }
    .container{
        margin-top: 5em;
        display: flex;
        justify-content: center;
        column-gap: 20px; 
    }

`
