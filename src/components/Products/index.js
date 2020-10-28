import React from "react";
import "./style.css";
import "./cart.css";
import logo from "../../images/logo.jpg";
import { listaDeProdutos } from "./infoFotos.js";

export default function Products() {
  var [cartArray, setCartArray] = React.useState([{ images: "null", precoP: 0, qtdP: 1, referencia: 0 }]);

  var totalProdutos = 0;
  for (let i = 0; i < cartArray.length; i++) {
    totalProdutos += cartArray[i].precoP * parseInt(cartArray[i].qtdP);
  }
  totalProdutos = totalProdutos.toFixed(2);

  function fechaOverlay() {
    var wraper = document.querySelector(".productsWraper");
    wraper.classList.remove("visible");
    let cartOverlay = document.querySelector(".cartWraper");
    cartOverlay.style.display = "none";
  }

  //funcao para previnir que quando clica nos elementos filhos do overlay, disparar o onclick do overlay
  function handleInnerClick(e) {
    e.stopPropagation();
  }

  function handleComprar(obj) {
    //acionar o popup adicionado e depois dar fade

    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].referencia === obj.referencia) {
        alert("Item ja esta no carrinho");
        return;
      }
    }
    let added = document.querySelector(".productAddedWraper");
    added.style.display = "block";
    setTimeout(() => {
      added.style.display = "none";
    }, 3000);

    //atualizar o useState
    let tempArray = [...cartArray];
    tempArray.push(obj);
    setCartArray(tempArray);
  }

  //funcao para aumentar qtd no carrinho
  function addFunction(n) {
    let tempArray = [...cartArray];
    for (let i = 1; i < tempArray.length; i++) {
      if (tempArray[i].referencia === n) {
        tempArray[i].qtdP += 1;
      }
    }
    setCartArray(tempArray);
  }

  //funcao para Diminuir qtd no carrinho
  function subFunction(n) {
    let tempArray = [...cartArray];
    for (let i = 1; i < tempArray.length; i++) {
      if (tempArray[i].referencia === n) {
        if (tempArray[i].qtdP - 1 <= 0) {
          alert("Item sera removido do Carrinho");
          removeDoCarrinho(tempArray[i]);
        } else {
          tempArray[i].qtdP -= 1;
          setCartArray(tempArray);
        }
      }
    }
  }

  function removeDoCarrinho(item) {
    let tempArray = [...cartArray];
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].referencia === item.referencia) {
        tempArray.splice(i, 1);
      }
    }
    setCartArray(tempArray);
  }

  //Abrir e fechar o overlay do Cart
  function openCart() {
    let cartOverlay = document.querySelector(".cartWraper");
    cartOverlay.style.display = "block";
  }

  function closeCart() {
    let cartOverlay = document.querySelector(".cartWraper");
    cartOverlay.style.display = "none";
  }

  return (
    <div onClick={fechaOverlay} className="productsWraper">
      {/*COMECO cart */}
      <div onClick={handleInnerClick} className="cartWraper">
        <div className="productsNavWraper">
          <div onClick={closeCart} className="cartIcon navDivs">
            PRODUTOS
          </div>
          <div className="productNavLogoDiv navDivs">
            <img src={logo} alt="logo" className="productNavLogo" />
          </div>

          <div onClick={fechaOverlay} className="closeButton navDivs">
            X
            <div className="checkoutBoxWrap">
              <div className="checkoutBox">
                <p>TOTAL R${totalProdutos}</p>

                <div className="botaoCheckout">CHECKOUT</div>
              </div>
            </div>
          </div>
        </div>
        <div className="productsNavWraperMargin"></div>

        {cartArray.slice(1).map(function (valor, index) {
          return (
            <div key={index} className="cartItem">
              <div className="imageCartItem">
                <img src={valor.images} alt="produto" />
              </div>

              <p>{valor.tituloP}</p>
              <p>R${valor.precoP}</p>
              <div className="cartAddSubButtonWrap">
                <div
                  onClick={() => {
                    subFunction(valor.referencia);
                  }}
                  className="lessButton"
                >
                  -
                </div>
                <div className="textArea">{valor.qtdP}</div>
                <div
                  onClick={() => {
                    addFunction(valor.referencia);
                  }}
                  className="plusButton"
                >
                  +
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*FIM cart */}

      <div onClick={handleInnerClick} className="productsContentWraper">
        {/*COMECO barra de navegacao wraper*/}
        <div className="productsNavWraper">
          <div onClick={openCart} className="cartIcon navDivs">
            <i className="fas fa-shopping-cart"></i> Cart ({cartArray.length - 1}){/*COMECO popup quando adiciona produto*/}
            <div className="productAddedWraper">
              <div className="topPyramid"></div>
              <div className="added">
                <img src={cartArray[cartArray.length - 1].images} alt="Adicionado" />
                <p>ADICIONADO AO CARRINHO</p>
              </div>
            </div>
            {/*FIM popup quando adiciona produto*/}
          </div>
          <div className="productNavLogoDiv navDivs">
            <img src={logo} alt="logo" className="productNavLogo" />
          </div>

          <div onClick={fechaOverlay} className="closeButton navDivs">
            X
          </div>
        </div>
        <div className="productsNavWraperMargin"></div>
        {/*FIM barra de navegacao wraper*/}

        {/*COMECO geracao de cards de produto*/}
        {listaDeProdutos.map(function (valor, index) {
          return (
            <div key={index} className="cardDeProduto">
              <div className="overlayCardProdutos">
                <p className="cardTitulo">{valor.tituloP}</p>
                <p className="cardPreco">R${valor.precoP}</p>
                <p className="cardDescricao">{valor.descricaoP}</p>
                <div className="botaoComprarWrap">
                  <button
                    onClick={() => {
                      handleComprar(valor);
                    }}
                    type="button"
                    className="botaoComprar"
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
              <img className="imagemCard" src={valor.images} alt={valor.tituloP} />
            </div>
          );
        })}
        {/*FIM geracao de cards de produto*/}
      </div>
    </div>
  );
}
