<template>
    <panel title="Anmelden">
        <form @submit.prevent="login">
            <v-text-field append-icon="person" type="email" label="Email" v-model="email"/>
            <v-text-field append-icon="lock" type="password" label="Passwort" v-model="password"/>
            <v-btn :loading="loading" color="primary white--text" type="submit">Anmelden</v-btn>
        </form>
        <error-snackbar :error="error"/>
    </panel>
</template>
<script>

    import Panel from '../components/Panel';
    import {LoginService} from '../services/api';
    import ErrorSnackbar from '../components/snackbars/ErrorSnackbar';
    import error from '../mixins/error.js'

    export default {
        name: 'Login',
        components: {ErrorSnackbar, Panel},
        mixins: [error],
        data() {
            return {
                email: '',
                password: '',
                loading: false,
                error: null
            }
        },
        methods: {
            login() {
                this.loading = true;
                LoginService.login({email: this.email, password: this.password})
                    .then(response => {
                        const data = response.data;
                        this.$store.dispatch('login', {
                            token: data.token,
                            user: {
                                firstName: data.firstname,
                                lastName: data.lastname,
                                email: data.email,
                                department: data.department,
                                location: data.location,
                                permissionLvl: data.permissionLvl
                            }
                        });
                        this.$router.push('dashboard');
                    })
                    .catch(e => {
                        this.handleError(e);
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            }
        }
    }

</script>

<style scoped>

    form {
        text-align: center;
    }

</style>