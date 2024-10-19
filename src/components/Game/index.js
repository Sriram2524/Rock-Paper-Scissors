import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Score from '../Score'
import GameResults from '../GameResults'

import 'reactjs-popup/dist/index.css'

import {
  Bgcontainer,
  PopButton,
  RulesButton,
  PopupView,
  CloseButton,
  PopupImg,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    text: 'YOU WON',
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
  }

  playAgain = () => {
    this.setState({isShow: true})
  }

  getText = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'SCISSORS') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const secondItem =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const firstItem = choicesList.filter(each => each.id === id)
    const getWon = this.getText(firstItem[0], secondItem)
    if (getWon === 'YOU WON') {
      this.setState(preState => ({score: preState.score + 1}))
    } else if (getWon === 'YOU LOSE') {
      this.setState(preState => ({score: preState.score - 1}))
    } else {
      this.setState(preState => ({score: preState.score}))
    }
    this.setState({
      newArray: [firstItem[0], secondItem],
      text: getWon,
      isShow: false,
    })
  }

  render() {
    const {score, text, isShow, newArray} = this.state
    return (
      <Bgcontainer>
        <Score score={score} />
        <GameResults
          choicesList={choicesList}
          newArray={newArray}
          text={text}
          isShow={isShow}
          checkResult={this.checkResult}
          playAgain={this.playAgain}
        />
        <RulesButton>
          <Popup modal trigger={<PopButton type="button">Rules</PopButton>}>
            {close => (
              <PopupView>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <PopupImg
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </PopupView>
            )}
          </Popup>
        </RulesButton>
      </Bgcontainer>
    )
  }
}
export default Game
