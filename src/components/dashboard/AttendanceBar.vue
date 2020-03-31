<template>
    <v-row min-width="100%" class="px-3">
        <v-sheet v-for="i in [0, 1, 2]"
                 :key="i"
                 :color="color(i)"
                 :min-width="getBarWidth(i)"
                 :height="height"
                 tile/>
    </v-row>
</template>

<script>
    import styling from '../../services/styling';

    export default {
        name: 'AttendanceBar',
        props: {
            employees: Array,
            height: String
        },
        methods: {
            getBarWidth(type) {
                const count = this.employees.filter(employee => employee.status === type).length;
                return count / this.employees.length * 100 + "%";
            },
            color(type) {
                return styling.status_colors[type]
            }
        }
    }
</script>
