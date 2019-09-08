import { storiesOf } from '@storybook/svelte'

import App from '../src/components/App.svelte'
import Avatar from '../src/components/Avatar.svelte'
import Member from '../src/components/Member.svelte'
import Members from '../src/components/Members.svelte'

import { makeMember, makeMembers } from '../src/fixtures/member'

import '../public/global.css'

storiesOf('App', module)
  .add('prototype', () => ({
    Component: App,
  }))

storiesOf('Avatar', module)
  .add('with random member', () => ({
    Component: Avatar,
    props: { ...makeMember() }
  }))

storiesOf('Member', module)
  .add('with random member', () => ({
    Component: Member,
    props: { ...makeMember() }
  }))

storiesOf('Members', module)
  .add('with random members', () => ({
    Component: Members,
    props: { members: makeMembers(1000) }
  }))
