import { GET_PAGE_LIST } from '../../constants';
import getPageListAPI from '../../modules/api/getPageListAPI';

export const getPageList = () => async (dispatch) => {
    try {
        const response = await getPageListAPI.get()
        dispatch(setPageList(response))
    } catch (error) {
        console.error(error);
    }
}

export function setPageList(pageList) {
    return {
        type: GET_PAGE_LIST,
        pageList
    }
}