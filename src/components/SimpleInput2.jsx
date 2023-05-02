import useInput from "../hooks/use-input";

function SimpleInput2() {
    const [enteredName, enteredNameIsValid, nameInputHasError, nameChangeHandler, nameBlurHandler, resetName] = useInput((value) => value.trim() !== "");
    const [enteredEmail, enteredEmailIsValid, emailInputHasError, emailChangeHandler, emailBlurHandler, resetEmail] = useInput((value) => value.includes("@"));

    const formIsValid = enteredNameIsValid && enteredEmailIsValid /* && ageIsValid && etcIsValid*/;

    const formSubmitHandler = (e) => {
        e.preventDefault();
        resetName();
        resetEmail();
        console.log(enteredName, enteredEmail);
    }

    const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
    const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} type='text' id='name' />
                {nameInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            {/* <div className={surnameInputClasses("form-control invalid", "form-control")}>
                <label htmlFor='surname'>Your Surname</label>
                <input onChange={surnameChangeHandler} onBlur={surnameBlurHandler} value={surname} type='text' id='surname' />
                {surnameInputIsInvalid && <p className="error-text">Surname must not be empty</p>}
            </div> */}
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} type='text' id='email' />
                {emailInputHasError && <p className="error-text">Invalid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );

}

export default SimpleInput2;