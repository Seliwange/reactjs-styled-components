import styled from 'styled-components';

const InputView = styled.input`
    width: 100%;
    height: 40px;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #505050;
    background: transparent;
    color: white;
    margin-bottom: 20px;

    &:focus{
        outline: 1px solid ${props => (props.pattern === true) ? "green" : "red"};
    }
`;

const InputWrapper = styled.div`
    color: #505050;
`;

export const Input = ({placeholder, onChange, type, name, value, pattern, title}) => {
    return(
        <InputWrapper>
            <InputView
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                required
                type={type}
                name={name}
                pattern={pattern}
                title={title}
            />
        </InputWrapper>
    );
};