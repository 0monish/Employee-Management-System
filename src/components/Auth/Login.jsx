import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = ({ handleLogin }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passwordErrors, setPasswordErrors] = useState({
        length: false,
        alphabet: false,
        number: false,
        special: false,
    });

    // TO SET FORM DATA
    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            validateEmail(e.target.value)
        }
        if (e.target.name === 'password') {
            validatePassword(e.target.value)
        }

    }

    // TOGGLE PASSWORD VISIBILITY
    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    }

    // VALIDATE EMAIL
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]{6,}@(gmail|outlook|yahoo)\.com$/
        if (!emailRegex.test(email)) {
            setEmailError('Min 6 characters before @ and only @gmail.com, @outlook.com, or @yahoo.com are allowed.')
        } else {
            setEmailError('')
        }
    };

    // VALIDATE PASSWORD
    const validatePassword = (password) => {
        const lengthValid = password.length >= 8 && password.length <= 15
        const alphabetValid = /[a-zA-Z]/.test(password)
        const numberValid = /\d/.test(password)
        const specialValid = /[@$!%*?&]/.test(password)

        setPasswordErrors({
            length: !lengthValid,
            alphabet: !alphabetValid,
            number: !numberValid,
            special: !specialValid,
        });
    };

    // TO SET LOGIN BUTTON DISABLED OR ENABLED
    const isFormValid =
        !emailError &&
        !Object.values(passwordErrors).some((error) => error) &&
        formData.email !== '' &&
        formData.password !== ''


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(formData.email, formData.password)

        setFormData({ email: '', password: '' })
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center border-4 rounded-tl-3xl rounded-br-3xl border-emerald-300 px-40 py-14">
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        value={formData.email}
                        placeholder="Email"
                        name='email'
                        onChange={handleChanges}
                        required
                        className="border-2 bg-transparent px-9 py-2 text-white border-yellow-300 placeholder-white rounded-full"
                    />
                    {emailError && (
                        <p className="text-red-500 mt-2 text-sm">{emailError}</p>
                    )}
                    <div className="relative mt-5">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            value={formData.password}
                            placeholder="Password"
                            name='password'
                            onChange={handleChanges}
                            required
                            maxLength={15}
                            className="border-2 bg-transparent px-9 py-2 text-white border-yellow-300 placeholder-white rounded-full"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white active:scale-75"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Password Error Messages */}
                    <div className="mt-3 text-sm text-red-500">
                        {passwordErrors.length && <p>Password must be 8-15 characters long.</p>}
                        {passwordErrors.alphabet && <p>Must include at least one alphabet.</p>}
                        {passwordErrors.number && <p>Must include at least one number.</p>}
                        {passwordErrors.special && <p>Must include at least one special character.</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`bg-yellow-300 text-xl font-bold mt-10 px-10 py-2 rounded-tr-none rounded-br-3xl rounded-tl-3xl rounded-bl-none ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'
                            }`}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login