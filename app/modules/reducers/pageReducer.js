import { GET_PAGE_LIST } from '../../constants';

export default function(state, action = {}) {
    switch (action.type) {
        case GET_PAGE_LIST:
            return state.withMutations(state =>
                state.set("pageList", action.pageList))
        default:
            return state;
    }
}