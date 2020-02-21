<template>
    <div id="app">
        <v-app>
            <page-header/>
            <main>
                <router-view/>
            </main>
        </v-app>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import PageHeader from './components/Header';

    export default {
        name: 'App',
        components: {
            PageHeader,
            HelloWorld,
        }
    };
</script>
