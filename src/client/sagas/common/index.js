 /* 
*Powered by author vlift
*/

import { call, put, takeLatest } from 'redux-saga/effects'

import api from '../../api'
import { FETCH_ROLES } from 'actions/types'

import Log from '../../logger'
import helpers from 'lib/helpers'

function * fetchRoles ({ payload }) {
  try {
    const response = yield call(api.common.fetchRoles, payload)
    yield put({ type: FETCH_ROLES.SUCCESS, response })
  } catch (error) {
    const errorText = error.response.data.error
    Log.error(errorText, error.response)
    helpers.UI.showSnackbar(`Error: ${errorText}`, true)
    yield put({ type: FETCH_ROLES.ERROR, error })
  }
}

export default function * watcher () {
  yield takeLatest(FETCH_ROLES.ACTION, fetchRoles)
}
