<template>
    <v-btn :icon="isSmallDisplay" small v-on="$listeners" outlined>
        <v-icon>add</v-icon>
        <slot v-if="!isSmallDisplay"/>
    </v-btn>
</template>

<script>
    export default {
        name: 'AddButton',
        computed: {
            isSmallDisplay() {
                return this.$vuetify.breakpoint.xsOnly;
            }
        }
    }
</script>