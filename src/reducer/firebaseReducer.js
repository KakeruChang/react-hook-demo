import * as actions from '../action/firebaseAction'
import initData from '../data/data'

const initialState = {
  data: { user: initData.user }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_USER:
      return state
    case actions.FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default reducer
