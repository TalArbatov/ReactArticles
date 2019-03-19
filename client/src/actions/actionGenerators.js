import { ADD_ARTICLE, REMOVE_ARTICLE } from './actionTypes';

export const addArticle = ({id, dateCreated, author, title, content}) => {
    return {
        type: ADD_ARTICLE,
        article: {
            id,
            dateCreated,
            author,
            title,
            content
        }
    }
}

