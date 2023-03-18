import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="search-training-courses">
          <ChakraProvider>
            <GlobalStyle />

            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
