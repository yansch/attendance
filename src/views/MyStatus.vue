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
                          required
                          :rules="[rules.required]"
                          v-show="status > 0"
                          v-model="description"
                          label="Beschreibung"
                          :placeholder="placeholder"/>
        </v-slide-y-transition>
        <v-btn :disabled="status > 0 && description.length === 0"
               :loading="loading"
               @click="setStatus()"
               class="ma-1"
               color="primary">Bestätigen</v-btn>
        <error-snackbar :error="error"/>
    </panel>
</template>

<script>
    import Panel from '../components/Panel';
    import styling from '../services/styling';
    import {StatusService} from '../services/api';
    import error from '../mixins/error';
    import ErrorSnackbar from '../components/snackbars/ErrorSnackbar';

    export default {
        name: 'MyStatus',
        components: {ErrorSnackbar, Panel},
        mixins: [error],
        data() {
            return {
                status: 0,
                description: '',
                loading: false,
                rules: {
                    required: value => !!value
                }
            }
        },
        created() {
            this.getStatus();
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
                return ['', 'Home Office, Konferenz, ...', 'Urlaub, Krankheit, Feierabend ...'][this.status]
            }
        },
        methods: {
            getStatus() {
                this.loading = true;
                return StatusService.get()
                    .then(response => {
                        const data = response.data;
                        this.status = data.status;
                        this.description = data.description;
                    })
                    .catch(() => {
                        this.handleError('status_not_found');
                    })
                .finally(() => {
                    this.loading = false;
                })
            },
            setStatus() {
                this.loading = true;
                return StatusService.set({status: this.status, description: this.description})
                    .catch(e => {
                        this.handleError(e);
                    })
                    .finally(() => {
                        this.getStatus();
                    })
            }
        }
    }
</script>

<style scoped>

</style>