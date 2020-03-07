<template>
    <add-dialog title="Neue Abteilung"
                :button-disabled="name.length === 0"
                button-text="Erstellen">
        <v-card-text>Standort: {{ location.name }}</v-card-text>
        <v-card-text>
            <v-text-field
                    label="Name"
                    v-model="name"/>
        </v-card-text>
    </add-dialog>
</template>

<script>
    import AddDialog from '../AddDialog';

    export default {
        name: 'AddDepartmentDialog',
        props: [
            'location'
        ],
        components: {AddDialog},
        data() {
            return {
                name: ''
            }
        }
    }
</script>

<style scoped>

</style>