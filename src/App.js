import React, {Component} from "react"
import manga from "./assets/manga.png"


class Pract extends Component{
  state = {
    nome: "Isabella",
    idade: 23,
    comida: "Macarrão com carne moída",
    musica: ["Bridges", "Passarinhos", "Burn the House Down"]
  }

  render(){
    return(
    <div>
      <h1>{this.state.nome}</h1>
      <h2>{this.state.idade}</h2>
      <h3>{this.state.comida}</h3>
      <ul>
        <li>{this.state.musica[0]}</li>
        <li>{this.state.musica[1]}</li>
        <li>{this.state.musica[2]}</li>
      </ul>
      <img src={manga}/>
    </div>)
  }
}

export default Pract