import './input.css'

function Input({value, onChange, placeholder, type = 'text'}) {
    return (
        <label className='component_input'>
            <p>{placeholder}</p>
            <input type={type} value={value} onChange={event=>onChange(event.target.value.trim())}/>
        </label>
    )
}

export default Input;