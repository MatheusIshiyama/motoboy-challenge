import { useState } from "react";
import styles from "../styles/login.module.scss";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className={styles.container}>
      <form className={styles.card}>
        <h1>Login</h1>
        <div>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </form>
    </div>
  );
}
