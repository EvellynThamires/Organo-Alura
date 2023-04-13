import './SuspendList.css'

const SuspendList = (props) => {
    return (
        <div className='suspend-list'> 
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>
    )
}

export default SuspendList