var nome = document.getElementsByClassName('username')[0]
var senha = document.getElementsByClassName('password')[0]

function logar() {
    var username = nome.value
    var password = senha.value   

    if (username === '' || password === '') {
    alert('Algo de errado não está certo')
    return
    }
    alert('Login está sendo efetuado...')
    var url = 'homepage.html?username=' + encodeURIComponent(username)

    window.location.href = url
}