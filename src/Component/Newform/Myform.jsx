import React from 'react'
import './Myform.css'
import { useState } from 'react'
import Childform from './Childform'

const Myform = () => {
    let [inputState, setInput] = useState({
        fname: "",
        lname: "",
        mail: "",
        pwd: "",
        isError: { fname: "", lname: "", mail: "", pwd: "" }
    }
    )
    let valid_mail = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    let valid_password = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    let [collectState, setCollect] = useState([])



    let changeHandler = (event) => {
        event.persist();
        let { name, value } = event.target;
        let err = { ...inputState.isError }
        switch (name) {
            case 'fname': err.fname = value.length <= 0 ? "Required field" : (value.length <= 3 ? "Min 3 character" : "")
                break;
            case 'lname': if (value.length <= 0)
                err.lname = "Required field"
            else if (value.length < 3)
                err.lname = "Min 3 character"
            else
                err.lname = ""
                break;
            case 'mail': if (value.length <= 0) {
                err.mail = "Required field"

            }
            else if (!valid_mail.test(value)) {
                err.mail = "Wrong input"
            }
            else {
                err.mail = ""
            }
                break;
            case 'pwd': err.pwd = value.length <= 0 ? "Required field" : (valid_password.test(value) ? "" : "Wrong pattern")
                break;
            default: console.log("No error");
                break;
        }
        // console.log("Change event",event.target.name,event.target.value);
        // console.log("Change event:",name,value);
        setInput({ ...inputState, [name]: value, isError: err })
        console.log("Error msg:", inputState.isError);
    }

    let submitHandler = (event) => {
        event.preventDefault();
        const { isError, ...formdata } = inputState
        console.log("Submit value", formdata);
        setCollect([...collectState, formdata])
    }
    return (
        <div className="myForm">
            <form onSubmit={submitHandler}>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" onChange={changeHandler} /><br />
                {inputState.isError.fname.length > 0 ? <p className="error">{inputState.isError.fname}</p> : ""}
                <br />
                <label htmlFor='lname'>Last name:</label>
                <input type="text" id="lname" name="lname" onChange={changeHandler} /><br />
                {inputState.isError.lname.length > 0 ? <p className="error">{inputState.isError.lname}</p> : ""}
                <br />
                <label htmlFor="email">Email:</label>
                <input type="mail" id="mail" name="mail" onChange={changeHandler} /><br />
                {inputState.isError.mail.length > 0 ? <p className="error">{inputState.isError.mail}</p> : ""}
                <br />
                <label htmlFor="pwd">Passsword:</label>
                <input type="text" id="pwd" name="pwd" onChange={changeHandler} /><br /><br />
                {inputState.isError.pwd.length > 0 ? <p className="error">{inputState.isError.pwd}</p> : ""}
                <input type="submit" value="Add data" />
            </form>
            {collectState.map((item, index) =>
                <Childform {...item} key={index} />)}
        </div>
    )
}

export default Myform