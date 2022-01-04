 /* 
*Powered by author vlift
*/

import { all } from 'redux-saga/effects'
import CommonSaga from './common'
import SettingsSaga from './settings'
import TicketSaga from './tickets'
import AccountSaga from './accounts'
import GroupSaga from './groups'
import TeamSaga from './teams'
import DepartmentSaga from './departments'
import SearchSaga from './search'

export default function * IndexSagas () {
  yield all([
    CommonSaga(),
    TicketSaga(),
    SettingsSaga(),
    AccountSaga(),
    GroupSaga(),
    TeamSaga(),
    DepartmentSaga(),
    SearchSaga()
  ])
}
