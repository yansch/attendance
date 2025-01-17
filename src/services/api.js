import Vue from 'vue'

export const LoginService = {
    login(auth) {
        return Vue.axios.post('login', auth)
    }
};

export const StatusService = {
    get() {
        return Vue.axios.get('/status')
    },
    set(status) {
        return Vue.axios.post('/status', status)
    }
};

export const DashboardService = {
    get() {
        return Vue.axios.get('/dashboard')
    }
};

export const LocationService = {
    all() {
        return Vue.axios.get('/location/all')
    },
    create(location) {
        return Vue.axios.post('/location', location)
    },
    delete(id) {
        return Vue.axios.delete(`/location/${id}`)
    }
};

export const EmployeeService = {
    allUnassigned() {
        return Vue.axios.get('/employee/noDepartment')
    },
    create(employee) {
        return Vue.axios.post('/employee', employee)
    },
    delete(id) {
        return Vue.axios.delete(`/employee/${id}`)
    }
};

export const DepartmentService = {
    create(department) {
        return Vue.axios.post('/department', department)
    },
    update(department) {
        return Vue.axios.put('/department', department)
    },
    delete(id) {
        return Vue.axios.delete(`/department/${id}`)
    }
};
