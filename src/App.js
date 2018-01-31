import React, { Component } from 'react';
import './App.css';
import Houses from './components/Houses';

class App extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			characters: [],
			almacen:''
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
		const variableParaFiltrarLuego= this.state.characters.filter((personajeFiltrado)=> {
			return personajeFiltrado.name.toLowerCase().includes(this.state.almacen);
		})
		return variableParaFiltrarLuego.map((personaje)=>{
			return <div className="characterBox"><li className="characters">
			<h3>{ personaje.name }</h3>
			<div className="imgBox">
			<img className="imagen" src={ personaje.image } /> </div>
			<div className="iconLife">
			<div className={`icons house_${personaje.house.toLowerCase()}`}></div>
			<div  className={`icons state_${personaje.alive? 'vivo':'muerto'.toLowerCase()}`}> </div>
			</div>
			</li></div>;
		});
	};

	handleChange (event) {
		const valorRecogido = event.target.value

 		this.setState ({
	 almacen: valorRecogido.toLowerCase()

 })

};

	render() {
		 console.log(this.state.almacen)
		return (
			<div className="todo">
					<header className="App-header">

					</header>
					<main className="container">
						<div className="input">
							<input onChange={this.handleChange} placeholder="Escribe tu personaje favorito"/>
						</div>
						<div className="AllCharactersBox">
						<ul className="personajes">
									{this.paintCharacters()}
						</ul>
						<Houses />
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
