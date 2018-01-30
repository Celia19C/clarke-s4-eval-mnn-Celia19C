import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			characters: []
		}
	}
	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
				characters: json
			});
		});
	}
	paintCharacters () {
		return this.state.characters.map(function(personaje){
			return <li> <p>{ personaje.name }</p> <p>{ personaje.house }</p><p>
			{personaje.alive? 'Está vivo' : 'Está muerto'}</p> <img className="imagen" src={ personaje.image } />
			</li>;
		});
	};

	handleChange () {
		const valorRecogido = event.target.value;
			return this.state.characters.filter(function(personaje){
				return  personaje.name.includes(valor.recogido)
			});
			console.log(valorRecogido)
		};
	// 	const filtrar = (event) => {
	// 		const valorRecogido = event.target.value;
	// 		if (this.state.characters.name.includes(valorRecogido)){
	// 			console.log('buscarr')
	// 		}
	// }

		// const list= [];
		// for (const character of this.state.characters){
		// 	list.push (<li> <p>{ character.name }</p><img src={ character.image } /></li>);
		//
		// }
		// return list;

  render() {
    return (
      <div className="todo">
				<header className="App-header">
					<h1 className="titulo">My Harry Potter Characters</h1>
				</header>
				<main>
				<input onChange={this.handleChange} className="input"/>
				<ul> {this.paintCharacters()}

				</ul>
				</main>
      </div>
    );
  }
}

export default App;


// <header className="App-header">
// 	<img src={logo} className="App-logo" alt="logo" />
// 	<h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
// 	To get started, edit <code>src/App.js</code> and save to reload.
// </p>
