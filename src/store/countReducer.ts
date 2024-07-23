const defaultState = {
    count: 0
}

export const INCREMENT = "INCREMENT"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const DECREMENT = "DECREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"

export interface CountState {
    count: number;
}

export interface CountAction {
    type: string;
}

export default function countReducer(state = defaultState, action: CountAction): CountState {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export const incrementCreator = (): CountAction => ({ type: INCREMENT })
export const asyncIncrementCreator = (): CountAction => ({ type: ASYNC_INCREMENT })
export const decrementCreator = (): CountAction => ({ type: DECREMENT })
export const asyncDecrementCreator = (): CountAction => ({ type: ASYNC_DECREMENT })