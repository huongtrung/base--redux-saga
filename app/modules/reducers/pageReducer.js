export default function (state, action = {}) {
    switch (action.type) {
        case 'INCREASE_COUNTER_ASYNC': {
            return state.withMutations(state =>
                state.set("counter", state.get("counter") + action.value))
        }
        case 'DECREASE_COUNTER': {
            return state.withMutations(state =>
                state.set("counter", state.get("counter") - action.value))
        }
        default: {
            return state;
        }
    }
}