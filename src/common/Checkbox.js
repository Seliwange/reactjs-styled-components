import styled from "styled-components";

const CheckboxWrapper = styled.div`
        width: 100%;
        margin-bottom: 35px;
`;
const CheckboxLabel = styled.label`
        font-weight: 400;
        display: block;
        color: #ebebeb;
        padding-left: 30px;
        position: relative;
        cursor: pointer;
`;
const CheckboxView = styled.input`
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        &:checked + span::before{
            content: "";
            width: 10px;
            height: 10px;
            background-color: #ebebeb;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
`;
const CheckboxSpan = styled.span`
        position: absolute;
        width: 18px;
        height: 18px;
        border: 1px solid #ebebeb;
        left: 0;
        top: ${props => props.top || "25%"};
`;

export const Checkbox = ({label, top}) => (
    <CheckboxWrapper>
        <CheckboxLabel>
            <CheckboxView type="checkbox" />
            <CheckboxSpan top={top} />
            {label}
        </CheckboxLabel>
    </CheckboxWrapper>
);