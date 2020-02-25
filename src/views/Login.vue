<template>
    <panel title="Anmelden">
        <form @submit.prevent="login">
            <v-text-field append-icon="person" type="email" label="Email" v-model="email"/>
            <v-text-field append-icon="lock" type="password" label="Passwort" v-model="password"/>
            <v-btn color="primary white--text" type="submit">Anmelden</v-btn>
        </form>
        <v-alert outlined transition="scale-transition" icon=" " :value="error" type="error">{{ error }}</v-alert>
    </panel>
</template>
<script>

    import Panel from '../components/Panel';

    export default {
        name: 'Login',
        components: {Panel},
        data() {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {token: 'test123', user: {name: 'Test', email: this.email}});
                this.$router.push('dashboard')
            }
        }
    }

</script>

<style scoped>

    form {
        text-align: center;
    }

</style>