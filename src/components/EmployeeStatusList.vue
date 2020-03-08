<template>
    <v-container>
        <h2>{{ title }}</h2>
        <v-list>
            <v-list-item v-for="employee in toBeShown" :key="employee.name">
                {{ employee.name }}
            </v-list-item>
        </v-list>
        <v-btn text v-if="employees.length > 5" @click="showAll = !showAll">
            <div v-if="!showAll">
                <v-icon left>expand_more</v-icon>
                Alle anzeigen
            </div>
            <div v-else>
                <v-icon left>expand_less</v-icon>
                Weniger anzeigen
            </div>
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: 'EmployeeStatusList',
        props: {
            employees: Array
        },
        data() {
            return {
                showAll: false
            }
        },
        computed: {
            title() {
                switch (this.employees[0].status) {
                    case 'office':
                        return 'Anwesend';
                    case 'home_office':
                        return 'Home Office';
                    case 'absent':
                        return 'Abwesend';
                }
            },
            color() {
                switch (this.employees[0].status) {
                    case 'office':
                        return 'success';
                    case 'home_office':
                        return 'accent';
                    case 'absent':
                        return 'error';
                }
            },
            toBeShown() {
                return this.showAll ? this.employees : this.employees.slice(0, 5)
            }
        }
    }
</script>