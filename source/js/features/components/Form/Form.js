import React from 'react'
import PropTypes from 'prop-types'
import Popup from 'js/features/components/Popup/Popup'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32vw;
`

const Wrapper = styled.div`
`

const Select = styled.select`
  height: 41px;
`

const Input = styled.input`
  border-radius: 5px;
  height: 36px;
  font-size: 12px;
  padding-left: 10px;
  width: 216px;
`

const Btn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
`

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
  <FormContainer>
    <form onSubmit={onSubmit}>
      <Wrapper>
        <Input
          name='city'
          value={cityValue}
          onChange={onChange}
          required
          placeholder='Введите название города...'
        />
        <Select name='country' onChange={onChange}>
          <OptionList list={optionList}/>
        </Select>
      </Wrapper>
      <Btn>Отправить</Btn>
    </form>
    {error && <Popup>Ошибка {error.toString()}</Popup>}
    {isFetching && <Popup>Идет загрузка...</Popup>}
  </FormContainer>

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
