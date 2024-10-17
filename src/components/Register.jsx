import { useRef } from 'react';

const Register = () => {
    const usernameRef = useRef();
    const useremailRef = useRef();
    const userpasswordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = usernameRef.current.value;
        const useremail = useremailRef.current.value;
        const userpassword = userpasswordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach((el) => el.textContent = '');

        
        const usernameError = username.length < 3 ? "Username must be at least 3 characters." : '';
        const useremailError = !/\S+@\S+\.\S+/.test(useremail) ? "Please enter a valid email." : '';
        const userpasswordError = userpassword.length < 6 ? "Password must be at least 6 characters." : '';
        const confirmPasswordError = userpassword !== confirmPassword ? "Passwords do not match." : '';

        
        document.getElementById('username-error').textContent = usernameError;
        document.getElementById('useremail-error').textContent = useremailError;
        document.getElementById('userpassword-error').textContent = userpasswordError;
        document.getElementById('confirmpassword-error').textContent = confirmPasswordError;

        
        if (usernameError || useremailError || userpasswordError || confirmPasswordError) return;

        console.log('Username:', username);
        console.log('Email:', useremail);
        console.log('Password:', userpassword);
        console.log('Confirm Password:', confirmPassword);

        
        usernameRef.current.value = '';
        useremailRef.current.value = '';
        userpasswordRef.current.value = '';
        confirmPasswordRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    ref={usernameRef}
                    required
                    aria-describedby="username-error"
                    style={{ width: '100%', padding: '8px', marginTop: '10px' }}
                />
                <span id="username-error" className="error-message" style={{ color: 'red' }}></span>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="useremail">Email</label>
                <input
                    type="email"
                    id="useremail"
                    ref={useremailRef}
                    required
                    aria-describedby="useremail-error"
                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
                <span id="useremail-error" className="error-message" style={{ color: 'red' }}></span>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="userpassword">Password</label>
                <input
                    type="password"
                    id="userpassword"
                    ref={userpasswordRef}
                    required
                    aria-describedby="userpassword-error"
                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
                <span id="userpassword-error" className="error-message" style={{ color: 'red' }}></span>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmpassword"
                    ref={confirmPasswordRef}
                    required
                    aria-describedby="confirmpassword-error"
                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
                <span id="confirmpassword-error" className="error-message" style={{ color: 'red' }}></span>
            </div>
            <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Register
            </button>
        </form>
    );
}

export default Register;
