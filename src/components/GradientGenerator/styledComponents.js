// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.bgColor});
`
export const GradientColorsInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: transparent;
`
export const MainHeading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ededed;
`
export const MainDescription = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff79;
  text-align: center;
`
export const DirectionUlCard = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const InputsCards = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const InputGradients = styled.input`
  width: 80px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #1e293b;
  background-color: #ffffff;
  margin: 0px;
  color: #ffffff;
`
export const GeneratorButton = styled.button`
  height: 30px;
  background-color: #00c9b7;
  width: 120px;
  border-radius: 5px;
  color: #1e293b;
  margin-top: 20px;
`
