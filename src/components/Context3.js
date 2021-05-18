import React, { Component } from 'react'
import {UserConsumer} from './Contexto'

export default class Context3 extends Component {
    render() {
        return (
            <div>
                <UserConsumer>                
                {
                    (txt) => {
                        return <div>Tercer Componente {txt} </div>
                    }
                }
                </UserConsumer>
            </div>
        )
    }
}


