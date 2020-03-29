<template>
    <v-snackbar color="error" :value="!!error">
        {{ message }}
    </v-snackbar>
</template>

<script>
    import errors from '../../services/errors';

    export default {
        name: 'ErrorSnackbar',
        props: {
            error: String
        },
        computed: {
            message() {
                return errors[this.error] || 'Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.'
            }
        }
    }
</script>

<style scoped>

</style>