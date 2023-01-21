import { Field } from "redux-form";
import style from "./FormsControl.module.css"

export const Textarea = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={hasError ? style.error : ""}>
			<textarea {...input} {...props} />
			{hasError && <h5 >{meta.error}</h5>}
		</div>
	)
};

export const Input = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div >
			<input className={hasError ? style.error : ""} {...input} {...props} />
			{hasError && <h5 >{meta.error}</h5>}
		</div>
	)
}

export const createField = (placeholder, name, validators, component, props = {}, text ="") => (
		<Field placeholder={placeholder}
		name = {name}
		validator={validators}
		component ={component}
		{...props}	/>

)