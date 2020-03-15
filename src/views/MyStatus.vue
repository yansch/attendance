<template>
    <panel title="Mein Status">
        <v-select :items="statuses" v-model="status"/>
    </panel>
</template>

<script>
    import Panel from '../components/Panel';

    export default {
        name: 'MyStatus',
        components: {Panel},
        data() {
            return {
                statuses: ['Anwesend', 'Außerhalb', 'Abwesend'],
                status: 0
            }
        }
    }
</script>

<style scoped>

</style>