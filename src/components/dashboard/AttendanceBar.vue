<template>
    <v-row class="px-3">
        <v-col v-if="getPercent(0) > 0"
               :cols="getBarWidth(0)"
               class="py-0 px-0">
            <v-sheet tile color="success" :height="height"></v-sheet>
        </v-col>
        <v-col v-if="getPercent(1) > 0"
               :cols="getBarWidth(1)"
               class="py-0 px-0">
            <v-sheet tile color="accent" :height="height"></v-sheet>
        </v-col>
        <v-col v-if="getPercent(2) > 0"
               :cols="getBarWidth(2)"
               class="py-0 px-0">
            <v-sheet tile color="error" :height="height"></v-sheet>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'AttendanceBar',
        props: {
            employees: Array,
            height: String
        },
        methods: {
            getPercent(type) {
                const count = this.employees.filter(employee => employee.status === type).length;
                return count / this.employees.length;
            },
            getBarWidth(type) {
                return Math.floor(12 * this.getPercent(type));
            }
        }
    }
</script>

<style scoped>

</style>