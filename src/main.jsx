import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Importation du Provider de Redux
import { SidebarProvider } from './context/sidebarContext.jsx';
import store from './redux/store'; // Importation de votre store Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Fournit le store Redux */}
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </Provider>
);
