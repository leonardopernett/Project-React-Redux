import React  from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Jugadores from './components/Jugadores';
import EquipoSeleccionadp from './components/EquipoSeleccionado'
import './style/styles.scss';

const App = ()=>{
   return (
     <Provider store={store}>
       <h1>Ed Manager</h1>
        <Jugadores />
        <EquipoSeleccionadp/>
     </Provider>  
   )
}

export default App
