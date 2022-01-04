 /* 
*Powered by author vlift
*/

import React from 'react'
import PropTypes from 'prop-types'
import { merge } from 'lodash'

class EnableSwitch extends React.Component {
  render () {
    const combinedStyle = merge({ margin: '17px 0 0 0' }, this.props.style)
    return (
      <div className='uk-float-right md-switch md-green' style={combinedStyle}>
        <label>
          {this.props.label}
          <input
            type='checkbox'
            id={this.props.stateName}
            name={this.props.stateName}
            onChange={this.props.onChange}
            checked={this.props.checked}
            disabled={this.props.disabled}
          />
          <span className='lever' />
        </label>
      </div>
    )
  }
}

EnableSwitch.propTypes = {
  stateName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default EnableSwitch
