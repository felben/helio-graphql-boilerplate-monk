import { makeExecutableSchema } from 'graphql-tools'

// Our merged resolvers
import resolvers from './resolvers'

// Mutations
import VersionMutations from './graph/version/mutations'

// Queries
import VersionQueries from './graph/version/queries'

// Types
import VersionTypes from './graph/version/types'

const Root = `
  type Query {
    ${VersionQueries}
  }
  
  type Mutation {
    ${VersionMutations}
  }
`

export default makeExecutableSchema({
  typeDefs: [
    Root,
    VersionTypes
  ],
  resolvers
})
