import React from 'react'
import PropTypes from 'prop-types'
import Popup from 'js/features/components/Popup/Popup'

const OptionList = ({list}) =>
  list.map((option, i) =>
    <option key={i} value={option.code}>
      {option.name}
    </option>)

OptionList.propTypes = {
  list: PropTypes.array,
}

const Form = ({
                onSubmit,
                cityValue,
                onChange,
                optionList,
                error,
                isFetching
              }) =>
  <div>
    <form onSubmit={onSubmit}>
      <input
        name='city'
        value={cityValue}
        onChange={onChange}
        required
      />
      <select name='country' onChange={onChange}>
        <OptionList list={optionList}/>
      </select>
      <button>Отправить</button>
    </form>
    {error && <Popup>Ошибка {error.toString()}</Popup>}
    {isFetching && <Popup>Идет загрузка...</Popup>}
  </div>

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  cityValue: PropTypes.string,
  optionList: PropTypes.array,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  isFetching: PropTypes.bool,
}

export default Form
