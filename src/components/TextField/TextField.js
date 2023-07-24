import './TextField.css'

const TextField = (props) => {

    const modifiedPlaceHolder = `${props.placeholder}...`

    const typing = (event) => {
        props.updatingTextField(event.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={typing} required={props.mandatory} placeholder={modifiedPlaceHolder}/>
        </div>
    )
}

export default TextField