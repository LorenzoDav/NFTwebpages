import './Button.css';

function Button(props){
    return (
        <button href={props.buttonLink} className="NFTbutton">
            <span className="button-text"> {props.buttonText} </span> 
            <img src={props.buttonIcon} className="button-icon"/>
        </button>
    )
}
export default Button;