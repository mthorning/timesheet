<script>
    import Interval from './Interval.svelte';
    import { minsToString } from '../utils';

    export let day;
    export let dayTarget;
    export let updateMinutes;

    let intervals = [];

    $: totalTime = intervals.reduce((acc, curr) => acc + curr, 0);
    $: minutes = updateMinutes(totalTime);
   

    function handleAddInterval() {
        intervals = [...intervals, 0]
    }

    function handleNewTime(index, event) {
        intervals = [
            ...intervals.slice(0, index),
            event.detail.time,
            ...intervals.slice(index + 1)
        ]
    }

    function deleteInterval(index) {
        intervals = [
            ...intervals.slice(0, index),
            ...intervals.slice(index + 1)
        ]
    }

    $: remaining =  (() => {
        const remaining = (dayTarget - totalTime) / -60
        return remaining > 0 ? `+${remaining}` : remaining;
    })()

</script>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
    section {
        margin: 8px;
        width: 100%;
    }
    button, p {
        align-self: flex-end;
    }   
</style>

<h4>{day}</h4>
<div>
    {#each intervals as interval, i}
        <section>
            <Interval 
                on:newTime={e => handleNewTime(i, e)} 
                deleteInterval={() => deleteInterval(i)} 
            />
        </section>
    {/each}
    <button on:click={handleAddInterval}>Add</button>
    <p>{minsToString(totalTime)} [ {remaining} ]</p>
</div>
