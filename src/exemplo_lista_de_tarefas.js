import {useState} from "react";  // importando o hook useState
import "./style.css";

function App(){

    const [input, setInput]    = useState(""); // string vazia

    const [tarefas, setTarefas]  = useState([
        "Pagar a conta de Luz",
        "Estudar React"
    ]);


    // REGISTRO
    function registro(event){
        event.preventDefault();

        setTarefas([...tarefas, input])  // PEGO AS TAREFAS E ACRESCENTO MAIS O QUE ESTA NO INPUT
        setInput("");
    }

    return(

        <div>
            <h1>LISTA DE TAREFAS</h1><hr/>
            <br/><br/>

            <form onSubmit={registro}>  {/* QNDO CLIQUER EM REGISRAR CAHAMA A FUNCAO REGISTRO */}

                <label>Nome da Tarefa</label><br/>
                <input
                    placeholder={"Digite sua Tarefa"}
                    value={input}
                    onChange={ (event) => setInput(event.target.value)}
                />

                <br/><br/>

                <button type={"submit"} id={"btn"}>REGISTRAR</button>

            </form>

            {/*// tarefa.map() vai percorrer toda a lista  */}
            <ul>
                {tarefas.map(tarefa => (

                    <li key={tarefa}>{tarefa}</li>

                ))}
            </ul>

        </div>

    )
}

export default App;