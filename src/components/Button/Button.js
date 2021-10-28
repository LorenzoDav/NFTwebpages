import './Button.css';

function displayButtonIcon(buttonIcon) {
    if (buttonIcon)
        return <img src={buttonIcon} className="button-icon"/>
}

function Button(props){
    const buttonClass = "NFTbutton " + props.classButton;
    return (
        <button href={props.buttonLink} className={buttonClass}>
            <span className="button-text"> {props.buttonText} </span>
            {displayButtonIcon(props.buttonIcon)}
        </button>
    )
}
export default Button;