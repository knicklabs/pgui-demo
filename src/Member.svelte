<div class="member {fill ? 'member--filled' : ''}">
  <div class="member__avatar">
    <Avatar avatar={avatar} initials={initials} />
  </div>
  <div class="member__info">
    <p class="member__info__name">{name}</p>
    {#if job}
      <p class="member__info__job">{job}</p>
    {/if}
  </div>
</div>

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

  .member__info {
    margin-left: 1rem;
  }

  .member__info__name {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }

  .member__info__job {
    font-weight: 300;
    margin: 0;
  }
</style>

<script>
  import Avatar from './Avatar.svelte'

  export let avatar = ''
  export let className = ''
  export let fill = false
  export let initials = ''
  export let job = ''
  export let name = ''
</script>