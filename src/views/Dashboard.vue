<template>
    <v-layout mt-10 align-center justify-center row fill-height>
        <v-flex xs11 md9>
            <v-card v-for="location in locations" :key="location.id">
                <v-toolbar>
                    <v-icon large left>business</v-icon>
                    <v-toolbar-title class="headline">{{ location.name }}</v-toolbar-title>
                </v-toolbar>
                <attendance-bar height="15px"
                                v-if="$store.getters.user.permissionLvl > 0"
                                :employees="location.departments.flatMap(d => d.employees)"/>
                <v-card-text>
                    <department-status-card
                            class="ma-2"
                            v-for="department in location.departments"
                            :key="department.id"
                            :department="department"/>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import AttendanceBar from '../components/dashboard/AttendanceBar';
    import DepartmentStatusCard from '../components/dashboard/DepartmentStatusCard';
    import {DashboardService} from '../services/api';

    export default {
        name: 'Dashboard',
        components: {DepartmentStatusCard, AttendanceBar},
        data() {
            return {
                locations: []
            }
        },
        created() {
            this.load();
        },
        methods: {
            load() {
                DashboardService.get()
                    .then(response => { //algorithm to reverse json hierarchy
                        const data = response.data;
                        let locations = [];
                        data.forEach(status => {
                            let employee = status.employee;
                            const department = employee.department;
                            const location = department.location;

                            //delete to avoid stack overflow errors
                            delete status.employee;
                            delete department.location;

                            department.employees = [];

                            let locationIndex = locations.findIndex(l => l.id === location.id);
                            if (locationIndex < 0) { //location not added yet
                                locationIndex = locations.length;
                                location.departments = [department];
                                locations.push(location);
                            } else { //location is already in array
                                let departmentIndex = locations[locationIndex].departments.findIndex(d => d.id === department.id);
                                if (departmentIndex < 0) { //department not added yet
                                    locations[locationIndex].departments.push(department)
                                }
                            } //location and department are in new array
                            let departmentIndex = locations[locationIndex].departments.findIndex(d => d.id === department.id);
                            employee.status = status.status; //add status to employee object
                            employee.description = status.description;
                            locations[locationIndex].departments[departmentIndex].employees.push(employee); //add employee to right department
                        });
                        this.locations = locations;
                    })
            }
        }
    }
</script>