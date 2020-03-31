<template>
    <add-dialog
            title="Mitarbeiter"
            v-model="active"
            @submit="createEmployee()"
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
                            :disabled="freeEmployees.length === 0"
                            persistent-hint
                            :hint="freeEmployees.length > 0 ? null : 'Keine freien Mitarbeiter verfügbar. ' +
                             'Sie können einen neuen Mitarbeiter erstellen oder jemanden aus einer anderen Abteilung entfernen.'"
                            label="Mitarbeiter auswählen"
                            :item-text="e => `${e.firstname} ${e.lastname}`"
                            :item-value="e => e"
                            v-model="employeeToAdd"
                            :items="freeEmployees"/>
                </v-tab-item>
                <v-tab-item>
                    <v-row>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    required
                                    :rules="[rules.required]"
                                    label="Vorname"
                                    v-model="employeeToCreate.firstName"/>
                        </v-col>
                        <v-col xs="8" md="6">
                            <v-text-field
                                    required
                                    :rules="[rules.required]"
                                    label="Nachname"
                                    v-model="employeeToCreate.lastName"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="10" md="8">
                            <v-text-field
                                    append-icon="email"
                                    required
                                    :rules="[rules.email, rules.required]"
                                    label="Email"
                                    v-model="employeeToCreate.email"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="10" md="8">
                            <v-text-field
                                    append-icon="lock"
                                    required
                                    :rules="[rules.required]"
                                    label="Passwort"
                                    v-model="employeeToCreate.password"/>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
            <v-card v-if="!noEmployeeAvailable" class="mx-2" outlined>
                <v-card-title class="grey--text">Berechtigungen</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col xs="11">
                            <v-rating
                                    empty-icon="assignment_ind"
                                    full-icon="assignment_turned_in"
                                    :length="$store.getters.user.permissionLvl + 1"
                                    v-model="permissionLvl"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="11">
                            <span v-if="permissionLvl === 1">Der Mitarbeiter ist ein normaler Angestellter</span>
                            <span v-if="permissionLvl > 1">Der Mitarbeiter ist ein Abteilungsleiter</span>
                            <span v-if="permissionLvl > 2"> und Standortsleiter</span>
                            <span v-if="permissionLvl > 3"> und Administrator</span>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-card-text>
    </add-dialog>
</template>

<script>
    import AddDialog from '../AddDialog';
    import dialog from '../../mixins/dialog';
    import {DepartmentService, EmployeeService} from '../../services/api';

    export default {
        name: 'AddEmployeeDialog',
        props: [
            'department'
        ],
        components: {AddDialog},
        mixins: [dialog],
        data() {
            return {
                tab: 0,
                freeEmployees: [],
                employeeToAdd: null,
                employeeToCreate: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },
                permissionLvl: 1,
                rules: {
                    required: value => !!value,
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value);
                    }
                }
            }
        },
        watch: {
            active: function (isActive) {
                if (isActive) {
                    EmployeeService.allUnassigned()
                        .then(response => {
                            this.freeEmployees = response.data;
                        })
                }
            }
        },
        methods: {
            createEmployee() {
                if (this.tab === 0) {
                    let department = this.department;
                    const employee = {
                        firstname: this.employeeToAdd.firstname,
                        lastname: this.employeeToAdd.lastname,
                        permissionlvl: this.permissionLvl - 1,
                        id: this.employeeToAdd.id
                    };
                    department.employeeList.push(employee);
                    DepartmentService.update(department)
                        .then(() => {
                            this.$emit('success')
                        })
                        .catch(() => {
                            this.$emit('error')
                        })
                        .finally(() => {
                            this.close();
                        })
                } else {
                    const employee = {
                        firstname: this.employeeToCreate.firstName,
                        lastname: this.employeeToCreate.lastName,
                        permissionlvl: this.permissionLvl - 1,
                        email: this.employeeToCreate.email,
                        department: this.department,
                        passwordhash: this.employeeToCreate.password
                    };
                    EmployeeService.create(employee)
                        .then(() => {
                            this.$emit('success')
                        })
                        .catch(() => {
                            this.$emit('error')
                        })
                        .finally(() => {
                            this.close();
                        })
                }
            }
        },
        computed: {
            noEmployeeAvailable() {
                return this.tab === 0 && this.employeeToAdd == null;
            }
        }
    }
</script>