// Write your code here
import {ListGradientButtonsCard, ButtonInput} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, GradientDirection, isActive} = props
  const {value, displayText} = details
  const onClickDirectionButton = () => {
    GradientDirection(value)
  }
  return (
    <ListGradientButtonsCard>
      <ButtonInput
        type="button"
        onClick={onClickDirectionButton}
        isActive={isActive}
      >
        {displayText}
      </ButtonInput>
    </ListGradientButtonsCard>
  )
}

export default GradientDirectionItem
