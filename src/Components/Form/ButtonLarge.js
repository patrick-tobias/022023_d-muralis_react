const ButtonLarge = ({ children, onclick, type }) => {
    return (
        <button className="btn btn-success btn-lg text-capitalize fw-bold" type={type} onClick={onclick}>{children}</button>
    )
}

export default ButtonLarge;