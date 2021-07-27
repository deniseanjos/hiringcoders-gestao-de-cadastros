import styled from "styled-components";

export const Menu = styled.div`
    background-color: #5D534A;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    position: fixed;
    top: 0;
    width: 100vw;

    h2 {
        text-transform: uppercase;
        color: #F7DAD9;
    }
`;

export const Links = styled.div`
    a {
        margin: 1rem;
        color: #FFF5DA;
        
    }
`;