import style from "./Login.module.css"

const LoginForm = () =>{
	return <form>
		<div>
			<input placeholder="Login"/>
		</div>
		<div>
			<input placeholder="Password"/>
		</div>
		<div>
			<input type={"checkbox"}/> remember me
		</div>
		<div>
			<button type="submit">Login</button>
		</div>
	</form>
}

const Login = () =>{
	return <div className={style.login}>
	<h1>Login</h1>
		<LoginForm />
	</div>
}

export default Login;