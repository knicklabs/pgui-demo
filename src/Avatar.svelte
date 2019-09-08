<div class="avatar" alt={name} style="background-image: {avatar ? `url("${avatar}")` : ''}">
  {#if !avatar}
    <div>{initials}</div>
  {/if}
</div>

<style>
  .avatar {
    align-items: center;
    background-color: #F6F9FC;
    background-image: url({avatar});
    background-size: cover;
    border: 4px solid #E6E9EC;
    border-radius: 50%;
    display: flex;
    height: 3rem;
    justify-content: space-around;
    width: 3rem;
  }
</style>

<script>
  export let avatar = ''
  export let initials = ''
  export let name = ''
</script>