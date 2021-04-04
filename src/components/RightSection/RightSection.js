import styled from "styled-components"
import { useState, useEffect } from "react"
import { useInput } from "../../hooks"
import Input from "../Input/Input"
import { downloadText, APIurl, APIHeader } from "../../helpers"
import axios from "axios"
const RightSection = () => {
    const [id, setId] = useState(null)
    const [credentials, handleChange] = useInput({
        fullName: "",
        companyName: "",
        phone: 0,
        email: ""
    });
    const [errors, handleError] = useInput();
    const [privacy, setPrivacy] = useState(false)
    const [privacyColor, setPrivacyColor] = useState(false)
    useEffect(() => {
        const getLink = async () => {
            if (id) {
                try {
                    await axios({
                        method: 'get',
                        url: `${APIurl}/file?id=${id}`,
                        ...APIHeader
                    });
                } catch (ex) {
                    console.log({ ex })
                    if (ex.response.status === 404) {
                        window.location.href = 'https://joonko.co/'
                    }
                }
            }
        }
        getLink()
    }, [id])

    const handleSubmit = async e => {
        e.preventDefault()
        if (!privacy) return setPrivacyColor(true)
        try {
            const data = {
                name: credentials.fullName,
                company_name: credentials.companyName,
                email: credentials.email,
                phone: credentials.phone,
            }
            const res = await axios({
                method: 'post',
                url: `${APIurl}/data`,
                data: JSON.stringify(data), ...APIHeader
            });
            setId(res.data.id)
        } catch (ex) {
            console.log({ ex })

        }

    }
    return (
        <SectionWrapper >
            <div className="section--headline">Want to get the full version?</div>
            <div className="form--headline">
                Fill in the form below:
            </div>
            <form className="download">
                <Input value={credentials.fullName} placeholder="Full name"
                    handleBlur={handleError}
                    errors={errors}
                    handleChange={handleChange} name="fullName" type="text" />
                <Input value={credentials.companyName}
                    handleBlur={handleError}
                    errors={errors} placeholder="Company name" handleChange={handleChange} name="companyName" type="text" />
                <Input value={credentials.phone} handleBlur={handleError}
                    errors={errors} placeholder="Phone" handleChange={handleChange} name="phone" type="number" />
                <Input email value={credentials.email} handleBlur={handleError}
                    errors={errors} placeholder="Work email" handleChange={handleChange} name="email" type="email" />
                <button className="submit" disabled={!credentials.fullName || !credentials.companyName || !credentials.phone || !credentials.email} onClick={handleSubmit}>{downloadText} </button>
                <label className="checkbox--container">
                    <input type="checkbox" onChange={() => setPrivacy(pre => !pre)} checked={privacy} />
                    <span className="checkmark">
                        <span style={{ color: privacyColor ? "red" : "#010A60" }}>I agree to the <UnderlineTitle>privacy policy</UnderlineTitle> including for Joonko to use my contact details to contact me for marketing purposes</span></span>
                </label>
            </form>
        </SectionWrapper>
    )
}
export default RightSection

const SectionWrapper = styled.div`

    margin: 174px 243px 130px 123px;
    width:412px;
    padding-bottom: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 16px #00000029;
    div.section--headline{
        text-align: center;
        font: normal normal 800 24px/44px Muli;
        letter-spacing: 0px;
        color: #010A60;
        margin-top:52px;
    }
    div.form--headline{
        text-align: center;
        font: normal normal normal 18px/59px Muli;
        letter-spacing: 0px;
        color: #010A60;
    }
    form.download{
        display:flex;
        flex-direction:column;
        align-items:center;
        input{
            border: 0;
            outline: 0;
            background: transparent;
            border-bottom: 1px solid #010A60;
            padding: 0 40px;
            &::-webkit-input-placeholder{
                font: normal normal normal 18px/28px Muli;
                letter-spacing: 0px;
                color: #707070;
                opacity: 1;
        }
    }
    button.submit{
        background: #FFA52E 0% 0% no-repeat padding-box;
        border-radius: 50px;
        width:216px;
        font-size:18px;
        height:54px;
    }
    label.checkbox--container{
        padding:20px 40px 0 70px;
    }
    }
    @media screen and (max-width: 414px) {
        margin: 40px 37px 90px 40px;
        width:336px;
    }
    `;

const UnderlineTitle = styled.span`
    color:#7B3FF2;
    border-bottom:1px solid #7B3FF2;
    `
