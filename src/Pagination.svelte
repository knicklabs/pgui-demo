<script>
  import { createEventDispatcher } from 'svelte'

	export let page = 1
	export let perPage = 0
	export let total = 0

  const dispatch = createEventDispatcher()

  function changePage(page) {
    dispatch('changePage', { page })
  }

  $: firstPage = 1
	$: prevPage = page - 1
	$: nextPage = page + 1
	$: lastPage = Math.ceil(total/perPage)

	$: showFirstPage = page > 1
	$: showPrevPage = prevPage > 1
	$: showNextPage = nextPage < lastPage
  $: showLastPage = page < lastPage
</script>

<style>
	.pagination {
		display: flex;
		justify-content: space-between;
	}

	.pagination__group {
		display: flex;
		min-width: 5rem;
	}

	.pagination__item {
		align-items: center;
		background-color: #F6F9FC;
		color: #1EA7FD;
		display: flex;
		height: 2rem;
		justify-content: space-around;
		width: 2rem;
	}

	.pagination__item.is-first,
	.pagination__item.is-prev {
		margin-right: 0.5rem;
	}

	.pagination__item.is-next,
	.pagination__item.is-last {
		margin-left: 0.5rem;
	}

	.pagination__item span {
		margin-top: -0.25rem;
	}
</style>

<div class="pagination">
  <div class="pagination__group">
    {#if showFirstPage}
      <button class="pagination__item is-first"
          on:click={() => changePage(firstPage)}>
        <span>{"<<"}</span>
      </button>
    {/if}
    {#if showPrevPage}
      <button class="pagination__item is-prev"
          on:click={() => changePage(prevPage)}>
        <span>{"<"}</span>
      </button>
    {/if}
  </div>
  <div class="pagination__group">
    Page {page} of {lastPage}
  </div>
  <div class="pagination__group">
    {#if showNextPage}
      <button class="pagination__item is-next"
          on:click={() => changePage(nextPage)}>
        {">"}
      </button>
    {/if}
    {#if showLastPage}
      <button class="pagination__item is-last"
          on:click={() => changePage(lastPage)}>
        {">>"}
      </button>
    {/if}
  </div>
</div>