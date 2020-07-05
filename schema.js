const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type ContactDetails {
      mobile: String
      email: String
  }
  type Address {
      street: String
      state: String
      pin: Int
  }
  type Order {
      orderId: String
      datePlaced: String
      status: String
  }
  type ProfileDetails {
      name: String
      age: Int
      gender: String
      level: String
  }
  type Customer {
      profileDetails: ProfileDetails
      address: Address
      contactDetails: ContactDetails
      orders: [Order]
  }
  input UpdateOrderStatus {
      userId: String
      orderId: String
      orderStatus: String
  }
  type Response {
      status: Int
      message: String
  }
  type Query {
      customers: [Customer]
      customer(id: String): Customer
  }
  type Mutation {
      updateOrderStatus(input: UpdateOrderStatus): Response
  }
`)

exports.default = schema