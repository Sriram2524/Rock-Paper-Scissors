import {
  ScoreCart,
  Heading,
  ScoreContainer,
  ScoreParagraph,
  Span,
} from './styledComponents'

const Score = props => {
  const {score} = props
  return (
    <ScoreCart>
      <Heading>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
        <br />
      </Heading>
      <ScoreContainer>
        <ScoreParagraph>
          score
          <br />
          <Span>{score}</Span>
        </ScoreParagraph>
      </ScoreContainer>
    </ScoreCart>
  )
}
export default Score
