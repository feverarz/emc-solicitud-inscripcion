import logo from './logo.svg';
import './App.css';
import {Formulario} from './componentes/Formulario'
import Logo from '../src/componentes/Logo'
import {FormularioContextProvider} from './contextos/FormularioContext'
import theme from './themeConfig'
import {ThemeProvider} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header style={{backgroundColor:'rgb(25, 118, 210)',color:'white'}}>
        <Logo width="250"/>
        <ThemeProvider theme={theme} >
            <FormularioContextProvider>
                <Formulario/>
            </FormularioContextProvider>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
