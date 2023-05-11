import {useState} from "react";  // importando o hook useState
import "./style.css";

function App(){

    const inputNome = "Digite seu nome: "
    function acao(){
        alert("alerta");
    }

    const [nome, setNome]   = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState(0);

    return(
        <div>
            <h1>Cadastrando Usuário</h1><hr/>

            <form onSubmit={}>

                <label>Nome</label><br/>
                <input

                    // propriedades obrigatorias
                    placeholder={inputNome}
                    value={nome}
                    onChange={ (event) => setNome(event.target.value)}
                    // onChange serve para pegar a informação dentro do input e colocar na variavel


                />

                <br/><br/>

                <label>E-mail</label><br/>
                <input
                    placeholder="Digite Seu Email"
                    value={email}
                    onChange={ (event) => setEmail(event.target.value) }
                />

                <br/><br/>

                <label>Idade</label><br/>
                <input
                    placeholder="Digite Sua Idade"
                    value={idade}
                    onChange={ (event) =>  setIdade(event.target.value)}
                />

                <br/><br/>

                <button type={"submit"} onClick={acao} id={"btn"}>Regsitrar</button>

            </form>

            <br/><br/>

            <div>
                <span>Bem Vindo: Filipe</span><br/>
                <span>Idade: 33</span><br/>
                <span>Email: teste@teste.com</span><br/>
            </div>

        </div>
    )
}

export default App;