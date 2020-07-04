let customers =
    {
        'Cust123': {
            'profileDetails': {
                'name': 'Satvinder',
                'age': 28,
                'gender': 'Male',
                'level': 'Gold'
            },
            'address': {
                'street': 'Street #1',
                'state': 'TX',
                'pin': 12345
            },
            'contactDetails': {
                'mobile': '123-456-7890',
                'email': 'panesar.satvindersingh@gmail.com'
            },
            'orders': [
                {
                    'orderId': 'ORD123',
                    'datePlaced': '07/02/2020',
                    'status': 'Delivered'
                }
                ,{
                    'orderId': 'ORD456',
                    'datePlaced': '07/03/2020',
                    'status': 'Shipped'
                }
            ]
        },
    'Cust456': {
        'profileDetails': {
            'name': 'Singh',
            'age': 26,
            'gender': 'Male',
            'level': 'Silver'
        },
        'address': {
            'street': 'Street #2',
            'state': 'TX',
            'pin': 12345
        },
        'contactDetails': {
            'mobile': '123-456-7891',
            'email': 'panesar.abc@gmail.com'
        },
        'orders': [
            {
                'orderId': 'ORD789',
                'datePlaced': '07/02/2020',
                'status': 'Delivered'
            }
            ,{
                'orderId': 'ORD012',
                'datePlaced': '07/03/2020',
                'status': 'Shipped'
            }
        ]
    }
}

module.exports.getCustomer = function(id){
    return customers[id]
}

module.exports.getAllCustomers = function(){
    return customers
}