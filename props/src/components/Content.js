import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display:inline-block;
    justify-content:center;
    border:1px solid black;
    width:200px;
    height:200px;
    margin:10px;
    background-color: ${(props) => props.cor};
   
    
`
export const TEXT = styled.h1`
    color:#FFF;
    align-items:center; 
    display: flex;
    justify-content:center;
`

function Content(props) {
    return (
        <Container cor={props.cor}>
            <TEXT>{props.text}</TEXT>
        </Container>
    )
}

export default Content
