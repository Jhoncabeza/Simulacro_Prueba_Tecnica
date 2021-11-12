import styled from 'styled-components'

export const Formu = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 3%;
    border: 1px solid red;
   
`
export const FormuH2 = styled.h2`
    text-align: center;
    color: rgb(173, 69, 69);;
`

export const FormuButton = styled.button`
    color: rgb(173, 69, 69);
    background-color: white;
    border: 1px solid red;
    font-size: 100%;
    margin-left: 40%;
`

export const FormuInput = styled.input`
    margin-bottom: 10px;
    margin-left: 10px;
    text-align: center;
`

export const FormuSelect = styled.select`
   margin-bottom: 10px;
    height:2rem;
`

export const FormuLabel = styled.label`
    color: red;
`