<template>
    <v-dialog v-model="dialog" :max-width="width">
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
    import AddButton from './add-dialogs/AddButton';

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
        },
        computed: {
            width() {
                switch(this.$vuetify.breakpoint.name) {
                    case 'xs':
                    case 'sm':
                        return '90%';
                    case 'md':
                        return '70%';
                    default:
                        return '50%';
                }
            }
        }
    }
</script>

<style scoped>

</style>