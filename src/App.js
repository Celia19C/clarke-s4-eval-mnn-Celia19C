import React, { Component } from 'react';
import './App.css';



class App extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			characters: [],
			filtro: []
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
			return <div className="characterBox"><li className="characters">
			<h3>{ personaje.name }</h3>
			<img className="imagen" src={ personaje.image } />
			<p>{ personaje.house }</p>
			<p>{personaje.alive? 'Está vivo' : 'Está muerto'}</p>

			</li></div>;
		});
	};

	handleChange (event) {
		let valorRecogido = event.target.value
		let filtro = this.state.characters.filter(function(persona){
			return this.state.characters.includes(persona)
			console.log(filtro)
	})
	this.setState({
		characters: filtro
	});

};

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

					</header>
					<main className="container">
						<h3 className="textOutInput"> Encuentra tu personaje favorito </h3>
						<div className="input">
							<input onChange={this.handleChange} />
						</div>
						<div className="AllCharactersBox">
						<ul className="personajes">
									{this.paintCharacters()}
						</ul>
						</div>
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
