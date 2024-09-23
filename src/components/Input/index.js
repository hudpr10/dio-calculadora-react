import { InputContainer } from "./style";

const Input = ({ currentValue }) => {
    return (
        <InputContainer>
            <input 
                disabled 
                value={currentValue} 
            />
        </InputContainer>
    )
}

export default Input;
