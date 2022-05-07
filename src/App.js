import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import FreeCodeCamp_logo from './imagenes/FreeCodeCamp_logo.png'
// import React, { useState } from 'react';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render(){
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
            {/* <img className='freecodecamp-logo'
            src={FreeCodeCamp_logo}
            alt='logo freecodecamp'/> */}
        </div>
        <div className='contenedor-principal'>
            <Contador numClics={this.state.numClics} />
            <Boton
            texto='Click'
            esBotonDeClic={true}
            manejarClic={this.manejarClic}
            />
            <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.state.reiniciarContador}
            />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClics, setNumClics] = useState(0);

//   const manejarClic = () => {
//       console.log('clic');
//       setNumClics(numClics + 1);
//   }

//   const reiniciarContador = () => {
//     console.log('reinicio')
//     setNumClics(0);
//   }

//   return (
//     <div className='App'>
//       <div className='freecodecamp-logo-contenedor'>
//           {/* <img className='freecodecamp-logo'
//           src={FreeCodeCamp_logo}
//           alt='logo freecodecamp'/> */}
//       </div>
//       <div className='contenedor-principal'>
//           <Contador numClics={numClics} />
//           <Boton
//           texto='Click'
//           esBotonDeClic={true}
//           manejarClic={manejarClic}
//           />
//           <Boton
//           texto='Reiniciar'
//           esBotonDeClic={false}
//           manejarClic={reiniciarContador}
//           />
//       </div>
//     </div>
//   );
// }

export default App;
