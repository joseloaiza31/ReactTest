import React, { Component } from 'react'
import Context2 from './Context2'
import { UserProvider } from './Contexto'
export default class Context extends Component {
    render() {
        return (
            <div>
                Primer Componente             
                <Context2/>               
            </div>
        )
    }
}
