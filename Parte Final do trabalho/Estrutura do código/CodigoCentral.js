let nomeCadastro = document.getElementById("inputNome")
let senhaCadastro = document.getElementById("inputSenha")

let nomeLogin = document.getElementById("loginNome")
let senhaLogin = document.getElementById("loginSenha")
let nomeLoginAdm = document.getElementById("loginNome")
let senhaLoginAdm = document.getElementById("loginSenha")

let nomePerfil = document.getElementById("nomeLogado")
let senhaPerfil = document.getElementById("senhaLogado")
let telefonePerfil = document.getElementById("telefoneLogado")
let emailPerfil = document.getElementById("emailLogado")
let imcPerfil = document.getElementById("imcValor")

let massa = document.getElementById("massa")
let altura = document.getElementById("altura")

let excluirUser = document.getElementById("excluirNome")
let procurarUser = document.getElementById("procurarNome")
let nomesUsers = document.getElementById("listarNomes")

let vetorUsers = []
let adm = {

    usernameAdm: 'jobson',
    passwordAdm: '1234',

}

function Cadastrar(){

    let usuario = {

        username: '',
        password: '',
        telefone: '',
        email: '',
        imc: ''

    }

    let cont = 0

        usuario.username = nomeCadastro.value
        usuario.password = senhaCadastro.value

        vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
        adm = JSON.parse(localStorage.getItem('admSalvo'))
   
    if(vetorUsers == null){

        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        window.location.href = "TelaLogin.html"
        
    }else{
       
    for(i=0; i<vetorUsers.length; i++){

        if(nomeCadastro.value != vetorUsers[i].username){

           console.log(cont)
           cont++

        }

    }

}

    if(cont != vetorUsers.length){

        vetorUsers.splice(nomeCadastro, 1)
        document.getElementById('erro').innerHTML = "Nome de usuario ja cadastrado"

    }else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        window.location.href = "TelaLogin.html"

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

        }if(nomeLogin.value != vetorUsers[i].username && senhaLogin.value != vetorUsers[i].password){

            document.getElementById('erro').innerHTML = 'Senha ou usuário estão incorretos'

        }

    }

    for(i=0; i < adm.legth; i++){

        if(nomeLoginAdm.value == adm[i].usuarioAdm  && senhaLoginAdm.value == adm[i].senhaAdm){

            userAdmLogado = nomeLoginAdm.value
            localStorage.setItem('userAdmLogado', JSON.stringify(userAdmLogado))
            window.location.href = "TelaPerfilAdm.html"

        }

    }

}

function CarregarUser(){

        let pos

        vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
        userLogado = JSON.parse(localStorage.getItem('userLogado'))

        nomeLogado.value = userLogado

        for(i=0; i < vetorUsers.length;i++){

            if(userLogado == vetorUsers[i].username){

                pos = i

            }

        }

        senhaPerfil.value = vetorUsers[pos].password
        telefonePerfil.value = vetorUsers[pos].telefone
        emailPerfil.value = vetorUsers[pos].email
        imcPerfil.value = vetorUsers[pos].imc

}

function EditarDados(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i=0; i < vetorUsers.length; i++){

        if(userLogado == vetorUsers[i].username){

            vetorUsers[i].telefone  = telefoneLogado.value
            vetorUsers[i].email = emailLogado.value
            vetorUsers[i].imc = imcPerfil.value
            localStorage.setItem('userLogado', JSON.stringify(userLogado))
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            
        }

    }
    
}

function CarregarAdm(){

    adm = JSON.parse(localStorage.getItem('usuarioAdmSalvo'))
    userAdmLogado = JSON.parse(localStorage.getItem('userAdmLogado'))
    document.getElementById("Olar").innerHTML = `Seja bem-vindo, ${userAmdLogado}.`

        excluirUser()
        mostrarUser()
        Users()

}

function ExcluirUser(){

    posUsuario = vetorUsers.indexOf(excluirUser.value)

    if(posUsuario == -1){

        excluirUser.value = ''
        
    }else{

        vetorUsers.splice(posUsuario, 1)
        excluirUser.value = ''

    }

}

function ProcurarUser(){
 
    for(i=0; i < vetorUsers[i].length; i++){

        if(nomeCadastro == vetorUsers[i].username){

            nome.value = vetorUsers[i].username
            senha.value = vetorUsers[i].password

        }

    }

}

function Users(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

}


function calculaIMC(){

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    userLogado = JSON.parse(localStorage.getItem('userLogado'))

    imc = (massa.value/(altura.value * altura.value)).toFixed(0)

    document.getElementById("seuimc").innerHTML = `Seu Indice de massa corporal é: ${imc}`

    

    for(i=0; i < vetorUsers.length; i++){
        
    if(userLogado == vetorUsers[i].username){

    console.log(vetorUsers)
    vetorUsers[i].imc = imc
    localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        

    }/*else{


        console.log(vetorUsers)
        vetorUsers[i].imc = imc
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))

    }*/
    
    
    }

  

}

function alguemOn(){

    userLogado = JSON.parse(localStorage.getItem('userLogado'))

    if(userLogado != null){
        
        btnPerfil.style.display = "block"
        btnCadastrado.style.display = "none"

    }else{

        btnPerfil.style.display = "none"
        btnCadastrado.style.display = "block"

    }


}
