import { readable } from 'svelte/store'

const CARDS = [
  'cat',
  'cow',
  'crow',
  'dog',
  'duck',
  'elephant',
  'frog',
  'horse',
  'owl',
  'pig',
  'rooster',
  'sheep',
]

export const cards = readable(CARDS)