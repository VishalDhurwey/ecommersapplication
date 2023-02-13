import './Login.css';

function Login() {
    return (

        <div className="container">
            <h3>Login</h3>
            
            <hr/>
              <form className='login-form'>
            <div className="mb-3">
            <label className="form-lable"htmlFor="" >Username</label>
            <input type="email" className="form-control"m/>
            </div>

            <div className="mb-3">
            <label className="form-lable"htmlFor="" >Password</label>
            <input type="password" className="form-control"m/>
            </div>

            <button className="float-end btn btn-primary">Sign In</button>
            </form>

        </div>

      
    );
}

export default Login ;