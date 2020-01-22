import React, {Fragment} from 'react';
import {connect } from 'react-redux'


const Juagdores = ({jugadores, agregarTitular, agregarSuplente}) =>{
    
   return (
      <Fragment>
          <h3>Juagdores</h3>
          <div className="contenedor">
              {
                  jugadores.map(jugador =>(
                    <article className="jugador" key={jugador.id}>
                    <img src={jugador.foto} alt="" width="100" />
                    <h3>{jugador.nombre}</h3>
                    <div>
                        <button onClick={()=>agregarTitular(jugador)} className="success">
                           titular
                        </button>
                        <button onClick={()=>agregarSuplente(jugador)} className="info">
                           suplente
                        </button>
                        <br/> <br/> <br/>
                    </div>
                </article>
                   
                  ))
              }
            
          </div>
      </Fragment>
   )

}

const mapStateToProps = state =>{
   return {
       jugadores: state.jugadores
   }
}

const mapDispatchToProps = dispatch =>({
    agregarTitular(jugador){
        dispatch({
            type:'AGREGAR_TITULAR',
            jugador
        })
    },


    agregarSuplente(jugador){
        dispatch({
            type:"AGREGAR_SUPLENTES",
            jugador
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Juagdores);