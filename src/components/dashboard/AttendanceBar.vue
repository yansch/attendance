<template>
    <v-row class="px-3">
        <v-col v-if="percentages[0] > 0"
               :cols="getBarWidth(0)"
               class="py-0 px-0">
            <v-sheet tile color="success" :height="height"></v-sheet>
        </v-col>
        <v-col v-if="percentages[1] > 0"
               :cols="getBarWidth(1)"
               class="py-0 px-0">
            <v-sheet tile color="accent" :height="height"></v-sheet>
        </v-col>
        <v-col v-if="percentages[2] > 0"
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

            },
            getBarWidth(type) {
                return Math.round(12 * this.percentages[type] / 100);
            }
        },
        computed: {
            percentages() {
                let percentages = [];
                [0, 1, 2].forEach(i => {
                    const count = this.employees.filter(employee => employee.status === i).length;
                    percentages.push(count / this.employees.length * 100)
                });
                console.log(largestRemainderRound(percentages, 100));
                return largestRemainderRound(percentages, 100)
            }
        }
    }

    //credit https://gist.github.com/scwood/e58380174bd5a94174c9f08ac921994f
    function largestRemainderRound(numbers, desiredTotal) {
        const result = numbers.map(function(number, index) {
            return {
                floor: Math.floor(number),
                remainder: getRemainder(number),
                index: index,
            };
        }).sort(function(a, b) {
            return b.remainder - a.remainder;
        });

        const lowerSum = result.reduce(function(sum, current) {
            return sum + current.floor;
        }, 0);

        const delta = desiredTotal - lowerSum;
        for (let i = 0; i < delta; i++) {
            result[i].floor++;
        }

        return result.sort(function(a, b) {
            return a.index - b.index;
        }).map(function(result) {
            return result.floor;
        });
    }

    function getRemainder(number) {
        const remainder = number - Math.floor(number);
        return remainder.toFixed(4);
    }

</script>
