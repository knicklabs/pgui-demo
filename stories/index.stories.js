import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Avatar from '../src/Avatar.svelte';
import Button from './button.svelte';
import Member from '../src/Member.svelte';
import Members from '../src/Members.svelte';

import { makeMember, makeMembers } from '../src/fixtures/member'

import '../public/global.css'

storiesOf('Avatar', module)
  .add('with random member', () => ({
    Component: Avatar,
    props: { ...makeMember() }
  }))

storiesOf('Button', module)
  .add('with text', () => ({
    Component: Button,
    props: { text: 'Hello Button' },
    on: { click: action('clicked') },
  }))
  .add('with some emoji', () => ({
    Component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
    on: { click: action('clicked') },
  }));

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