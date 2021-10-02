<script>
  import Card from './Card.svelte'
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';

  export let slides = []
</script>

{#if slides.length}
  <Swiper
    loop={true}
  >
    {#each slides as slide (slide)}
      <SwiperSlide>
        <Card {slide} />
      </SwiperSlide>
    {/each}
  </Swiper>
{/if}
