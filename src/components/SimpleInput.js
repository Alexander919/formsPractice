import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
    const [name, nameInputIsInvalid, nameChangeHandler, nameBlurHandler, submitName, checkName] = useInput((name) => name.trim() !== "");
    const [surname, surnameInputIsInvalid, surnameChangeHandler, surnameBlurHandler, submitSurname, checkSurname] = useInput((name) => name.trim() !== "");
    const [email, emailInputIsInvalid, emailChangeHandler, emailBlurHandler, submitEmail, checkEmail] = useInput((email) => /^\S+@\S+\.\S+$/.test(email));

    const formSubmitHandler = (e) => {
        e.preventDefault();

        let validationError = false;
        for (let check of [checkName, checkSurname, checkEmail]) {
            if (!check()) validationError = true;
        }
        if (validationError) return; //do not submit if error in validation

        for (let submit of [submitName, submitSurname, submitEmail]) {
            submit();
        }
        console.log(name, surname, email);

    };

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
    const surnameInputClasses = surnameInputIsInvalid ? "form-control invalid" : "form-control";
    const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onChange={nameChangeHandler} onBlur={nameBlurHandler} value={name} type='text' id='name' />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={surnameInputClasses}>
                <label htmlFor='surname'>Your Surname</label>
                <input onChange={surnameChangeHandler} onBlur={surnameBlurHandler} value={surname} type='text' id='surname' />
                {surnameInputIsInvalid && <p className="error-text">Surname must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email} type='email' id='email' />
                {emailInputIsInvalid && <p className="error-text">Invalid email</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
