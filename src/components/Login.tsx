import React, { FC, useState, FormEvent } from 'react';

import "./Login.scss";
import useAPI from '../hooks/useAPI';

const Login: FC = () => {
    const { login } = useAPI();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = { email, password };
        login(data);
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pasword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pasword" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    )
}

export default Login;