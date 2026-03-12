import './App.css'; // Archivo de estilos CSS
import {ThemeProvider} from './themes/ThemeContext.jsx';
import RoutesApp from './routes/RoutesApp.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <RoutesApp/>
    </ThemeProvider>
  );
};

export default App;
