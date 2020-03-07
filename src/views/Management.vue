<template>
    <v-container>
        <panel title="Organisation">
            <add-button>Neuer Standort</add-button>
            <v-card class="my-2" v-for="location in locations" :key="location.name">
                <v-toolbar light dense flat>
                    <v-icon class="mr-2">business</v-icon>
                    <v-toolbar-title>{{ location.name }}</v-toolbar-title>
                    <v-spacer/>
                    <add-department-dialog :location="location"/>
                </v-toolbar>
                <v-expansion-panels accordion>
                    <v-expansion-panel v-for="department in location.departments"
                                       :key="department.name">
                        <v-expansion-panel-header>{{ department.name }}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-list dense>
                                <v-list-item v-for="employee in department.employees" :key="employee.name">
                                    <v-list-item-avatar>
                                        <v-icon>person</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        {{ employee.name }}
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn icon @click="removeEmployee(location, department, employee)">
                                            <v-icon>close</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <add-employee-dialog :department="department"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
        </panel>
    </v-container>
</template>

<script>
    import Panel from '../components/Panel';
    import AddButton from '../components/AddButton';
    import AddEmployeeDialog from '../components/AddEmployeeDialog';
    import AddDepartmentDialog from '../components/AddDepartmentDialog';

    export default {
        name: 'Management',
        components: {AddDepartmentDialog, AddEmployeeDialog, AddButton, Panel},
        data() {
            return {
                locations: [
                    {
                        name: 'Essen',
                        departments: [
                            {
                                name: 'Entwicklung',
                                employees: [
                                    {
                                        name: 'Jan'
                                    }
                                ]
                            },
                            {
                                name: 'Vertrieb',
                                employees: []
                            },
                            {
                                name: 'Marketing',
                                employees: []
                            },
                        ]
                    },
                    {
                        name: 'Berlin',
                        departments: [
                            {
                                name: 'Entwicklung',
                                employees: [
                                    {
                                        name: 'Sebastian'
                                    }
                                ]
                            }
                        ]
                    }
                ]

            }
        },
        methods: {
            removeEmployee(location, department, employee) {

            }
        }
    }
</script>