<script>
    import Interval from './Interval.svelte';
    export let day;

    let intervals = [];

    $: totalTime = intervals.reduce((acc, curr) => acc + curr, 0);

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
</script>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    section {
        margin: 8px;
        width: 100%;
    }
    button, p {
        align-self: flex-end;
    }   
</style>

<p>{day}</p>
<div>
    {#each intervals as interval, i}
        <section>
            <Interval on:newTime={e => handleNewTime(i, e)} />
        </section>
    {/each}
    <button on:click={handleAddInterval}>Add</button>
    <p>Total: {totalTime}</p>
</div>
