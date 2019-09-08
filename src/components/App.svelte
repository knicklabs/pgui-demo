<script>
  import { onMount } from 'svelte'
  import api from '../api'
  import Members from './Members.svelte'
  import Pagination from './Pagination.svelte'

  let error = ''
  let loaded = false
  let members = []
  let pagination = {}

  onMount(async function() {
    getMembers('/members')
  });

  async function getMembers(url, params = {}) {
    try {
      const {
        data: { pagination: newPagination, results }
      } = await api.get(url, params)
      loaded = true
      members = results
      pagination = newPagination
    } catch(err) {
      console.error(err)
      error = 'This demo app needs an API but does not have one. Use Storybook to use the Mock API.'
    }
  }

  function handleChangePage(event) {
    const {
      detail: { page: pageNum }
    } = event
    const params = pageNum === 1 ? {} : { params: { page: pageNum } }
    getMembers('/members', params)
  }
</script>

<div>
  {#if error}
    <div>
      {error}
    </div>
  {:else if loaded}
    <div>
      <input type="search" placeholder="Search for a member..." />
      <Members {members} />
      <Pagination {...pagination} on:changePage={handleChangePage} />
    </div>
  {:else}Loading...{/if}
</div>
