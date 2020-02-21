<template>
    <panel title="Anmelden">
        <form @submit.prevent="login">
            <v-text-field type="email" label="Email" v-model="email"/>
            <v-text-field type="password" label="Passwort" v-model="password"/>
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
                this.$store.dispatch('login', {token: 'test123', user: {name: 'Jan', email: 'test'}})
            }
        }
    }

</script>

<style scoped>

</style>