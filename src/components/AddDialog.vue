<template>
    <v-dialog v-model="dialog" :max-width="width">
        <template v-slot:activator="{ on }">
            <v-btn small outlined v-on="on">
                <v-icon left>add</v-icon>
                {{ title }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }} hinzufügen</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <slot/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="buttonDisabled" large color="primary" text @click="submit">
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
            buttonDisabled: Boolean
        },
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            submit() {
                this.$emit('submit');
                this.dialog = false;
            }
        },
        computed: {
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