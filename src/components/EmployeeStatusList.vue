<template>
    <v-container>
        <h2>
            <v-icon left :color="color">{{ icon }}</v-icon>
            {{ title }}
        </h2>
        <v-divider class="mt-2"/>
        <v-list v-if="employees.length > 0" dense>
            <v-list-item v-for="employee in toBeShown" :key="employee.name">
                <v-icon left>person</v-icon>
                {{ employee.name }}
            </v-list-item>
        </v-list>
        <v-icon v-else class="mx-4 mt-4">remove</v-icon>
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
    import styling from '../services/styling';

    export default {
        name: 'EmployeeStatusList',
        props: {
            employees: Array,
            type: Number
        },
        data() {
            return {
                showAll: false
            }
        },
        computed: {
            title() {
                return styling.status_names[this.type]
            },
            icon() {
                return styling.status_icons[this.type]
            },
            color() {
                return styling.status_colors[this.type]
            },
            toBeShown() {
                return this.showAll ? this.employees : this.employees.slice(0, 5)
            }
        }
    }
</script>