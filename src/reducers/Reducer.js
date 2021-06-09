const INITIAL_STATE = {
  count: '0',
  isResult: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {
        ...state,
        count:
          state.count === '0' || state.isResult
            ? action.payload
            : state.count + action.payload,
        isResult: false,
      }
    case 'ADD_SYMBOL':
      const prevChar = state.count.charAt(state.count.length - 1)

      return {
        ...state,
        count: prevChar > -1 ? state.count + action.payload : state.count,
        isResult: false,
      }
    case 'EQUAL':
      return {
        count: eval(state.count).toString(),
        isResult: true,
      }

    case 'CLEAR':
      return {
        count: '0',
      }

    default:
      return state
  }
}
