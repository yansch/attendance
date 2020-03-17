<template>
    <div id="app">
        <v-app>
            <page-header/>
            <main>
                <v-content>
                    <v-container pa-0 px-0 fluid>
                        <transition name="slide-fade" mode="out-in">
                            <router-view/>
                        </transition>
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


<style scoped>

    .slide-fade-enter-active {
        transition: all .08s ease-in;
    }
    .slide-fade-leave-active {
        transition: all .08s ease-out;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }

</style>