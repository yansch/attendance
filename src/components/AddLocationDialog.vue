<template>
    <add-dialog title="Standort"
                :button-disabled="name.length === 0">
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