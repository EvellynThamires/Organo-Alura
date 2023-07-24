import './SuspendList.css'

const SuspendList = (props) => {
    return (
        <div className='suspend-list'> 
            <label>{props.label}</label>
            <select onChange={event => props.updatingTextField(event.target.value)} value={props.value}>
                {props.items.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>
    )
}

export default SuspendList