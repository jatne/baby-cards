<script>
  import { setContext } from 'svelte'
  import { cards } from './store/cards.js'

  import Slider from './components/Slider.svelte'
  import Button from './components/Button.svelte'

  setContext('audio', new Audio())
</script>
<div class="container">
  <div class="app-content">
    <Slider slides={$cards}/>
  </div>
  <div class="app-footer">
    <Button label="Invert colors" />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
  }

  .app-content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;;
  }

  .app-footer {
    padding: 2rem 0;
  }
</style>