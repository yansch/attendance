<template>
    <add-dialog title="Abteilung"
                v-model="active"
                @submit="createDepartment()"
                :button-disabled="name.length === 0">
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
    import {DepartmentService} from '../../services/api/Api';
    import dialog from '../../mixins/dialog';

    export default {
        name: 'AddDepartmentDialog',
        props: [
            'location'
        ],
        components: {AddDialog},
        mixins: [dialog],
        data() {
            return {
                name: ''
            }
        },
        methods: {
            createDepartment() {
                const department = {name: this.name, location: this.location};
                DepartmentService.create(department)
                    .then(() => {
                        this.$emit('success');
                    })
                    .catch(() => {
                        this.$emit('error');
                    })
                    .finally(() => {
                        this.close();
                    })
            }
        }
    }
</script>

<style scoped>

</style>