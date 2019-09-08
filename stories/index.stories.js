import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Button from './button.svelte';
import Member from '../src/Member.svelte';

import '../public/global.css'

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
  .add('with name', () => ({
    Component: Member,
    props: { name: 'Nickolas Kenyeres' }
  }))