import {useState} from "react";  // importando o hook useState
import "./style.css";

function App(){

    const inputNome = "Digite seu nome: "

    function acao(){
        //alert("alerta button");
    }

    const [nome, setNome]   = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");

    // CRIANDO UM OBJETO COM useState  ---  TAMEBM PODEMOS CRIAR ARRAY - const [usuarios, setUsuarios] = {[]};

    const [user, setUser]   = useState({}); // objeto começa vazio  // ESSE É O VALOR QUE QUERO QUE COMECE


    function registro(event){

        event.preventDefault();


        // PASSANDO PARA O useState o objeto para ser recuperado na DIV pelo inpuut

        setUser({
            nome: nome,
            idade: idade,
            email: email
        })

        alert("Usuário cadastrado com sucesso!");

        alert("Nome: " + nome +   " - Idade: " + idade + " - Email: " + email);

    }

    return(
        <div>
            <h1>Cadastrando Usuário</h1><hr/>
            <br/><br/>

     {/* <!-- O formulario tem uma acao e ela chama um evento/uma funcao-->*!/*/}
            <form onSubmit={registro}>


                <label>Nome</label><br/>
                <input

                    // propriedades obrigatorias
                    placeholder={inputNome}

                    value={nome}   // value e onChange estao atrelados ao useState

                    onChange={ (event) => setNome(event.target.value)}
                    // onChange serve para pegar a informação dentro do input e colocar na variavel


                />

                <br/><br/>

                <label>Idade</label><br/>
                <input

                    placeholder="Digite Sua Idade"
                    value={idade}
                    onChange={ (event) =>  setIdade(event.target.value)}
                />

                <br/><br/>

                <label>E-mail</label><br/>
                <input

                    placeholder="Digite Seu Email"
                    value={email}
                    onChange={ (event) => setEmail(event.target.value) }
                />

                <br/><br/>


                <button type={"submit"} onClick={acao} id={"btn"}>Regsitrar</button>

            </form>

            <div id={"returneForm"}>
                <span>Bem Vindo: {user.nome}</span><br/>
                <span>Idade: {user.idade}</span><br/>
                <span>Email: {user.email}</span><br/>
            </div>

        </div>
    )
}

export default App;