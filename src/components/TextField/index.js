import './TextField.css'

export const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    );
}