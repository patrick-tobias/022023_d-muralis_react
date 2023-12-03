const InputText = ({ children, label, onchange, required, type, value }) => {
    return (
        <div className="m-0 p-0 text-start">
            <label htmlFor={label} className="form-label text-capitalize mb-0" >{children}</label>
            <input id={label} type={type} className="form-control border-primary" required={required} value={value} onChange={onchange}></input>
        </div>
    )
}

export default InputText;