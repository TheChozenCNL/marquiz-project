export interface IStartGame {
  gameIsStarted: boolean
  countOfRounds: number
  questions: { question: string; answer: string }[]
}
