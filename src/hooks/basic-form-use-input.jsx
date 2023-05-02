import { useState } from "react";

function useInput(validateInput) {
    const [input, setInput] = useState("");
    const [touched, setTouched] = useState(false);

    const isValid = validateInput(input);
    const inputFieldError = !isValid && touched;

    const changeHandler = (e) => {
        setInput(e.target.value);
        setTouched(true);
    };

    const blurHandler = () => {
        setTouched(true); 
    };

    const setErrorIfInvalid = () => {
        if(!isValid) {
            setTouched(true);
            return true;
        }
        return false;
    };

    const resetField = () => {
        setInput("");
        setTouched(false);
    };

    return [input, inputFieldError, changeHandler, blurHandler, setErrorIfInvalid, resetField];
}

export default useInput;