import { useState } from "react";

function useInput(validation) {
    const [inputName, setInputName] = useState("");
    const [touched, setTouched] = useState(false);

    const isValid = validation(inputName);
    const inputIsInvalid = !isValid && touched;

    const changeHandler = (e) => {
        setInputName(e.target.value);
        setTouched(true);
    };

    const blurHandler = () => {
        setTouched(true);
    };

    const checkValid = () => {
        if(!isValid) {
            setTouched(true);
            return false;
        }
        return true;
    }

    const formSubmit = () => {
        setInputName("");

        setTouched(false);
    };

    return [inputName, inputIsInvalid, changeHandler, blurHandler, formSubmit, checkValid];

}

export default useInput;