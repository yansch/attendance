<template>
    <v-container mt-8>
        <panel title="Organisation">
            <v-card class="my-2" v-for="location in locations" :key="location.name">
                <v-toolbar light dense flat>
                    <v-icon left>business</v-icon>
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
                                                <v-list-item @click="">
                                                    <v-icon left>delete_outline</v-icon>
                                                    Mitarbeiter löschen
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <add-employee-dialog :department="department"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
            <v-container class="pa-2 pl-0">
                <add-location-dialog/>
            </v-container>
        </panel>
    </v-container>
</template>

<script>
    import Panel from '../components/Panel';
    import AddButton from '../components/add-dialogs/AddButton';
    import AddEmployeeDialog from '../components/add-dialogs/AddEmployeeDialog';
    import AddDepartmentDialog from '../components/add-dialogs/AddDepartmentDialog';
    import AddLocationDialog from '../components/AddLocationDialog';

    export default {
        name: 'Management',
        components: {AddLocationDialog, AddDepartmentDialog, AddEmployeeDialog, AddButton, Panel},
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