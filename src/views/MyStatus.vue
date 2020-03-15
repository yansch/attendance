<template>
    <panel title="Mein Status">
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
    </panel>
</template>

<script>
    import Panel from '../components/Panel';
    import status_styling from '../services/status_styling';

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
                let names = [];
                for (let i = 0; i < status_styling.names.length; i++) {
                    names.push({
                        id: i,
                        name: status_styling.names[i]
                    })
                }
                return names
            },
            icon() {
                return status_styling.icons[this.status]
            },
            color() {
                return status_styling.colors[this.status]
            },
            placeholder() {
                return ['', 'Home Office, Konferenz, ...', 'Urlaub, Krankheit, ...'][this.status]
            }
        }
    }
</script>

<style scoped>

</style>