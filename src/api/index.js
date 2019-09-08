const client = process.env.STORYBOOK_API === 'mock'
  ? require('./client.mock').client
  : require('./client').client

module.exports = client
