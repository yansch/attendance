<template>
    <v-row class="px-3">
        <v-col v-if="getPercent('office') > 0"
               :cols="getBarWidth('office')"
               class="py-0 px-0">
            <v-sheet tile color="success" height="10px"></v-sheet>
        </v-col>
        <v-col v-if="getPercent('home_office') > 0"
               :cols="getBarWidth('home_office')"
               class="py-0 px-0">
            <v-sheet tile color="accent" height="10px"></v-sheet>
        </v-col>
        <v-col v-if="getPercent('absent') > 0"
               :cols="getBarWidth('absent')"
               class="py-0 px-0">
            <v-sheet tile color="error" height="10px"></v-sheet>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'AttendanceBar',
        props: {
            employees: Array
        },
        methods: {
            getPercent(type) {
                const count = this.employees.filter(employee => employee.status === type).length;
                //console.log(type + ': ' + count / this.employees.length);
                return count / this.employees.length;
            },
            getBarWidth(type) {
                console.log(type + ': ' + 12 * this.getPercent(type));
                return parseInt(12 * this.getPercent(type));
            }
        }
    }
</script>

<style scoped>

</style>