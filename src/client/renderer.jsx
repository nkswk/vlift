 /* 
*Powered by author vlift
*/

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import TicketsContainer from 'containers/Tickets/TicketsContainer'
import SingleTicketContainer from 'containers/Tickets/SingleTicketContainer'
import SettingsContainer from 'containers/Settings/SettingsContainer'
import AccountsContainer from 'containers/Accounts'
import GroupsContainer from 'containers/Groups'
import TeamsContainer from 'containers/Teams'
import DepartmentsContainer from 'containers/Departments'

export default function (store) {
  if (document.getElementById('tickets-container')) {
    const view = document.getElementById('tickets-container').getAttribute('data-view')
    const page = document.getElementById('tickets-container').getAttribute('data-page')
    let filter = document.getElementById('tickets-container').getAttribute('data-filter')
    filter = filter ? JSON.parse(filter) : {}

    const TicketsContainerWithProvider = (
      <Provider store={store}>
        <TicketsContainer view={view} page={page} filter={filter} />
      </Provider>
    )

    ReactDOM.render(TicketsContainerWithProvider, document.getElementById('tickets-container'))
  }

  if (document.getElementById('single-ticket-container')) {
    const ticketId = document.getElementById('single-ticket-container').getAttribute('data-ticket-id')
    const ticketUid = document.getElementById('single-ticket-container').getAttribute('data-ticket-uid')
    const SingleTicketContainerWithProvider = (
      <Provider store={store}>
        <SingleTicketContainer ticketId={ticketId} ticketUid={ticketUid} />
      </Provider>
    )

    ReactDOM.render(SingleTicketContainerWithProvider, document.getElementById('single-ticket-container'))
  }

  if (document.getElementById('accounts-container')) {
    const title = document.getElementById('accounts-container').getAttribute('data-title')
    const view = document.getElementById('accounts-container').getAttribute('data-view')
    const AccountsContainerWithProvider = (
      <Provider store={store}>
        <AccountsContainer title={title} view={view} />
      </Provider>
    )

    ReactDOM.render(AccountsContainerWithProvider, document.getElementById('accounts-container'))
  }

  if (document.getElementById('groups-container')) {
    const GroupsContainerWithProvider = (
      <Provider store={store}>
        <GroupsContainer />
      </Provider>
    )

    ReactDOM.render(GroupsContainerWithProvider, document.getElementById('groups-container'))
  }

  if (document.getElementById('teams-container')) {
    const TeamsContainerWithProvider = (
      <Provider store={store}>
        <TeamsContainer />
      </Provider>
    )

    ReactDOM.render(TeamsContainerWithProvider, document.getElementById('teams-container'))
  }

  if (document.getElementById('departments-container')) {
    const TeamsContainerWithProvider = (
      <Provider store={store}>
        <DepartmentsContainer />
      </Provider>
    )

    ReactDOM.render(TeamsContainerWithProvider, document.getElementById('departments-container'))
  }

  if (document.getElementById('settings-container')) {
    const SettingsContainerWithProvider = (
      <Provider store={store}>
        <SettingsContainer />
      </Provider>
    )

    ReactDOM.render(SettingsContainerWithProvider, document.getElementById('settings-container'))
  }
}
