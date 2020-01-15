import Interval from '../components/Interval.svelte'
import App from '../App.svelte'

import Day from './views/Day.svelte'

export default {title: 'App Components'}

export const interval = () => ({
	Component: Interval,
})

export const day = () => ({
    Component: Day,
})
export const app = () => ({
	Component: App,
})
