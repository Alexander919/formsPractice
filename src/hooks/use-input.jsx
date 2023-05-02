import { useState } from "react";

function useInput(validateValue) {
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredTouched, setEnteredTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && enteredTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
        setEnteredTouched(true);
    };

    const inputBlurHandler = () => {
        setEnteredTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setEnteredTouched(false);
    }

    return [enteredValue, valueIsValid, hasError, valueChangeHandler, inputBlurHandler, reset]

}

export default useInput;