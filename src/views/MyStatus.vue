<template>
    <panel class="mt-8" title="Mein Status">
        <v-row>
            <v-icon :color="color" class="ma-4">{{ icon }}</v-icon>
            <v-flex xs10 md8 lg6>
                <v-select :items="names"
                          v-model="status"
                          item-text="name"
                          item-value="id"/>
            </v-flex>
        </v-row>
        <v-slide-y-transition>
            <v-text-field class="mx-1"
                          v-show="status > 0"
                          v-model="description"
                          label="Beschreibung"
                          :placeholder="placeholder"/>
        </v-slide-y-transition>
        <v-btn class="ma-1" color="primary">Bestätigen</v-btn>
    </panel>
</template>

<script>
    import Panel from '../components/Panel';
    import styling from '../services/styling';

    export default {
        name: 'MyStatus',
        components: {Panel},
        data() {
            return {
                status: 0,
                description: ''
            }
        },
        computed: {
            names() {
                return styling.status_names.map(s => {
                    return {
                        id: styling.status_names.indexOf(s),
                        name: s
                    }
                });
            },
            icon() {
                return styling.status_icons[this.status]
            },
            color() {
                return styling.status_colors[this.status]
            },
            placeholder() {
                return ['', 'Home Office, Konferenz, ...', 'Urlaub, Krankheit, ...'][this.status]
            }
        }
    }
</script>

<style scoped>

</style>