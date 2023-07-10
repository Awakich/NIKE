import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import Layout from './shared/Layout/Layout.tsx'
import store from './entities/store.ts'
import './app/index.scss'

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_URL}/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </GoogleOAuthProvider>

)
