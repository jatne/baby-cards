<script>
  import { getContext } from 'svelte'
  import { playSound } from '../utils/misc'
  export let slide = ''

  const audio = getContext('audio')
</script>

{#if slide}
  <div on:click={playSound({fileName: slide, audio})} class="card">
    <img src={`./images/${slide}.svg`} alt={slide}/>
  </div>
{/if}

<style>
  .card {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    max-height: 80vh;
    cursor: pointer;
  }

  .card img {
    max-width: 100%;
    height: auto;
    /* filter: invert(1); */
  }
</style>