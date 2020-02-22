<template>
    <nav>
        <v-navigation-drawer app v-if="$store.getters.isLoggedIn" v-model="drawer">
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon color="black">face</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ $store.getters.user.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ $store.getters.user.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider/>
            <v-list>
                <v-list-item active-class="accent--text" v-for="item in items" :key="item.name" :to="item.path">
                    <v-list-item-action>
                        <v-icon>{{ item.icon || item.path }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app fixed dark color="primary">
            <v-app-bar-nav-icon v-if="$store.getters.isLoggedIn" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/">
                <v-toolbar-title class="white--text">Attendance</v-toolbar-title>
            </router-link>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn text to="login" v-if="!$store.getters.isLoggedIn">Anmelden</v-btn>
                <v-menu v-else>
                    <v-btn text slot="activator">{{ $store.getters.user.name }}
                        <v-icon class="ml-2">person</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-item to="account">Account</v-list-item>
                        <v-list-item @click="logout">Abmelden</v-list-item>
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
                    name: 'Zeitplan',
                    icon: 'schedule'
                }, {
                    path: 'management',
                    name: 'Management',
                    icon: 'account_balance'
                }]
            }
        }
    }
</script>