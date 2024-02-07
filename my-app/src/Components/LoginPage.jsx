import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css'
const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        sendWelcomeEmail(loginEmail);
        window.location.href = '/';
      } else {
        setLoginError('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred. Please try again later.');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        sendWelcomeEmail(signupEmail);
        window.location.href = '/';
      } else {
        setSignupError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setSignupError('An error occurred. Please try again later.');
    }
  };

  const sendWelcomeEmail = (userEmail) => {
    // Placeholder for sending welcome email logic
    console.log('Sending welcome email to:', userEmail);
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setLoginError('');
    setSignupError('');
  };

  return (
    <div className="login-page-container">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card login-card">
              <div className="card-body">
                {isLoginView ? (
                  <div>
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                      {loginError && <div className="alert alert-danger">{loginError}</div>}
                      <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
                        Login
                      </button>
                    </form>
                    <p className="mt-3 text-center" onClick={toggleView}>Don't have an account? Signup</p>
                  </div>
                ) : (
                  <div>
                    <h2 className="card-title text-center mb-4">Signup</h2>
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                        />
                      </div>
                      {signupError && <div className="alert alert-danger">{signupError}</div>}
                      <button type="button" className="btn btn-success w-100" onClick={handleSignup}>
                        Signup
                      </button>
                    </form>
                    <p className="mt-3 text-center" onClick={toggleView}>Already have an account? Login</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;