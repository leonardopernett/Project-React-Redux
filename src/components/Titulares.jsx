import React from 'react';
import {connect} from 'react-redux'
import cancha from '../cancha.svg'
const Titulares = ({titulares, quitarTitular})=>{
    return(
        <section>
            <h3>titulares</h3>
            <div className="cancha">
                {
                  titulares.map(titular =>(
                      <article className="titular" key={titular.id}>
                         <div>
                         <img src={titular.foto} width="100" alt=""/>
                          <button onClick={()=>quitarTitular(titular)}>x</button>
                         </div>
                         <p>{titular.nombre}</p>
                      </article>
                  ))
                }
                <img src={cancha} alt=""/>
            </div>
        </section>
    )
}


const mapStateToProps = (state)=>({
     titulares:state.titulares
})

const mapDispatchToProps = dispatch =>({
    quitarTitular(titular){
         dispatch({
              type:"QUITAR_TITULAR",
              titular
         })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares) ;