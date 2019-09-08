import MockAdapter from 'axios-mock-adapter'
import { client as baseClient } from './client'
import MockApi from './MockApi'

const mock = new MockAdapter(baseClient, { delayResponse: 500 })
const mockApi = new MockApi()

const getParams = ({ params = {} }) => params

mock.onGet('/members').reply(request => {
  const params = getParams(request)
  return Promise.resolve(mockApi.search(params));
});

export const client = baseClient