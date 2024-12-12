import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left column */}
      <div className="login-left">
        <h1>Welcome to Shortener</h1>
        <p>Log in to manage your shortened links quickly and efficiently.</p>
      </div>

      {/* Right column */}
      <div className="login-right">
        <form>
          <h2>Log In</h2>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
