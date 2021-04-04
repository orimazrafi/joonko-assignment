import styled from "styled-components"

export const inputValidation = (errors, field, value, email = false) => (
    <ErrorWrapper>
        {!email ?
            errors &&
            errors[field] === "" &&
            !value &&
            `${capitalizeFirstLetter(field)} is required`
            : ValidateEmail(errors, value)
        }

    </ErrorWrapper>
);
export const ValidateEmail = (errors, email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
        <div>
            {errors && !re.test(String(email).toLowerCase()) ? <ErrorWrapper>Invalid, please try again</ErrorWrapper> : null}
        </div>
    )
};
export const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
export const bulletPoints = ["Major religious and ethical days of celebration and observance", "Social Media tips to showcase your D&I initiatives", "Activities to help you celebrate all the biggest holidays with inclusion in mind"]
export const downloadText = "Download now >>";


const ErrorWrapper = styled.div`
    font: normal normal normal 12px/28px Muli;
    letter-spacing: 0px;
    color: #ED6982;
`;
export const APIurl = 'https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/';

export const APIHeader = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM',
    }
};