<template>
    <v-card>
        <v-toolbar>
            <v-icon left>storefront</v-icon>
            <v-toolbar-title>{{ department.name }}</v-toolbar-title>
            <v-spacer/>
            <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'expand_less' : 'expand_more' }}</v-icon>
            </v-btn>
        </v-toolbar>
        <attendance-bar height="10px" :employees="department.employees"/>
        <v-expand-transition>
            <v-card-text v-show="show">
                <v-layout justify-space-between>
                    <v-row>
                        <v-col xs12 md4>
                            <employee-status-list
                                    type="office"
                                    :employees="department.employees.filter(e => e.status === 'office')"/>
                        </v-col>
                        <v-col xs12 md4>
                            <employee-status-list
                                    type="home_office"
                                    :employees="department.employees.filter(e => e.status === 'home_office')"/>
                        </v-col>
                        <v-col xs12 md4>
                            <employee-status-list
                                    type="absent"
                                    :employees="department.employees.filter(e => e.status === 'absent')"/>
                        </v-col>
                    </v-row>
                </v-layout>
            </v-card-text>
        </v-expand-transition>
    </v-card>
</template>
<script>
    import AttendanceBar from '../components/AttendanceBar'
    import EmployeeStatusList from '../components/EmployeeStatusList'

    export default {
        name: 'DepartmentStatusCard',
        components: {AttendanceBar, EmployeeStatusList},
        props: {
            department: Array
        },
        data() {
            return {
                show: this.$vuetify.breakpoint.mdAndUp
            }
        }
    }
</script>