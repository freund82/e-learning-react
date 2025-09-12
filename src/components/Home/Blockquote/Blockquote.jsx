import "./blockquote.css"
import BlockquoteImage from "../../../assets/icons/blockquote.svg"

const Blockquote = ({quote}) => {
    return (
            <blockquote className="blockquote">
                <div className="blockquote__inner">
                    <img className="blockquote__image" src={BlockquoteImage} alt="blockquote" />
                    <p className="blockquote__text">{quote.text}</p>
                    <h4 className="blockquote__author">{quote.author}</h4>
                    <p className="blockquote__profession">{quote.profession}</p>
                </div>
            </blockquote>
    )
}

export default Blockquote