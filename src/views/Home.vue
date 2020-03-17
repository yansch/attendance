<template>
    <v-parallax src="https://source.unsplash.com/5fNmWej4tAA/3840x2160" height="600">
        <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 text-xs-center"
                style="font-weight: 900; text-shadow: 3px 2px #000000">Attendance</h1>
            <div class="white--text subheading mb-3 text-xs-center"
                 style="font-weight: 900; text-shadow: 2px 2px #000000">
            </div>
            <router-link to="/login">
                <v-btn class="blue lighten-2 mt-5" dark large>
                    Anmelden
                </v-btn>
            </router-link>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>