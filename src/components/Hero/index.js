import "./style.css";
import Profile_Photo from "./Profile_Photo.jpg"


function Hero() {
    return (
        <img className="hero" src={Profile_Photo} alt="Logo" />
    );
}

export default Hero;