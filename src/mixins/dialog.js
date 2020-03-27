export const dialog = {
    data() {
        return {
            active: false
        }
    },
    methods: {
        close() {
            this.active = false;
        }
    }
};