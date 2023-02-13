import './Login.css';

function Login() {

    function handleLogin(){

    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json)) 
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