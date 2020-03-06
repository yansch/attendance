<template>
    <v-dialog v-model="dialog" persistent :max-width="$vuetify.breakpoint.mdAndDown ? '90%' : '50%'">
        <template v-slot:activator="{ on }">
            <add-button v-on="on">Mitarbeiter hinzufügen</add-button>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Mitarbeiter hinzufügen</span>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <span>Abteilung: {{ department }}</span>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">Hinzufügen</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import AddButton from './AddButton';

    export default {
        name: 'AddEmployeeDialog',
        props: [
            'department'
        ],
        components: {AddButton},
        data() {
            return {
                dialog: false
            }
        }
    }
</script>

<style scoped>

</style>