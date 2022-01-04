 /* 
*Powered by author vlift
*/

import { combineReducers } from 'redux'

import shared from './shared'
import common from './shared/common'
import modal from './shared/modalReducer'
import sidebar from './sidebarReducer'
import settings from './settings'
import ticketsState from './ticketsReducer'
import tagsSettings from './tagsReducer'
import accountsState from './accountsReducer'
import groupsState from './groupsReducer'
import teamsState from './teamsReducer'
import departmentsState from './departmentsReducer'
import searchState from './searchReducer'

// const IndexReducer = (state = {}, action) => {
//   return {
//     shared: shared(state.shared, action),
//     common: common(state.common, action),
//     modal: modal(state.modal, action),
//     sidebar: sidebar(state.sidebar, action),
//     ticketsState: ticketsState(state.ticketsState, { ...action, sessionUser: shared.sessionUser }),
//     accountsState: accountsState(state.accountsState, action),
//     groupsState: groupsState(state.groupsState, action),
//     teamsState: teamsState(state.teamsState, action),
//     departmentsState: departmentsState(state.departmentsState, action),
//     tagsSettings: tagsSettings(state.tagsSettings, action),
//     settings: settings(state.settings, action)
//   }
// }

const IndexReducer = combineReducers({
  shared,
  common,
  searchState,
  modal,
  sidebar,
  ticketsState,
  accountsState,
  groupsState,
  teamsState,
  departmentsState,
  settings,
  tagsSettings
})

export default IndexReducer
