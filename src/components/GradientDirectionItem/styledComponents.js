// Style your elements here
import styled from 'styled-components'

export const ListGradientButtonsCard = styled.li`
  list-style-type: none;
`

export const ButtonInput = styled.button`
  height: 30px;
  background-color: #ffffff;
  width: 80px;
  border-radius: 5px;
  color: #334155;
  margin: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
