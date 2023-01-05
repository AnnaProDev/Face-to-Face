import style from "./Login.module.css";
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength } from "../../utils/validators";

const maxLength50 = maxLength(50)

const LoginForm = (props) =>{
	return <form onSubmit={props.handleSubmit}>
		<div className={style.input}>
			<Field placeholder="Email" name={"login"} component={Input} validate={[required, maxLength50]}/>
		</div>
		<div className={style.input}>
			<Field placeholder="Password" name={"password"} component={Input} validate={[required, maxLength50]}/>
		</div>
		<label className={style.checkbox}>
			<Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> Remember me
		</label>
		<div className={style.button}>
			<button>LOG IN</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = () =>{

	const onSubmit = (formData) => {
		console.log(formData);
	}
	return <div className={style.login}>
	<h1>Log In</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

export default Login;