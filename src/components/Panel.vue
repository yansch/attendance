<template>
    <v-layout align-center justify-center row fill-height>
        <v-flex xs12 sm9 md7 lg5>
            <div class="panel white elevation-2 ma-5">
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
        name: 'Panel',
        props: [
            'title'
        ]
    }
</script>
