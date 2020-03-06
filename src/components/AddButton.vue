<template>
    <v-btn v-on="$listeners" outlined>
        <v-icon left>add</v-icon>
        <slot/>
    </v-btn>
</template>

<script>
    export default {
        name: 'AddButton'
    }
</script>