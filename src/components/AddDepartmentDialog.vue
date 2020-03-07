<template>
    <add-dialog title="Neue Abteilung">
        <v-card-text>Standort: {{ location.name }}</v-card-text>
    </add-dialog>
</template>

<script>
    import AddDialog from './AddDialog';
    export default {
        name: 'AddDepartmentDialog',
        props: [
            'location'
        ],
        components: {AddDialog}
    }
</script>

<style scoped>

</style>