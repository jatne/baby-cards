import { readable } from 'svelte/store'

const CARDS = [
  'cat',
  'dog',
  'horse',
]

export const cards = readable(CARDS)