<template>
    <v-dialog v-model="show" :max-width="width">
        <template v-slot:activator="{}">
            <v-btn @click="show = true" small outlined>
                <v-icon left>add</v-icon>
                {{ title }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }} hinzufügen</span>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="show = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <slot/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="loading" :disabled="buttonDisabled" large color="primary" text @click="submit">
                    Hinzufügen
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

    export default {
        name: 'AddDialog',
        props: {
            title: String,
            buttonDisabled: Boolean,
            value: Boolean
        },
        data() {
            return {
                loading: false
            }
        },
        methods: {
            submit() {
                this.loading = true;
                this.$emit('submit');
            }
        },
        computed: {
            show: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value);
                    this.loading = false;
                }
            },
            width() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                    case 'sm':
                        return '90%';
                    case 'md':
                        return '70%';
                    case 'lg':
                        return '50%';
                    default:
                        return '30%';
                }
            }
        }
    }
</script>

<style scoped>

</style>