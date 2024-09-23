import { ButtonStyled } from "./style";

const Button = ({ text, aoClicar }) => {
    return (
        <ButtonStyled onClick={ aoClicar }>
            {text}
        </ButtonStyled>
    )
}   

export default Button;