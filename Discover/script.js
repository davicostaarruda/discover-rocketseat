function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light-davi.jpg')
        img.setAttribute('alt', 'Foto de Davi Arruda sorrindo, usando óculos escuro e camisa preta gola V na Itália.')
    }else{
        img.setAttribute('src', './assets/avatar-dark-davi.jpeg')
        img.setAttribute('alt', 'Foto de Davi Arruda sorrindo, usando óculos de grau e camisa verde com fundo amarelo, rosa e roxo em uma festa.')
    }
}