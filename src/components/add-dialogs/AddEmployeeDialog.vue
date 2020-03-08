<template>
    <add-dialog
            title="Mitarbeiter"
            :button-disabled="noEmployeeAvailable">
        <v-card-text>
            <span>Abteilung: {{ department.name }}</span>
        </v-card-text>
        <v-card-text>

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
            <v-tabs-items class="pt-4 px-2" v-model="tab">
                <v-tab-item>
                    <v-select
                            solo
                            :disabled="employees.length === 0"
                            persistent-hint
                            :hint="employees.length > 0 ? null : 'Keine freien Mitarbeiter verfügbar. ' +
                             'Sie können einen neuen Mitarbeiter erstellen oder jemanden aus einer anderen Abteilung entfernen.'"
                            label="Mitarbeiter auswählen"
                            item-text="name"
                            v-model="employeeToAdd"
                            :items="employees">
                    </v-select>
                </v-tab-item>
                <v-tab-item>
                    <v-row>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    required
                                    label="Vorname"
                                    v-model="employeeToCreate.firstName"/>
                        </v-col>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    required
                                    label="Nachname"
                                    v-model="employeeToCreate.lastName"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="10" md="8">
                            <v-text-field
                                    append-icon="email"
                                    required
                                    label="Email"
                                    v-model="employeeToCreate.email"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="10" md="8">
                            <v-text-field
                                    append-icon="lock"
                                    required
                                    label="Passwort"
                                    v-model="employeeToCreate.password"/>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
            <v-card v-if="!noEmployeeAvailable" class="mx-2 pa-4" outlined>
                <v-row>
                    <v-col xs="11">
                        <v-rating
                                empty-icon="assignment_ind"
                                full-icon="assignment_turned_in"
                                length="4"
                                v-model="employeeToCreate.permissionLvl"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="11">
                        <span v-if="employeeToCreate.permissionLvl === 1">Der Mitarbeiter ist ein normaler Angestellter</span>
                        <span v-if="employeeToCreate.permissionLvl > 1">Der Mitarbeiter ist ein Abteilungsleiter</span>
                        <span v-if="employeeToCreate.permissionLvl > 2"> und Standortsleiter</span>
                        <span v-if="employeeToCreate.permissionLvl > 3"> und Administrator</span>
                    </v-col>
                </v-row>
            </v-card>
        </v-card-text>
    </add-dialog>
</template>

<script>
    import AddButton from './AddButton';
    import AddDialog from '../AddDialog';

    export default {
        name: 'AddEmployeeDialog',
        props: [
            'department'
        ],
        components: {AddDialog, AddButton},
        data() {
            return {
                dialog: false,
                tab: 0,
                employees: [],
                employeeToAdd: null,
                employeeToCreate: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
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
            noEmployeeAvailable() {
                return this.tab === 0 && this.employeeToAdd == null;
            }
        }
    }
</script>