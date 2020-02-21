<template>
    <nav>
        <v-navigation-drawer app v-if="$store.state.isLoggedIn" v-model="drawer">
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon color="primary">mood</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $store.state.user.name }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ $store.state.user.email }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider/>
            <v-list>
                <v-list-tile active-class="accent--text" v-for="item in items" :key="item.name" :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon || item.path }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
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