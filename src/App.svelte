<script>
	import { onMount } from 'svelte'
	import api from './api'
	import Members from './Members'
	import Pagination from './Pagination'

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

	function handleChangePage(event) {
		const { detail: { page: pageNum } } = event
		const params = pageNum === 1 ? {} : { params: { page: pageNum } }
		getMembers('/members', params)
	}
</script>

<div>
	{#if loaded}
		<div>
			<input type="search" placeholder="Search for a member..." />
			<Members members={members} />
			<Pagination page={page} perPage={perPage} total={total} on:changePage={handleChangePage} />
		</div>
	{:else}
		Loading...
	{/if}
</div>
