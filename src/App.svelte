<script>
	import { onMount } from 'svelte'
	import api from './api'
	import Members from './Members'

	let loaded = false
	let members = []
	let page = 1
	let perPage = 0
	let total = 0

	onMount(async function() {
		getMembers('/members')
	})

	async function getMembers(url, params = {}) {
		const { data: { pagination, results } } = await api.get(url, params)
		loaded = true
		members = results
		page = pagination.page
		perPage = pagination.perPage
		total = pagination.total
	}

	function changePage(pageNum = 1) {
		const params = pageNum === 1 ? {} : { params: { page: pageNum } }
		getMembers('/members', params)
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

<div>
	{#if loaded}
		<div>
			<input type="search" placeholder="Search for a member..." />
			<Members members={members} />
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
		</div>
	{:else}
		Loading...
	{/if}
</div>
