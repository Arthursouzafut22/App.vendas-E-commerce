
function mudarImagemPeloId(id) {
   
    if(!id || typeof id !== "string") return
    const produtoLista = document.getElementById('produtoLista');
    for(const item of produtoLista.childNodes) {
        if(item.nodeName === '#text') continue
        item.dataset.active = false;
    }
    
    const imagem = document.getElementById(id);
    if(!imagem) return
    imagem.dataset.active = true;
}

  // BUTTON CONTROLADOR ITEM...

const buttonMais = document.getElementById('mais');
const buttonMenos = document.getElementById('menos');
const inputNumber = document.getElementById('number');

function controlador() {  
const clicarMais = (value) => {
   return inputNumber.value++
}
const clicarMenos = (value) => {
    if(inputNumber.value-- <= 0) 
       return Math.abs(inputNumber.value++);
}
buttonMais.addEventListener('click', clicarMais);
buttonMenos.addEventListener('click', clicarMenos);
}
controlador();


 function criarCarrinho2(value,quantidade) {
     const carrinho = document.querySelector('.carrinho-1');
     const produto = `
     <div class="produtor1">
     <div class="pd-flex">
       <img src="images/image-product-1-thumbnail.jpg" alt="">
       <div>
         <p>Tênis de edição limitada</p>
         <p>US$ 125,00 x <strong>${quantidade} US$ ${value}</strong> </p>
       </div>
       <button class="btn-lixeira"  onclick="limparCarrinho('')"><img src="images/lixeira-de-reciclagem (2).png" alt=""></button>
     </div>
     <button class="btn-check">Confira</button>
     </div>
  `
  carrinho.innerHTML = produto;
  
 }


// ADICIONAR ITEM AO CARRINHO...

  const addCarrinho = (value) => {
    const estoque = document.querySelector('.estoque-quantidade');
    const quantidade = inputNumber.value;
    const valorProduto = value * quantidade;
    estoque.innerText = quantidade;
     criarCarrinho2(valorProduto, quantidade);
}


// REMOVER PRODUTO DO CARRINHO...

 const limparCarrinho = (remove) => {
  const carrinho = document.querySelector('.carrinho-1');
  const estoque = document.querySelector('.estoque-quantidade');
  estoque.innerText = 0;
  carrinho.innerHTML = remove;
  return carrinho;
 }

 
// CLIQUE CARRINHO...

const clickCard = () => {
  const card = document.querySelector('.cart-carrinho');
  card.classList.toggle('active');
}


// MENU MOBILE...

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

const burguerMenu = (event) => {
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active')
}

menuButton.addEventListener('click', burguerMenu);





















