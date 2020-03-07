<template>
    <v-dialog v-model="dialog" :max-width="$vuetify.breakpoint.mdAndDown ? '90%' : '30%'">
        <template v-slot:activator="{ on }">
            <add-button small v-on="on">{{ title }}</add-button>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <slot/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="buttonDisabled" large color="primary" text @click="submit">
                    Erstellen
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import AddButton from './AddButton';

    export default {
        name: 'AddDialog',
        props: {
            title: String,
            buttonDisabled: Boolean,
            buttonText: String
        },
        components: {AddButton},
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
        }
    }
</script>

<style scoped>

</style>