const customers = require('./customers.data')

const root = {
    customers: () => {
        let temp = []
        const obj = customers.getAllCustomers()
        Object.keys(obj).map(key=>temp.push(obj[key]))
        return temp
    },
    customer: ({id}) => {
        return customers.getCustomer(id)
    }
  };

exports.default = root