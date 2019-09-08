import { makeMembers } from '../fixtures/member'

const defaultPagination = {
  page: 1,
  perPage: 10,
  total: 115,
};

const paginate = (results, { page, perPage, total }) => {
  const numPages = Math.ceil(total / perPage)
  if (results.length <= perPage) {
    return results
  }
  const start = (page - 1) * perPage
  const limit = start + perPage
  const stop = limit > results.length ? results.length : limit
  return results.slice(start, stop)
}

class MockApi {
  search({
    page = 1
  } = {}) {
    const pagination = {
      ...defaultPagination,
      page,
    };

    return [200, {
      pagination,
      results: paginate(makeMembers(pagination.total), pagination)
    }];
  }
}

export default MockApi
