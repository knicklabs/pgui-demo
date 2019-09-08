<script>
  import Member from './Member.svelte'

  export let members = []
</script>

<style>
  .members > ul {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .members > ul > li {
    align-self: stretch;
    margin-bottom: 1rem;
    width: calc(50% - 1rem);
  }

  .members > ul > li:nth-child(odd) {
    margin-right: 0.5rem;
  }

  .members > ul > li:nth-child(even) {
    margin-left: 0.5rem;
  }
</style>

<div class="members">
  <ul class="members__list">
    {#each members as member}
      <li class="members__list-item">
        <Member {...member} isFilled={true} />
      </li>
    {/each}
  </ul>
</div>
