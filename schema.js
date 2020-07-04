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
      staus: String
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
  type Query {
      customers: [Customer]
      customer(id: String): Customer
  }
`)

exports.default = schema