import "./commentsForm.css";
import ButtonPrimary from "../shared/ButtonPrimary/ButtonPrimary";

function CommentsForm() {
    return (
        <div className="container">
            <form className="commentsForm" action="" method="post">
                <h2 className="commentsForm__title">Leave A Comment</h2>
                <p className="commentsForm__text">Your email address will not be published. Required fields are marked *</p>
                <div>
                    <div>
                        <input className="commentsForm__input" type="text" placeholder="Name *" />
                        <input className="commentsForm__input" type="email" placeholder="Email *" />
                    </div>
                     <textarea className="commentsForm__textarea" type="text" placeholder="Comment" />
                </div>
                <div className="commentsForm__checkbox">
                    <input className="commentsForm__checkbox--input" type="checkbox" /><span className="commentsForm__checkbox--text">Save my name, email in this brower for the next time I comment</span>
                </div>
                <div>
                    <ButtonPrimary>Posts Comment</ButtonPrimary>
                </div>
        </form>
        </div>
    );
}

export default CommentsForm;