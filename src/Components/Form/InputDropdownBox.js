const InputDropdownBox = ({ children, itens, label, onchange, required, value }) => {
    return (
        <div className="m-0 p-0 text-start">
            <label htmlFor={label} className="form-label text-capitalize">{children}</label>
            <select id={label} className="dropdown-toggle btn btn-outline-primary w-100" required={required} value={value} onChange={onchange}>
                <option className="dropdown-item" defaultValue={''}></option>
                {itens.map(item =>
                    <option className="dropdown-item" key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default InputDropdownBox;