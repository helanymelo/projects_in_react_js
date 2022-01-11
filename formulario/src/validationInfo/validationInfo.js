export default function validadeInfo(values){
    let erros = {}

    if(!values.name.trim()){
        erros.name = "O Nome deve ser preenchido"
    }

    if(!values.email){
        erros.email = "O campor E-mail deve ser preenchido"
    }

    if(!values.password){
        erros.password = "O campo Senha deve ser preenchido"
    }else if(values.password.length < 6){
        erros.password = "A senha deve ser maior que 6 digitos"
    }

    if(!values.password2){
        erros.password2 = "O campo Senha deve ser preenchido"
    }else if(values.password2 !== values.password){
        erros.password2 = "As senhas não são identicas"
    }

    return erros;
}