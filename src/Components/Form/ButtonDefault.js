const ButtonDefault = ({ children, onclick, type }) => {
    return (
        <button className="btn btn-warning text-capitalize text-white" type={type} onClick={onclick}><p className="m-0 p-0 mx-3">{children}</p></button>
    )
}

export default ButtonDefault;