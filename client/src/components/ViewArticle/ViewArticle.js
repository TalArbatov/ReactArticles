import React from 'react';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard'
import RemoveArticle from './RemoveArticle';
const ViewArticle = props => {
    const chosenArticle = props.articleReducer.articles.find(ar => {
        return ar.id == props.match.params.id
    });
    const removeHandler = () => {
        
    }
    return (
        <div>
            <ArticleCard article={chosenArticle} />
            <RemoveArticle removeHandler={() => removeHandler()}/>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);