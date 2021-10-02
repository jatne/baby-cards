<script>
  export let label = ''
</script>

{#if label}
  <button type="button">
    {label}
  </button>
{/if}

<style>
  button {
    background: transparent;
    border: 2px solid var(--btn-border);
    color: var(--btn-color);
    padding: .5rem 1rem;
    text-transform: uppercase;
    letter-spacing: .125rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
  }
</style>