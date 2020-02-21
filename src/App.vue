<template>
    <div id="app">
        <v-app>
            <page-header/>
            <main>
                <v-content>
                    <v-container mt-5 pt-2 px-0 fluid>
                        <router-view/>
                    </v-container>
                </v-content>
            </main>
        </v-app>
    </div>
</template>

<script>
    import PageHeader from './components/Header';

    export default {
        name: 'App',
        components: {
            PageHeader
        }
    };
</script>
