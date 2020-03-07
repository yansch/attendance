<template>
    <add-dialog title="Neuer Standort"
                :button-disabled="name.length === 0"
                button-text="Erstellen">
        <v-card-text>
            <v-text-field
                    label="Name"
                    v-model="name"/>
        </v-card-text>

    </add-dialog>
</template>

<script>
    import AddDialog from './AddDialog';

    export default {
        name: 'AddLocationDialog',
        components: {AddDialog},
        data() {
            return {
                name
            }
        }
    }
</script>

<style scoped>

</style>