<template>
    <v-container>
        <panel title="Organisation">
            <v-card class="my-2" v-for="location in locations" :key="location.name">
                <v-toolbar light dense flat>
                    <v-icon class="mr-2">business</v-icon>
                    <v-toolbar-title>{{ location.name }}</v-toolbar-title>
                </v-toolbar>
                <v-expansion-panels accordion>
                    <v-expansion-panel v-for="department in location.departments"
                                       :key="department.name">
                        <v-expansion-panel-header>{{ department.name }}</v-expansion-panel-header>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
        </panel>
    </v-container>
</template>

<script>
    import Panel from '../components/Panel';

    export default {
        name: 'Management',
        components: {Panel},
        data() {
            return {
                locations: [
                    {
                        name: 'Essen',
                        departments: [
                            {
                                name: 'Entwicklung',
                                employees: [
                                    {
                                        name: 'Jan'
                                    }
                                ]
                            },
                            {
                                name: 'Vertrieb',
                                employees: []
                            },
                            {
                                name: 'Marketing',
                                employees: []
                            },
                        ]
                    },
                    {
                        name: 'Berlin',
                        departments: [
                            {
                                name: 'Entwicklung',
                                employees: [
                                    {
                                        name: 'Sebastian'
                                    }
                                ]
                            }
                        ]
                    }
                ]

            }
        }
    }
</script>

<style scoped>

</style>