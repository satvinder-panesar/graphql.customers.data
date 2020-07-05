## Run
```
node server.js
```

## Queries
```
query{
  customers{
    orders{
      orderId
      status
    }
  }
}

query{
  customer(id: "Cust123"){
    orders{
      orderId
      status
    }
  }
}
```

## Mutation
```
mutation{
  updateOrderStatus(input: {
    userId: "Cust123",
    orderId: "ORD456",
    orderStatus: "Cancelled"
  }){
    message
  }
}
```
