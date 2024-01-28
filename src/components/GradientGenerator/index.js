import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  GradientColorsInputs,
  MainHeading,
  MainDescription,
  DirectionUlCard,
  InputsCards,
  InputGradients,
  GeneratorButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    actDirectionValue: gradientDirectionsList[0].value,
    bgColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  GradientDirection = value => {
    this.setState({actDirectionValue: value})
  }

  ChangeBgColor = () => {
    const {actDirectionValue, firstColor, secondColor} = this.state
    this.setState({
      bgColor: `to ${actDirectionValue}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {firstColor, secondColor, actDirectionValue, bgColor} = this.state
    return (
      <AppContainer bgColor={bgColor} data-testid="gradientGenerator">
        <GradientColorsInputs>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <MainDescription>Choose Direction</MainDescription>
          <DirectionUlCard>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                details={eachItem}
                GradientDirection={this.GradientDirection}
                isActive={eachItem.value === actDirectionValue}
              />
            ))}
          </DirectionUlCard>
          <MainDescription>Pick the Colors</MainDescription>
          <InputsCards>
            <div>
              <MainDescription>{firstColor}</MainDescription>
              <InputGradients
                type="color"
                onChange={this.onChangeFirstColor}
                value={firstColor}
              />
            </div>
            <div>
              <MainDescription>{secondColor}</MainDescription>
              <InputGradients
                type="color"
                onChange={this.onChangeSecondColor}
                value={secondColor}
              />
            </div>
          </InputsCards>
          <GeneratorButton type="button" onClick={this.ChangeBgColor}>
            Generate
          </GeneratorButton>
        </GradientColorsInputs>
      </AppContainer>
    )
  }
}

export default GradientGenerator
