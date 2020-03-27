<template>
    <v-snackbar color="error" v-if="active">Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.</v-snackbar>
</template>

<script>
    export default {
        name: 'ErrorSnackbar',
        props: {
            active: Boolean
        }
    }
</script>

<style scoped>

</style>