<div class="members">
  <ul class="members__list">
    {#each members as member}
      <li class="members__list-item">
        <Member {...member} fill={true} />
      </li>
    {/each}
  </ul>
</div>

<style>
  .members__list {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .members__list-item {
    align-self: stretch;
    margin-bottom: 1rem;
    width: calc(50% - 1rem);
  }

  .members__list-item:nth-child(1n) {
    margin-right: .5rem;
  }

  .members__list-item:nth-child(2n) {
    margin-left: .5rem;
  }
</style>

<script>
  import Member from './Member.svelte'

  export let members = []
</script>