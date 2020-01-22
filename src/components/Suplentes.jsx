import React from 'react';
import {connect} from 'react-redux';

const Suplentes = ({suplentes, quitarSuplente})=>{
    return(
        <section>
            <h3>Suplentes</h3>
            {
                suplentes.map(suplente =>{
                  return  <article className="suplentes" key={suplente.id}>
                    <div>
                        <img src={suplente.foto} width="100" alt=""/>
                        <button onClick={()=>quitarSuplente(suplente)}>x</button>
                    </div>
                     <p>{suplente.nombre}</p>
                 </article>
                })
            }
        </section>
    )
}

const mapStateToProps = state =>{
     return {
         suplentes:state.suplentes
     }
}

const mapDispatchToProps = dispatch =>{
    return {
        quitarSuplente(suplente){
           dispatch({
               type:'QUITAR_SUPLENTES',
               suplente
           })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)