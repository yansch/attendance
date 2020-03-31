export default {
    data() {
        return {
            error: null
        }
    },
    methods: {
        handleError(e) {
            this.error = e.response.data.error || e;
            setTimeout(() => {
                this.error = null;
            }, 6000) //reset error after snackbar has auto-closed
        }
    }
};