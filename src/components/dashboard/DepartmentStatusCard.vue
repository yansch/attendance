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
                                    :type="0"
                                    :employees="department.employees.filter(e => e.status === 0)"/>
                        </v-col>
                        <v-col xs12 md4>
                            <employee-status-list
                                    :type="1"
                                    :employees="department.employees.filter(e => e.status === 1)"/>
                        </v-col>
                        <v-col xs12 md4>
                            <employee-status-list
                                    :type="2"
                                    :employees="department.employees.filter(e => e.status === 2)"/>
                        </v-col>
                    </v-row>
                </v-layout>
            </v-card-text>
        </v-expand-transition>
    </v-card>
</template>
<script>
    import AttendanceBar from './AttendanceBar'
    import EmployeeStatusList from './EmployeeStatusList'

    export default {
        name: 'DepartmentStatusCard',
        components: {AttendanceBar, EmployeeStatusList},
        props: {
            department: Object
        },
        data() {
            return {
                show: this.$vuetify.breakpoint.mdAndUp
            }
        }
    }
</script>