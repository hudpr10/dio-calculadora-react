import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #fff;
    min-width: 400px;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 400px;
    justify-items: center;
    align-items: center;
`