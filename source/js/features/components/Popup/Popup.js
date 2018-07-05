import React from 'react'
import PropTypes from 'prop-types'

const Popup = ({children}) => <h2>{children}</h2>

Popup.propTypes = {
  message: PropTypes.string,
}

export default Popup
