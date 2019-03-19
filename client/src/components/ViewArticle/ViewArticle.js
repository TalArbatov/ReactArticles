import React from 'react';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard'
import RemoveArticle from './RemoveArticle';
import { removeArticle } from '../../actions/actionGenerators'
const ViewArticle = props => {
    const chosenArticle = props.articleReducer.articles.find(ar => {
        return ar.id == props.match.params.id
    });
    const removeHandler = () => {
        props.removeArticle(chosenArticle.id)
    }
    return (
        <div>
            <ArticleCard article={chosenArticle} />
            <RemoveArticle removeHandler={() => removeHandler()} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articleReducer: state.articleReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeArticle: (id) => dispatch(removeArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);