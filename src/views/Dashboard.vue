<template>
    <v-layout align-center justify-center row fill-height>
        <v-flex xs11 md9>
            <v-card v-for="location in locations" :key="location.name">
                <v-toolbar>
                    <v-icon left>business</v-icon>
                    <v-toolbar-title class="headline">{{ location.name }}</v-toolbar-title>
                </v-toolbar>
                <attendance-bar height="15px"
                                :employees="location.departments.flatMap(d => d.employees)"/>
                <v-card-text>
                    <v-card v-for="department in location.departments" :key="location.name">
                        <v-toolbar>
                            <v-icon left>storefront</v-icon>
                            <v-toolbar-title>{{ department.name }}</v-toolbar-title>
                        </v-toolbar>
                        <attendance-bar height="10px" :employees="department.employees"/>
                        <v-card-text>
                            <v-layout justify-space-between>
                                <v-row>
                                    <v-col>
                                        <employee-status-list
                                                :employees="department.employees.filter(e => e.status === 'office')"/>
                                    </v-col>
                                    <v-col>
                                        <employee-status-list
                                                :employees="department.employees.filter(e => e.status === 'home_office')"/>
                                    </v-col>
                                    <v-col>
                                        <employee-status-list
                                                :employees="department.employees.filter(e => e.status === 'absent')"/>
                                    </v-col>
                                </v-row>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import AttendanceBar from '../components/AttendanceBar';
    import EmployeeStatusList from '../components/EmployeeStatusList';

    export default {
        name: 'Dashboard',
        components: {EmployeeStatusList, AttendanceBar},
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
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Jan',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Joe',
                                        status: 'absent'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                ]
                            },
                            {
                                name: 'Vertrieb',
                                employees: [
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    },
                                    {
                                        name: 'Travis',
                                        status: 'home_office'
                                    }
                                ]
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
                                        name: 'Sebastian',
                                        status: 'absent'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>