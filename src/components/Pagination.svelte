<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let page = 1
  export let perPage = 0
  export let total = 0

  $: firstPage = 1
  $: prevPage = page - 1
  $: nextPage = page + 1
  $: lastPage = Math.ceil(total / perPage)

  $: showFirstPage = page > 1
  $: showPrevPage = prevPage > 1
  $: showNextPage = nextPage < lastPage
  $: showLastPage = page < lastPage

  function changePage(page) {
    dispatch('changePage', { page })
  }

  function symbol(direction = '') {
    switch (direction) {
      case 'first':
        return '<<'
      case 'prev':
        return '<'
      case 'next':
        return '>'
      case 'last':
        return '>>'
      default:
        return ''
    }
  }
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
    background-color: #f6f9fc;
    color: #1ea7fd;
    cursor: pointer;
    display: flex;
    height: 2rem;
    justify-content: space-around;
    width: 2rem;
  }

  .pagination__item--first,
  .pagination__item--prev {
    margin-right: 0.5rem;
  }

  .pagination__item--next,
  .pagination__item--last {
    margin-left: 0.5rem;
  }

  .pagination__item span {
    margin-top: -0.25rem;
  }
</style>

<div class="pagination">
  <div class="pagination__group">
    {#if showFirstPage}
      <button
        class="pagination__item pagination__item--first"
        on:click={() => changePage(firstPage)}>
        <span>{symbol('first')}</span>
      </button>
    {/if}
    {#if showPrevPage}
      <button
        class="pagination__item pagination__item--prev"
        on:click={() => changePage(prevPage)}>
        <span>{symbol('prev')}</span>
      </button>
    {/if}
  </div>
  <div class="pagination__group">Page {page} of {lastPage}</div>
  <div class="pagination__group">
    {#if showNextPage}
      <button
        class="pagination__item pagination__item--next"
        on:click={() => changePage(nextPage)}>
        {symbol('next')}
      </button>
    {/if}
    {#if showLastPage}
      <button
        class="pagination__item pagination__item--last"
        on:click={() => changePage(lastPage)}>
        {symbol('last')}
      </button>
    {/if}
  </div>
</div>
