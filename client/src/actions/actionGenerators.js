import { ADD_ARTICLE, REMOVE_ARTICLE } from './actionTypes';

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
