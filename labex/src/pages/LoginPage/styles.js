import styled from 'styled-components';

export const FormContainer = styled.div`
    
    width: 100%;
    
    display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;

`

export const LoginForm = styled.form`
    border:1px solid #666666;
    display: flex;
    flex-direction:column;
    width:400px;
    height:70vh;
    align-items: center;
    justify-content:center;
    margin: 60px;
    

    input{
        width:300px;
        height: 30px;
        display: flex;
        border-radius:5px;
        border:1px solid #999;

        margin:8px;
        justify-content:center;
        align-items:center;
    }

    Button{
        width:300px;
        height: 30px;
        display: flex;
        border-radius:5px;

    }

`
