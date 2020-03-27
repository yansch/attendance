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
    }
};
