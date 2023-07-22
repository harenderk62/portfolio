import "./component-css.scss"

const Button =(props)=>{
    return(<div className="btn">
    <button className={props.className} type={props.type} onClick={props.onClick}>
        <img src={props.img} alt="logo" /> {props.btnName}
    </button>
    </div>)
}

export default Button;