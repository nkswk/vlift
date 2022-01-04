 /* 
*Powered by author vlift
*/

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment-timezone'
import { updateSetting } from 'actions/settings'

import SettingItem from 'components/Settings/SettingItem'

import InputWithSave from 'components/Settings/InputWithSave'
import SingleSelect from 'components/SingleSelect'
import EnableSwitch from 'components/Settings/EnableSwitch'
import SettingSubItem from 'components/Settings/SettingSubItem'
import Zone from 'components/ZoneBox/zone'
import ZoneBox from 'components/ZoneBox'

class GeneralSettings extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {}
  componentWillUnmount () {}

  getSettingsValue (name) {
    return this.props.settings.getIn(['settings', name, 'value'])
      ? this.props.settings.getIn(['settings', name, 'value'])
      : ''
  }

  updateSetting (stateName, name, value) {
    this.props.updateSetting({ stateName, name, value })
  }

  getTimezones () {
    return moment.tz
      .names()
      .map(function (name) {
        const year = new Date().getUTCFullYear()
        const timezoneAtBeginningOfyear = moment.tz(year + '-01-01', name)
        return {
          utc: timezoneAtBeginningOfyear.utcOffset(),
          text: '(GMT' + timezoneAtBeginningOfyear.format('Z') + ') ' + name,
          value: name
        }
      })
      .sort(function (a, b) {
        return a.utc - b.utc
      })
  }

  onTimezoneChange (e) {
    if (e.target.value) this.updateSetting('timezone', 'gen:timezone', e.target.value)
  }

  render () {
    const { active } = this.props

    const SiteTitle = (
      <InputWithSave stateName='siteTitle' settingName='gen:sitetitle' value={this.getSettingsValue('siteTitle')} />
    )

    const SiteUrl = (
      <InputWithSave stateName='siteUrl' settingName='gen:siteurl' value={this.getSettingsValue('siteUrl')} />
    )

    const Timezone = (
      <SingleSelect
        stateName='timezone'
        settingName='gen:timezone'
        items={this.getTimezones()}
        defaultValue={this.getSettingsValue('timezone')}
        onSelectChange={e => {
          this.onTimezoneChange(e)
        }}
        showTextbox={true}
      />
    )

    const AllowUserRegistration = (
      <EnableSwitch
        stateName='allowUserRegistration'
        label='Enable'
        checked={this.getSettingsValue('allowUserRegistration')}
        onChange={e => {
          this.updateSetting('allowUserRegistration', 'allowUserRegistration:enable', e.target.checked)
        }}
      />
    )

    return (
      <div className={active ? 'active' : 'hide'}>
        <SettingItem
          title='Site Title'
          subtitle={
            <div>
              Title of site. Used as page title. <i>default: vlift</i>
            </div>
          }
          component={SiteTitle}
        />
        <SettingItem
          title='Site Url'
          subtitle={
            <div>
              Publicly accessible URL of this site. <i>ex: {this.props.viewdata.hosturl}</i>
            </div>
          }
          component={SiteUrl}
        />
        <SettingItem
          title='Time Zone'
          subtitle='Set the local timezone for date display'
          tooltip='Requires Server Restart'
          component={Timezone}
        />
        <SettingItem
          title='Time & Date Format'
          subtitle={
            <a href='https://momentjs.com/docs/#/displaying/format/' rel='noopener noreferrer' target='_blank'>
              Moment.js Format Options
            </a>
          }
        >
          <Zone>
            <ZoneBox>
              <SettingSubItem
                title='Time Format'
                subtitle='Set the format for time display'
                component={
                  <InputWithSave
                    stateName='timeFormat'
                    settingName='gen:timeFormat'
                    value={this.getSettingsValue('timeFormat')}
                    width={'60%'}
                  />
                }
              />
            </ZoneBox>
            <ZoneBox>
              <SettingSubItem
                title='Short Date Format'
                subtitle='Set the format for short dates'
                component={
                  <InputWithSave
                    stateName='shortDateFormat'
                    settingName='gen:shortDateFormat'
                    value={this.getSettingsValue('shortDateFormat')}
                    width={'60%'}
                  />
                }
              />
            </ZoneBox>
            <ZoneBox>
              <SettingSubItem
                title='Long Date Format'
                subtitle='Set the format for long dates'
                component={
                  <InputWithSave
                    stateName='longDateFormat'
                    settingName='gen:longDateFormat'
                    value={this.getSettingsValue('longDateFormat')}
                    width={'60%'}
                  />
                }
              />
            </ZoneBox>
          </Zone>
        </SettingItem>
        <SettingItem
          title='Allow User Registration'
          subtitle='Allow users to create accounts on the login screen.'
          component={AllowUserRegistration}
        />
      </div>
    )
  }
}

GeneralSettings.propTypes = {
  active: PropTypes.bool,
  updateSetting: PropTypes.func.isRequired,
  viewdata: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  viewdata: state.common,
  settings: state.settings.settings
})

export default connect(
  mapStateToProps,
  { updateSetting }
)(GeneralSettings)
