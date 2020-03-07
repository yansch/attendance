<template>
    <v-dialog v-model="dialog" persistent :max-width="$vuetify.breakpoint.mdAndDown ? '90%' : '30%'">
        <template v-slot:activator="{ on }">
            <add-button small v-on="on">Mitarbeiter hinzufügen</add-button>
        </template>
        <v-card>

            <v-card-title>
                <span class="headline">Mitarbeiter hinzufügen</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <span>Abteilung: {{ department }}</span>
                </v-container>
            </v-card-text>

            <v-tabs v-model="tab" fixed-tabs>
                <v-tab>
                    <span v-if="$vuetify.breakpoint.smAndUp">
                        Mitarbeiter auswählen
                    </span>
                    <v-icon v-else>people</v-icon>
                </v-tab>
                <v-tab>
                    <span v-if="$vuetify.breakpoint.smAndUp">
                        Neuen Mitarbeiter erstellen
                    </span>
                    <v-icon v-else>person_add</v-icon>
                </v-tab>
            </v-tabs>
            <v-tabs-items class="pa-6" v-model="tab">
                <v-tab-item>
                    <v-overflow-btn
                            :disabled="employees.length === 0"
                            persistent-hint
                            :hint="employees.length > 0 ? null : 'Keine freien Mitarbeiter verfügbar.\n'+
'                             Sie können einen neuen Mitarbeiter erstellen oder jemanden aus einer anderen Abteilung entfernen.'"
                            no-data-text=""
                            v-model="employees">
                    </v-overflow-btn>
                </v-tab-item>
                <v-tab-item>
                    <v-row>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    required
                                    label="Vorname"
                                    v-model="newEmployee.firstName"/>
                        </v-col>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    required
                                    label="Nachname"
                                    v-model="newEmployee.lastName"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    append-icon="email"
                                    required
                                    label="Email"
                                    v-model="newEmployee.email"/>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
            <v-card v-if="!noEmployeesAvailable" class="mx-6 pa-4" outlined>
                <v-row>
                    <v-col xs="11">
                        <v-rating
                                empty-icon="assignment_ind"
                                full-icon="assignment_turned_in"
                                length="4"
                                v-model="newEmployee.permissionLvl"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="11">
                        <span v-if="newEmployee.permissionLvl === 1">Der Mitarbeiter ist ein normaler Angestellter</span>
                        <span v-if="newEmployee.permissionLvl > 1">Der Mitarbeiter ist ein Abteilungsleiter</span>
                        <span v-if="newEmployee.permissionLvl > 2"> und Werksleiter</span>
                        <span v-if="newEmployee.permissionLvl > 3"> und Administrator</span>
                    </v-col>
                </v-row>
            </v-card>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="noEmployeesAvailable" large color="primary" text @click="dialog = false">Hinzufügen
                </v-btn>
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
                dialog: false,
                tab: null,
                employees: [],
                newEmployee: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    permissionLvl: 1
                },
            }
        },
        methods: {
            create() {
                this.dialog = false;
            }
        },
        computed: {
            noEmployeesAvailable() {
                return this.tab === 0 && this.employees.length === 0;
            }
        }
    }
</script>

<style scoped>

</style>