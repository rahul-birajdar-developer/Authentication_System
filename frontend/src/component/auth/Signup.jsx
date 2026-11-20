import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

function Signup() {

    const handleSignup = (e) => {
        e.preventDefault();
        alert("Signup UI submitted!");
    };

    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <h1>Create Your Account</h1>
                <p>Join us and get started today.</p>
            </div>

            <div className={styles.right}>
                <form onSubmit={handleSignup} className={styles.form}>

                    <h2>Sign Up</h2>
                    <p>Create a new account.</p>

                    <label>Full Name</label>
                    <input type="text" placeholder="Full name" required />

                    <label>Username</label>
                    <input type="text" placeholder="Username" required />

                    <label>Email Address</label>
                    <input type="email" placeholder="Email address" required />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create password"
                        minLength={8}
                        required
                    />

                    <button type="submit">Create Account</button>

                    <p>
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>

                </form>
            </div>

        </div>
    );
}

export default Signup;