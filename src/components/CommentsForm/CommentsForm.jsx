import "./commentsForm.css";
import ButtonPrimary from "../shared/ButtonPrimary/ButtonPrimary";

function CommentsForm() {
    return (
        <div className="container">
            <div className="commentsForm">
                <h2>Leave A Comment</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div>
                    <div>
                        <input className="commentsForm__input" type="text" placeholder="Name *" />
                        <input className="commentsForm__input" type="email" placeholder="Email *" />
                    </div>
                     <textarea className="commentsForm__textarea" type="text" placeholder="Comment" />
                </div>
                <div>
                    <input type="checkbox" /><span>Save my name, email in this brower for the next time I comment</span>
                </div>
                <div>
                    <ButtonPrimary>Posts Comment</ButtonPrimary>
                </div>
        </div>
        </div>
    );
}

export default CommentsForm;