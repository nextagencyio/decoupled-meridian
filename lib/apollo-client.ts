import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const drupalUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: drupalUrl ? `${drupalUrl}/graphql` : '/api/graphql',
      credentials: 'same-origin',
      // Let Next.js cache GraphQL responses; cleared by revalidatePath on node save
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            nodeByPath: {
              keyArgs: ['path'],
            },
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  })
}

let apolloClient: ApolloClient<any> | undefined

export function getApolloClient() {
  // On the server, always create a fresh client to avoid stale in-memory cache
  if (typeof window === 'undefined') return createApolloClient()

  // On the client, reuse the singleton
  if (!apolloClient) apolloClient = createApolloClient()
  return apolloClient
}
