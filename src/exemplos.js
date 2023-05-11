

                                // setStates


import {useState} from "react";  // importando o hook useState

function App() {   // const [] = useState();

    const [aluno, setAluno] = useState('Filipe');

    function mudarNome(nome){

        setAluno(nome);    //   A FUNCAO setAluno ESTA MUDANDO O NOME

    }

    return (
        <div>

            <h1>Ola mundo</h1>

            <h2>Ola: {aluno}</h2>  {/*<!-- AQUI ESTA RECEBENDO A VARIAVEL DE DENTRO DO setAluno -->*/}

            <button onClick={ () => mudarNome("Giulia") }>
                Mudar nome:
            </button>


            {/*<Nome aluno="Filipe" idade={33}/>*/}

        </div>
    );
}

export default App;


////////////////////////////////////////////////////////////////////////////////////////////////