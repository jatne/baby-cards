export function playSound({audio, fileName}) {
  if (!audio || !fileName) return

  audio.src = `./audio/${fileName}.mp3`
  audio.currentTime = 0

  audio.play()
}