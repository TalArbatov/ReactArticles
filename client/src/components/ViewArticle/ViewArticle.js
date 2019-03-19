import React, {useState} from 'react';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard'
import RemoveArticle from './RemoveArticle';
import { removeArticle, addComment, removeComment } from '../../actions/actionGenerators'
import AddComment from './AddComment';
import CommentList from './CommentList';


const ViewArticle = props => {
    const [getComment, setComment] = useState('');
    const chosenArticle = props.articleReducer.articles.find(ar => {
        return ar.id == props.match.params.id
    });
    const removeHandler = () => {
        props.removeArticle(chosenArticle.id)
    }
    const newCommentTextHandler = (e) => {
        setComment(e.target.value)
    }
    const submitComment = () => {
        const comment = {
            articleID: chosenArticle.id,
            content: getComment
        }
        props.addComment(comment);
    }
    const removeComment = (id) => {
        const comment = {
            id,
            articleID: chosenArticle.id
        }
        props.removeComment(comment)

    }
    return (
        <div>
            <ArticleCard article={chosenArticle} />
            <RemoveArticle removeHandler={() => removeHandler()} />
            <AddComment newCommentTextHandler={newCommentTextHandler} submitComment={submitComment} />
            <CommentList removeComment={removeComment} comments={chosenArticle.comments}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articleReducer: state.articleReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeArticle: (id) => dispatch(removeArticle(id)),
        addComment: (comment) => dispatch(addComment(comment)),
        removeComment: (comment) => dispatch(removeComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);