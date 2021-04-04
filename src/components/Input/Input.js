import styled from "styled-components"
import { inputValidation } from "../../helpers"

const Input = ({ name, placeholder, handleChange, value, type,
    errors, handleBlur, email = false }) => {
    return (
        <InputField>
            <input
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                type={type}
                onBlur={handleBlur}
            />
            {
                inputValidation(errors, name, value, email)
            }
        </InputField>
    )
}
export default Input


const InputField = styled.div`
   margin:20px 0;
`;
