<script>
  import Card from './Card.svelte'
  import { Swiper, SwiperSlide } from 'swiper/svelte'
  import SwiperCore, { EffectCards } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/effect-cards'

  SwiperCore.use([EffectCards]);

  export let slides = []
</script>

{#if slides.length}
  <Swiper
    loop={true}
    effect={'cards'}
  >
    {#each slides as slide (slide)}
      <SwiperSlide>
        <Card {slide} />
      </SwiperSlide>
    {/each}
  </Swiper>
{/if}
