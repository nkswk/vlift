 /* 
*Powered by author vlift
*/

import { handleActions } from 'redux-actions'
import { fromJS, List, Map } from 'immutable'

import { SET_SESSION_USER, FETCH_ROLES, UPDATE_ROLE_ORDER, SHOW_NOTICE, CLEAR_NOTICE } from 'actions/types'

const initialState = {
  sessionUser: null,
  roles: List([]),
  roleOrder: Map({}),
  notice: null
}

const sharedReducer = handleActions(
  {
    [SET_SESSION_USER]: (state, action) => {
      return {
        ...state,
        sessionUser: action.payload.sessionUser
      }
    },

    [SHOW_NOTICE]: (state, action) => {
      return {
        ...state,
        notice: fromJS(action.payload)
      }
    },

    [CLEAR_NOTICE]: state => {
      return {
        ...state,
        notice: null
      }
    },

    [FETCH_ROLES.SUCCESS]: (state, action) => {
      return {
        ...state,
        roles: fromJS(action.response.roles),
        roleOrder: fromJS(action.response.roleOrder)
      }
    },

    [UPDATE_ROLE_ORDER.SUCCESS]: (state, action) => {
      return {
        ...state,
        roleOrder: fromJS(action.response.roleOrder)
      }
    }
  },
  initialState
)

export default sharedReducer
