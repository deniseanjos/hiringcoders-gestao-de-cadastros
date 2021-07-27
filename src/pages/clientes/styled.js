import styled from "styled-components";

export const Container = styled.div`
    margin: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-transform: uppercase;
        color: black;
        font-size: 24px;
        text-align: center;
    }

    form, table {
        width: 90%;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    input {
        margin: .5rem;
        min-width: 35%;
    }

    th {
        text-transform: uppercase;
        text-align: center;
        background-color: #D6D2C4;
    }

    td {
        text-align: center;
    }
`;


