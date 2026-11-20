import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {

    const handleReset = (e) => {
        e.preventDefault();
        alert("Password reset request submitted!");
    };

    return (
        <div className={styles.container}>

            <form onSubmit={handleReset} className={styles.form}>

                <h2>Forgot Password?</h2>

                <p>
                    Enter your registered email address.
                    We'll help you reset your password.
                </p>

                <label>Email Address</label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                />

                <button type="submit">Send Reset Link</button>

                <Link to="/login">Back to Login</Link>

            </form>

        </div>
    );
}

export default ForgotPassword;