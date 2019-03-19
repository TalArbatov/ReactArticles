import { ADD_ARTICLE, REMOVE_ARTICLE , ADD_COMMENT, REMOVE_COMMENT} from './actionTypes';

export const createArticle = ({title, content}) => {
    return {
        type: ADD_ARTICLE,
        article: {
            title,
            content
        }
    }
}

export const removeArticle = (id) => {
    return {
        type: REMOVE_ARTICLE,
        id: id
    }
}

export const addComment = ({id, articleID, author, dateCreated, content}) => {
    return {
        type: ADD_COMMENT,
        comment: {
            id,
            articleID,
            author,
            dateCreated,
            content
        }
    }
}

export const removeComment = ({id, articleID}) => {
    return {
        type: REMOVE_COMMENT,
        comment: {
            id,
            articleID
        }
    }
}