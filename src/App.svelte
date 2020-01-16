<script>
    import Day from './components/Day.svelte';
    import { minsToString } from './utils';

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];
    const dayTarget = 7.5 * 60;
    const weekTarget = dayTarget * days.length;

    let minutes = []
    const updateMinutes = index => mins => {
        minutes = [
            ...minutes.slice(0, index),
            mins,
            ...minutes.slice(index + 1)
        ]
    }

    $: totalTime = minutes.reduce((acc, curr) => acc + curr, 0);

    $: remaining =  (() => {
        const remaining = (weekTarget - totalTime) / -60
        return remaining > 0 ? `+${remaining}` : remaining;
    })()



</script>

<style>
    div {
        width: 400px;
        display: flex;
        flex-direction: column;
    }
    h3 {
        align-self: flex-end;
    }   
</style>

<div>
    {#each days as day, i}
        <Day {day} {dayTarget} updateMinutes={updateMinutes(i)} />
    {/each}
    <h3>{minsToString(totalTime)} [ {remaining} ]</h3>
</div>
