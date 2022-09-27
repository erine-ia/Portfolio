const btn = document.querySelector('.btn-menu-abrir')
const menu = document.querySelector('.menu-links-fechado')
const navbar = document.querySelector('.menu')
const header = document.querySelector('.sobre').innerHeigth

window.addEventListener('scroll', function(){
    let tamanho_tela = this.window.scrollY
    if( 1000 > tamanho_tela){
        navbar.classList.add('menu-menor')
      
    }
})

btn.addEventListener('click',  function(){
    if(btn.classList.contains('btn-menu-abrir')){
        btn.classList.remove('btn-menu-abrir')
        btn.classList.add('btn-menu-fechar')

        menu.classList.remove('menu-links-fechado')
        menu.classList.add('menu-links-aberto')


    }else{
        btn.classList.add('btn-menu-abrir')
        btn.classList.remove('btn-menu-fechar')

        menu.classList.add('menu-links-fechado')
        menu.classList.remove('menu-links-aberto')
    }

})