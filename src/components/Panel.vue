<template>
    <v-layout align-center justify-center row fill-height>
    <v-flex xs11 sm7 md4>
        <div class="panel white elevation-2 ma-5" dark>
            <v-toolbar color="primary" dark dense flat>
                <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
                <slot/>
            </div>
        </div>
    </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>

<style scoped>

    div {

    }

    .panel {
        text-align: center;
        margin-left: auto !important;
        margin-right: auto !important;
    }

</style>
