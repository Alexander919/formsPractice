import useInput from "../hooks/basic-form-use-input";

const BasicForm = (props) => {
    const textFieldValidator = (value) => value.length > 0;
    const emailFieldValidator = (email) => /^\S+@\S+\.\S+$/.test(email);

    const [
        name, 
        nameFieldError, 
        nameChangeHandler, 
        nameBlurHandler, 
        nameSetErrorIfInvalid, 
        nameFieldReset
    ] = useInput(textFieldValidator);

    const [
        lastName, 
        lastNameFieldError, 
        lastNameChangeHandler, 
        lastNameBlurHandler, 
        lastNameSetErrorIfInvalid, 
        lastNameFieldReset
    ] = useInput(textFieldValidator);

    const [
        email, 
        emailFieldError, 
        emailChangeHandler, 
        emailBlurHandler, 
        emailSetErrorIfInvalid, 
        emailFieldReset
    ] = useInput(emailFieldValidator);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        let submit = true;
        [nameSetErrorIfInvalid, lastNameSetErrorIfInvalid, emailSetErrorIfInvalid].forEach(isInvalid => {
            if(isInvalid()) submit = false;
        })
        if(!submit) return;

        console.log("submit", name, lastName, email);
        nameFieldReset();
        lastNameFieldReset();
        emailFieldReset();
    };

    const nameInputClasses = nameFieldError ? "form-control invalid": "form-control";
    const lastNameInputClasses = lastNameFieldError ? "form-control invalid": "form-control";
    const emailInputClasses = emailFieldError ? "form-control invalid": "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={nameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler} type='text' id='name' />
                    {nameFieldError && <p className="error-text">Name must have a value</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='last-name'>Last Name</label>
                    <input value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} type='text' id='last-name' />
                    {lastNameFieldError && <p className="error-text">Last name must have a value</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} type='text' id='email' />
                {emailFieldError && <p className="error-text">Invalid email</p>}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
