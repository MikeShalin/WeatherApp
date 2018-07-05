import React from 'react'
import styled from 'styled-components'

const ContainerCityList = styled.div`
  width: 32vw;
`

const City = styled.div`
  padding-left: 20px;
  height: 26;
  position: relative;
  transition: .3s;
  font-size: 19px;
  margin-bottom: 9px;
  &:hover{
    background: grey;
    transition: .3s;
  }
`

const Wrapper = styled.div`
  min-height: 40px;
  background: antiquewhite;
  border-radius: 15px;
  padding: 20px 0
`

const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  width: 45px;
  height: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  cursor: pointer
  transition: .3s;
  &:hover{
    background: grey;
    transition: .3s;
  }
`

const Add = styled.div`
  position: absolute;
  top: 0;
  right: 45px;
  color: #fff;
  background: coral;
  width: 150px;
  height: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  cursor: pointer
  transition: .3s;
  &:hover{
    background: grey;
    transition: .3s;
  }
`

const CityList = ({
                    list,
                    onClick,
                    onDelete
                  }) =>
  <ContainerCityList>
    Список городов (если он пустой введите в поля название города и нажмите отправить)
    <Wrapper>
      {list.map((city, i) =>
        <City key={i}>
          {city.title}
          <Add onClick={() => onClick(city.id)}>Добавить</Add>
          <Delete onClick={() => onDelete(city.id)}>x</Delete></City>)}
    </Wrapper>
  </ContainerCityList>


export default CityList