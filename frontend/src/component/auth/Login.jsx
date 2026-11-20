import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login UI submitted!");
    };

    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <h1>Welcome Back!</h1>
                <p>Continue your journey. Sign in to your account.</p>
            </div>

            <div className={styles.right}>
                <form onSubmit={handleLogin} className={styles.form}>

                    <h2>Login</h2>
                    <p>Enter your credentials to continue.</p>

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                    />

                    <div className={styles.forgot}>
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit">Login</button>

                    <p>
                        Don't have an account?
                        <Link to="/signup"> Sign Up</Link>
                    </p>

                </form>
            </div>

        </div>
    );
}

export default Login;