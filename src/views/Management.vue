<template>
    <v-container>
        <panel title="Organisation">
            <v-layout align-start justify-start>
                <v-treeview
                        open-on-click
                        hoverable
                        rounded
                        open-all
                        :items="organization"
                >
                    <template v-slot:prepend="{item}">
                        <v-icon>{{ item.icon }}</v-icon>
                    </template>
                </v-treeview>
            </v-layout>
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
                organization: [
                    {
                        name: 'Essen',
                        icon: 'business',
                        children: [
                            {
                                name: 'Marketing',
                                icon: 'storefront',
                                children: [
                                    {
                                        name: 'Jan',
                                        icon: 'person'
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Berlin',
                        icon: 'business',
                        children: [
                            {
                                name: 'Entwicklung',
                                icon: 'storefront',
                                children: [
                                    {
                                        name: 'Sebastian',
                                        icon: 'person'
                                    }
                                ]
                            },
                            {
                                name: 'Vertrieb',
                                icon: 'storefront'
                            },
                            {
                                name: 'Marketing',
                                icon: 'storefront'
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>