import App from './views/App.svelte'
import Interval from './views/Interval.svelte'
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
