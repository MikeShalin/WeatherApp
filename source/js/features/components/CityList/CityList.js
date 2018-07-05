import React from 'react'
import styled from 'styled-components'

const ContainerCityList = styled.div`
  width: 300px;
  min-height: 100px;
  background: #fff;
`

const City = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
`

const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  width: 15px;
  height: 15px;
  display: flex;
  align-item: center;
  justify-content: center;
`

const CityList = ({
                    list,
                    onClick,
                    onDelete
                  }) =>
  <ContainerCityList>
    Список городов (если он пустой введите в поля название города и нажмите отправить)
    {list.map((city, i) =>
      <City key={i}>
        {city.title}
        <button onClick={() => onClick(city.id)}>Добавить</button>
        <Delete onClick={() => onDelete(city.id)}>x</Delete></City>)}
  </ContainerCityList>


export default CityList