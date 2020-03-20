import Vue from 'vue'

export const LocationService = {
    all() {
        return Vue.axios.get('/location/all')
    },
    create(location) {
        return Vue.axios.post('/location', location)
    }
};

export const EmployeeService = {
    delete(id) {
        return Vue.axios.delete(`/employee/${id}`)
    }
};
