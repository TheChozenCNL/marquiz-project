export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const remainingSeconds = time % 60
  return `${minutes < 10 ? '0' + minutes : minutes}:${
    remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds
  }`
}
