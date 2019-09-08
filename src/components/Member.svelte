<script>
  import Avatar from './Avatar.svelte'

  export let avatar = ''
  export let isFilled = false
  export let initials = ''
  export let job = ''
  export let name = ''
</script>

<style>
  .member {
    align-items: center;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
    border-radius: 5px;
    display: flex;
    padding: 1rem 1.5rem;
  }

  .member--filled {
    height: calc(100% - 2rem) !important;
  }

  .member > div + div {
    margin-left: 1rem;
  }

  .member__name {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }

  .member__job {
    font-weight: 300;
    margin: 0;
  }
</style>

<div class="member {isFilled ? 'member--filled' : ''}">
  <div>
    <Avatar {avatar} {initials} />
  </div>
  <div>
    <p class="member__name">{name}</p>
    {#if job}
      <p class="member__job">{job}</p>
    {/if}
  </div>
</div>
