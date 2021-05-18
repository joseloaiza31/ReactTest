import React, { Component } from 'react'

export default class Texto extends Component {


render() {

    let msj
    if (this.props.texto) {
        // this.cambiaestado(tx)
        msj = <div>Hi</div>
    } else {
        //this.cambiaestado(tx)
        msj = <div>Bye</div>
    }

    return msj
}
}
