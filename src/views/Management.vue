<template>
    <v-container mt-8>
        <panel title="Organisation" :loading="loading">
            <v-card class="my-2" v-for="location in locations" :key="location.id">
                <v-toolbar light dense flat>
                    <v-icon left>business</v-icon>
                    <v-toolbar-title>{{ location.name }}</v-toolbar-title>
                    <v-spacer/>
                    <add-department-dialog :location="location" @success="load" @error="error = true"/>
                    <v-btn icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-expansion-panels accordion>
                    <v-expansion-panel v-for="department in location.departmentList"
                                       :key="department.id">
                        <v-expansion-panel-header>
                            <template v-slot:default="{ open }">
                                <span>{{ department.name }}</span>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-list dense>
                                <v-list-item v-for="employee in department.employeeList" :key="employee.id">
                                    <v-list-item-avatar>
                                        <v-icon>person</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        {{ employee.firstname}} {{employee.lastname}}
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-menu open-on-hover top offset-y>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on">
                                                    <v-icon>close</v-icon>
                                                </v-btn>
                                            </template>
                                            <v-list>
                                                <v-list-item @click="">
                                                    <v-icon left>remove_circle_outline</v-icon>
                                                    Aus dieser Abteilung entfernen
                                                </v-list-item>
                                                <v-list-item @click="deleteEmployee(department, employee)">
                                                    <v-icon left>delete_outline</v-icon>
                                                    Mitarbeiter löschen
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <v-row>
                                <add-employee-dialog :department="department" @success="load" @error="error = true"/>
                                <v-spacer/>
                                <v-btn icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
            <v-container class="pa-2 pl-0">
                <add-location-dialog @success="load" @error="error = true"/>
            </v-container>
        </panel>
        <error-snackbar :active="error"/>
    </v-container>
</template>

<script>
    import Panel from '../components/Panel';
    import AddEmployeeDialog from '../components/add-dialogs/AddEmployeeDialog';
    import AddDepartmentDialog from '../components/add-dialogs/AddDepartmentDialog';
    import AddLocationDialog from '../components/add-dialogs/AddLocationDialog';
    import {DepartmentService, EmployeeService, LocationService} from '../services/api/Api';
    import ErrorSnackbar from '../components/snackbars/ErrorSnackbar';

    export default {
        name: 'Management',
        components: {ErrorSnackbar, AddLocationDialog, AddDepartmentDialog, AddEmployeeDialog, Panel},
        data() {
            return {
                loading: true,
                error: false,
                locations: []
            }
        },
        created() {
            this.loading = true;
            this.load();
        },
        computed: {
            icon(employee) {

            }
        },
        methods: {
            load() {
                LocationService.all()
                    .then(response => {
                        this.locations = response.data;
                        this.error = false;
                    })
                    .catch(() => {
                        this.error = true;
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
            deleteEmployee(department, employee) {
                this.$delete(department.employeeList, department.employeeList.indexOf(employee));
                EmployeeService.delete(employee.id)
                    .catch(() => {
                        this.error = true;
                    })
                    .finally(() => {
                        this.load();
                    })
            }
        }
    }
</script>