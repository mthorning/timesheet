<script>
    import Day from './components/Day.svelte';

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];
</script>

<style>
    div {
        width: 400px;
    }
</style>

<div>
    {#each days as day}
        <Day { day } />
    {/each}
</div>
