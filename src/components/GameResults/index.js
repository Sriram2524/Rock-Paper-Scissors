import {
  GameResultsContainer,
  ThreeContainer,
  TwoContainer,
  FirstButton,
  FirstImg,
  ThirdButton,
  ResultContainer,
  ImageContainer,
  YouChoiceCon,
  You,
  YouImage,
  TextContainer,
  WonText,
  PlayAgain,
} from './styledComponents'

const GameResults = props => {
  const {choicesList, newArray, text, isShow, checkResult, playAgain} = props

  const onClickFirst = () => {
    checkResult(choicesList[0].id)
  }

  const onClickSecond = () => {
    checkResult(choicesList[1].id)
  }

  const onClickThird = () => {
    checkResult(choicesList[2].id)
  }

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <GameResultsContainer>
      {isShow && (
        <ThreeContainer>
          <TwoContainer>
            <FirstButton
              data-testid="rockButton"
              onClick={onClickFirst}
              type="button"
            >
              <FirstImg
                key={choicesList[0].id}
                alt={choicesList[0].id}
                src={choicesList[0].imageUrl}
              />
            </FirstButton>
            <FirstButton
              data-testid="scissorsButton"
              onClick={onClickSecond}
              type="button"
            >
              <FirstImg
                key={choicesList[1].id}
                alt={choicesList[1].id}
                src={choicesList[1].imageUrl}
              />
            </FirstButton>
          </TwoContainer>
          <ThirdButton
            data-testid="paperButton"
            onClick={onClickThird}
            type="button"
          >
            <FirstImg
              key={choicesList[2].id}
              alt={choicesList[2].id}
              src={choicesList[2].imageUrl}
            />
          </ThirdButton>
        </ThreeContainer>
      )}
      {!isShow && (
        <ResultContainer>
          <ImageContainer>
            <YouChoiceCon>
              <You>You</You>
              <YouImage src={newArray[0].imageUrl} alt="your choice" />
            </YouChoiceCon>
            <YouChoiceCon>
              <You>OPPONENT</You>
              <YouImage src={newArray[1].imageUrl} alt="opponent choice" />
            </YouChoiceCon>
          </ImageContainer>
          <TextContainer>
            <WonText>{text}</WonText>
            <PlayAgain onClick={onClickPlayAgain} type="button">
              PLAY AGAIN
            </PlayAgain>
          </TextContainer>
        </ResultContainer>
      )}
    </GameResultsContainer>
  )
}
export default GameResults
