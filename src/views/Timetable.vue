<template>
    <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :weekdays="[1, 2, 3, 4, 5, 6, 0]"
            color="primary"
            type="week"
    ></v-calendar>
</template>

<script>
    export default {
        name: 'Timetable',
        computed: {
            today() {
                const d = new Date();
                let month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [year, month, day].join('-');
            }
        }
    }
</script>

<style scoped>

</style>