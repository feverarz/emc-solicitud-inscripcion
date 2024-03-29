import './App.css';
import { Formulario } from './componentes/layout/Formulario'
import Logo from '../src/componentes/shared/Logo'
import { FormularioContextProvider } from './contextos/FormularioContext'
import theme from './themeConfig'
import { ThemeProvider } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header style={{backgroundColor:'#ffffff',color:'white',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <Logo width="250"/>
      </header>
        <ThemeProvider theme={theme} >
            <FormularioContextProvider>
                <Formulario/>
            </FormularioContextProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
