import React from "react"

const Equipe = (props) =>{
    return(
        <div>
            <h1>Área: {props.nome}</h1>
            <hr/>
            <Membro nome="Carlos" cargo="Front-End Junior" idade="20"/>
            <hr/>
            <Membro nome="Amanda" cargo="Fullstack pleno" idade="27"/>
            <hr/>
            <Membro nome="Felipe" cargo="Back-End Junior" idade="22"/>
            <hr/>
            <Membro nome="Mauricio" cargo="Analista de dados" idade="30"/>
            <hr/>
        </div>
    )
}

const Membro = (props) =>{
    return(
        <div>
            <h3>Funcionário:{props.nome}</h3>
            <h3>Cargo:{props.cargo}</h3>
            <h3>idade:{props.idade}</h3>      
        </div>
    )
}

export default function App() {
    return ( 
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Tecnologia"/>
        </div>
    )
}