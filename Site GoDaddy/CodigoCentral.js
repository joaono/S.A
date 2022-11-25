let nomeCadastro = document.getElementById("inputNome")
let senhaCadastro = document.getElementById("inputSenha")

let nomeLogin = document.getElementById("loginNome")
let senhaLogin = document.getElementById("loginSenha")
let nomeLoginAdm = document.getElementById("loginNome")
let senhaLoginAdm = document.getElementById("loginSenha")

let nomePerfil = document.getElementById("nomeLogado")
let senhaPerfil = document.getElementById("senhaLogado")
let telefonePerfil = document.getElementById("telefoneLogado")
let gmailPerfil = document.getElementById("gmailLogado")
let imcPerfil = document.getElementById("imcValor")

let massa = document.getElementById("massa")
let altura = document.getElementById("altura")

let excluirUser = document.getElementById("excluirNome")
let procurarUser = document.getElementById("procurarNome")
let nomesUsers = document.getElementById("listarNomes")

let vetorUsers = []

function Cadastrar(){

    let usuario = {

        username: '',
        password: '',
        telefone: '',
        gmail: '',
        imc: ''

    }

    let cont = 0

        usuario.username = nomeCadastro.value
        usuario.password = senhaCadastro.value

        vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
     
    if(vetorUsers == null){

        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        
    }else{
       
    for(i=0; i<vetorUsers.length; i++){

        if(nomeCadastro.value != vetorUsers[i].username){

           console.log(cont)
           cont++

        }

    }

}

    if(cont != vetorUsers.length){

        alert("Usuário já cadastrado")
        vetorUsers.splice(nomeCadastro, 1)

    }else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("Cadastro realizado")

    }

    LimpaInputs()

}

function LimpaInputs(){
   
        nomeCadastro.value = ''
        senhaCadastro.value = ''

}

 function Logar(){

        vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i=0; i < vetorUsers.length;i++){

        if(nomeLogin.value == vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password){

            userLogado = nomeLogin.value
            localStorage.setItem('userLogado', JSON.stringify(userLogado))
            window.location.href = "TelaPerfilUser.html"

        }if(nomeLogin.value != vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password){

            document.getElementById('loginErro').innerHTML = 'Usuário não existe'

        }if(nomeLogin.value == vetorUsers[i].username && senhaLogin.value != vetorUsers[i].password){

            document.getElementById('loginErro').innerHTML = 'Senha Inválida'

        }

    }

    for(i=0; i < adm.legth; i++){

        if(nomeLoginAdm.value == adm[i].usuarioAdm  && senhaLoginAdm.value == adm[i].senhaAdm){

            userAdmLogado = nomeLoginAdm.value
            localStorage.setItem('userAdmLogado', JSON.stringify(userAdmLogado))
            window.location.href = "TelaPerfilAdm.html"

        }if(nomeLoginAdm.value != adm[i].usuarioAdm  && senhaLoginAdm.value == adm[i].senhaAdm){

            document.getElementById('loginErro').innerHTML = 'Adm não existe'

        }if(nomeLoginAdm.value == adm[i].usuarioAdm  && senhaLoginAdm.value != adm[i].senhaAdm){

            document.getElementById('loginErro').innerHTML = 'Senha Inválida'

        }

    }

}

function CarregarUser(){

        let pos

        vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
        userLogado = JSON.parse(localStorage.getItem('userLogado'))
        document.getElementById("Olar").innerHTML = `Seja bem-vindo, ${userLogado}.`
        nomePerfil.value = userLogado

        for(i=0; i < vetorUsers.length;i++){

            if(userLogado == vetorUsers[i].username){

                pos = i

            }

        }

        senhaPerfil.value = vetorUsers[pos].password
        telefonePerfil.value = vetorUsers[pos].telefone
        gmailPerfil.value = vetorUsers[pos].gmail

}

function EditarDados(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    userAdmLogado = JSON.parse(localStorage.getItem('usuarioAdmSalvo'))

    for(i=0; i < vetorUsers.length; i++){

        if(userLogado == vetorUsers[i].username){

            vetorUsers[i].telefone  = telefoneLogado.value
            vetorUsers[i].gmail = gmailLogado.value
            localStorage.setItem('userLogado', JSON.stringify(userLogado))
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("Dados Renovados")
            
        }

    }
    
}

function ExcluirUser(){

    posUsuario = vetorUsers.indexOf(excluirUser.value)

    if(posUsuario == -1){

        excluirUser.value = ''
        alert("Usuário não foi cadastrado")
        
    }else{

        vetorUsers.splice(posUsuario, 1)
        excluirUser.value = ''
        alert("Usuário excluido para sempre")

    }

}

function ProcurarUser(){
 
    for(i=0; i < vetorUsers[i].length; i++){

        if(nomeCadastro == vetorUsers[i].username){

            nome.value = vetorUsers[i].username
            senha.value = vetorUsers[i].password
            alert("Usuário possui conta")

        }else{

            alert("Usuário não possui conta")

        }

    }

}

function Users(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    alert(vetorUsers)

}

function calculaIMC(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    
    imc = (peso.value/(altura.value * altura.value)).toFixed(2)
    alert(`${imc}`)
    
    for(i=0; i < vetorUsers.length; i++){
    
    if(userLogado == vetorUsers[i].username){
    
            vetorUsers[i].imc = imc
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
    
    
        }
    
    }
       
}




