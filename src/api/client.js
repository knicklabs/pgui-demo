import axios from 'axios'

// You will want to set default options for
// your client here.
export const client = axios.create({
  baseURL: 'https://example.com',
})
