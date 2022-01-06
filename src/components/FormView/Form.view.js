import styled from "styled-components";

export const Form = {
    Wrapper: styled.form`
        width: 600px;
        display: flex;
        flex-direction: column;
        background-color: #121212;
        color: #f5f5f5;
        padding: 60px;
    `,
    Header: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
    `,
    Title: styled.h3`
        color: #f5f5f5;
    `,
    Icon: styled.div`
        width: 30px;
        height: 30px;
        color: #1e191b;
        background-color: #f48fb2;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 7px;
    `,
    Paragraph: styled.p`
        color: #939393;
        text-align: center;
        margin-top: 5rem;
    `,
    LinkWrapper: styled.div`
        display: flex;
        justify-content: ${props => props.justify || "space-between"};
        & > a{
            text-decoration: none;
            color: #90caf9;
        }
    `,
    Link: styled.a`
        text-decoration: none;
        color: #90caf9;
    `,
    InputWrapper: styled.div`
        display: flex;
        column-gap: 10px;
    `,
};

export const Button = styled.button`
    width: 100%;
    background-color: #90caf9;
    border: 1px solid #90caf9;
    border-radius: 5px;
    color: #222f3a;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 15px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background-color: #f48fb2;
        border: 1px solid #f48fb2;
    }
`;