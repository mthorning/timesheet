<script>
    import { createEventDispatcher } from 'svelte' 
    
    let from = '00:00';
    let to = '00:00';
    

    $: interval = getMinutes(to) - getMinutes(from);

    const dispatch = createEventDispatcher();
    $: minutes = dispatch('newTime', {
                time: interval > 0 ? interval : 0
        });

    function getMinutes(timeString) {
        const time = timeString.split(':').map(t => Number(t));
        const hours = time[0] * 60;
        return hours + time[1];
    }

</script>

<style>
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
</style>

<div>
    <section>
        <label for="from">from: </label>
        <input type="time" id="from" name="from" bind:value={from}>
    </section>
    <section>
        <label for="to">to: </label>
        <input type="time" id="to" name="to" bind:value={to}>
    </section>
    <p>{(interval / 60).toFixed(1)}</p>
</div>
