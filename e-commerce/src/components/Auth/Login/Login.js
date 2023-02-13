import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const navigate = useNavigate();

    function handleLogin(){

            navigate("/");
    }

    return (

        <div className="container">
            <h3>Login</h3>
            
            <hr/>
              <form onSubmit={handleLogin} className='login-form'>
            <div className="mb-3">
            <label className="form-lable"htmlFor="" >Username</label>
            <input type="text" className="form-control"m/>
            </div>

            <div className="mb-3">
            <label className="form-lable"htmlFor="" >Password</label>
            <input type="password" className="form-control"m/>
            </div>

            <button type='submit' className="float-end btn btn-primary">Sign In</button>
            </form>

        </div>

      
    );
}

export default Login ;