
export const addElement = (number) => dispatch => {
    dispatch({
        type: 'ADD_ELEMENT',
        payload: number
    })
}

export const addSymbol = (number) => dispatch => {
    dispatch({
        type: 'ADD_SYMBOL',
        payload: number
    })
}

export const equal = () => dispatch => {
    dispatch({
        type: 'EQUAL',
    })
}

export const clear = () => dispatch => {
    dispatch({
        type: 'CLEAR',
    })
}
