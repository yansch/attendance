<template>
    <v-row class="px-3">
        <v-col v-if="getPercent('office') > 0"
               :cols="getBarWidth('office')"
               class="py-0 px-0">
            <v-sheet tile color="success" :height="height"></v-sheet>
        </v-col>
        <v-col v-if="getPercent('home_office') > 0"
               :cols="getBarWidth('home_office')"
               class="py-0 px-0">
            <v-sheet tile color="accent" :height="height"></v-sheet>
        </v-col>
        <v-col v-if="getPercent('absent') > 0"
               :cols="getBarWidth('absent')"
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
                console.log(type + ': ' + 12 * this.getPercent(type));
                return Math.floor(12 * this.getPercent(type));
            }
        }
    }
</script>

<style scoped>

</style>