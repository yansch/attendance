<template>
    <v-layout align-center justify-center row fill-height>
        <v-flex xs11 md9>
            <v-card v-for="location in locations" :key="location.name">
                <v-card-title class="headline">{{ location.name }}</v-card-title>
                <attendance-bar :employees="location.departments[0].employees"/>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import AttendanceBar from '../components/AttendanceBar';
    export default {
        name: 'Dashboard',
        components: {AttendanceBar},
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
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
                                        status: 'office'
                                    },
                                    {
                                        name: 'Cudi',
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