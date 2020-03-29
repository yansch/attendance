<template>
    <v-layout mt-10 align-center justify-center row fill-height>
        <v-flex xs11 md9>
            <v-card v-for="location in locations" :key="location.name">
                <v-toolbar>
                    <v-icon large left>business</v-icon>
                    <v-toolbar-title class="headline">{{ location.name }}</v-toolbar-title>
                </v-toolbar>
                <attendance-bar height="15px"
                                :employees="location.departments.flatMap(d => d.employees)"/>
                <v-card-text>
                    <department-status-card
                            class="ma-2"
                            v-for="department in location.departments"
                            :key="location.name"
                            :department="department"/>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import AttendanceBar from '../components/AttendanceBar';
    import DepartmentStatusCard from './DepartmentStatusCard';

    export default {
        name: 'Dashboard',
        components: {DepartmentStatusCard, AttendanceBar},
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
                                        status: 'office',
                                        permissionLvl: 2
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