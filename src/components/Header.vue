<template>
    <nav>
        <v-navigation-drawer v-if="$store.state.isLoggedIn" v-model="drawer" app>

        </v-navigation-drawer>
        <v-app-bar app fixed dark color="primary">
            <v-app-bar-nav-icon v-if="$store.state.isUserLoggedIn" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/">
                <v-toolbar-title class="white--text">Attendance</v-toolbar-title>
            </router-link>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn text to="login" v-if="!$store.state.isUserLoggedIn">Anmelden</v-btn>
                <v-menu v-else>
                    <v-btn text slot="activator">{{ $store.state.user.name }}
                        <v-icon class="ml-2">person</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile to="account">Account</v-list-tile>
                        <v-list-tile @click="logout">Abmelden</v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                drawer: true,
                items: [{
                    path: 'dashboard',
                    name: 'Dashboard'
                }, {
                    path: 'timetable',
                    name: 'Zeitplan'
                }, {
                    path: 'account',
                    name: 'Account'
                }]
            }
        }
    }
</script>