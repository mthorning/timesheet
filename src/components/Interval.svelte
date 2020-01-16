<script>
    import { createEventDispatcher } from 'svelte' 
    import { minsToString } from '../utils'

    export let deleteInterval;
    
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
    }
    .close {
        cursor: pointer;
        color: rgba(128, 0, 0,3);
        border: 1px solid rgba(128, 0, 0,3);
        border-radius: 8px;
        height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1px;
    }
    .close::after {
            content: "x"
        
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
    <p>{minsToString(interval)}</p>
    <div class="close" on:click={deleteInterval} />
</div>
