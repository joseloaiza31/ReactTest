import logo from './logo.svg';
import './App.css';
import {tasks} from './tasks.json';
import React from 'react';
import Form from './components/Form';
import Boton from './components/Boton';
import Test from './components/Test';
import Context from './components/Context';
import {UserProvider} from './components/Contexto';


class App extends React.Component{

  constructor(){
  super();
  this.state = {
    tareas : tasks,
    word : "Primario"
  };
  
  this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(tarea){
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  handleRemove(index){
    this.setState({
      tareas : this.state.tareas.filter((e, i) => {
        return i !== index
      })
    })
  }

  render(){
    const wo = this.state.word
    const tar = this.state.tareas.map((tarea, e) => { 

      return(
      <div key={tarea.name} className="col-md-4">
        <div className="card mt-4">
          <div className = "card-header">
            <h3>{tarea.title}</h3>
            <span className=" badge rounded-pill bg-success ml-2">
              {tarea.pri}
            </span>
          </div>
          <div className = "card-body">
            <h5>{tarea.des}</h5>
            <p><mark>{tarea.name}</mark></p>
          </div>
          <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemove.bind(this, e)}>
                 Eliminar
              </button>
          </div>
        </div>
</div>
      )
    }
    ) 
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tareas
          </a>
          <span className="badge rounded-pill bg-success">
              {this.state.tareas.length}
          </span>
        </nav>

        <div className="container">
          <div className="row mt-4">
          <div className="col-md-3">
          <img src={logo} className="App-logo" alt="logo" />
            <Form onAdd={this.handleAdd}/>
          </div>

          <div className="col-md-9">
            <div className="row">
            {tar}
            </div>
          </div>
         </div>
         <br></br>
         <Boton mul={25}/>
         <Boton mul={16}/>
        </div>
        <br></br>
        <Test/>
        <UserProvider value = {wo}>
        <Context/>
        </UserProvider>
        <br></br>
    </div>
  );
}
}

export default App;
