import './select.css'

function Input({ options, onChange }) {
    return (
        <select className='select_component' onChange={(event) => onChange(event.target.value)}>
            {
                options.map((element, index) => (
                    <option key={index} value={element}>{element}</option>
                ))
            }
        </select>
    )
}

export default Input;