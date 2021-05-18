import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
          title: '',
          name:'',
          des:'',
          pri:'Baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        
    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state);
        }
    

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"/>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <input type="text" name="name" onChange={this.handleInput} className="form-control" placeholder="Name"/>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <input type="text" name="des" onChange={this.handleInput} className="form-control" placeholder="Descripcion"/>
                        <br></br>
                    </div>


                    <div className="form-group">
                        <select name="pri" className="form-control" onChange={this.handleInput}>
                            <option>Bajo</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                        <br></br>
                    </div>

                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
                
            </div>
        )
    }

}
