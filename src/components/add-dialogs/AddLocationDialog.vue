<template>
    <add-dialog title="Standort"
                v-model="active"
                @submit="createLocation()"
                :button-disabled="name.length === 0">
        <v-card-text>
            <v-text-field
                    label="Name"
                    v-model="name"/>
        </v-card-text>

    </add-dialog>
</template>

<script>
    import AddDialog from '../AddDialog';
    import {LocationService} from '../../services/api/Api';
    import {dialog} from '../../mixins/dialog';

    export default {
        name: 'AddLocationDialog',
        components: {AddDialog},
        mixins: [dialog],
        data() {
            return {
                name: ''
            }
        },
        methods: {
            createLocation() {
                const location = {name: this.name};
                LocationService.create(location)
                    .then(() => {
                        this.$emit('success')
                    })
                    .catch(() => {
                        this.$emit('error')
                    })
                    .finally(() => {
                        this.close();
                    });
            }
        }
    }
</script>

<style scoped>

</style>