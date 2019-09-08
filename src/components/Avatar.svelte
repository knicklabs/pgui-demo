<script>
  export let avatar = ''
  export let initials = ''
  export let name = ''
</script>

<style>
  .avatar {
    align-items: center;
    background-color: #f6f9fc;
    background-image: url({avatar});
    background-size: cover;
    border: 4px solid #e6e9ec;
    border-radius: 50%;
    display: flex;
    height: 3rem;
    justify-content: space-around;
    width: 3rem;
  }
</style>

<div
  class="avatar"
  alt={name}
  style="background-image: {avatar ? `url("${avatar}")` : ''}">
  {#if !avatar}
    <div>{initials}</div>
  {/if}
</div>
