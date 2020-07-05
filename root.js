const customers = require('./customer.data.service')

const root = {
    customers: () => {
        let temp = []
        const obj = customers.getAllCustomers()
        Object.keys(obj).map(key=>temp.push(obj[key]))
        return temp
    },
    customer: ({id}) => {
        return customers.getCustomer(id)
    },
    updateOrderStatus: ({input}) => {
        return customers.updateOrderStatus(input.userId, input.orderId, input.orderStatus)
    }
  };

exports.default = root