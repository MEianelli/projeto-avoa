import React from "react";
import "./style.css";
import "./cart.css";
import "./pagamento.css";
import "./banner.css";
import logo from "../../images/logo.jpg";
import { listaDeProdutos } from "./infoFotos.js";
import { listaDeInputs } from "./listadeinputs.js";
import { listaDeInputs2 } from "./listadeinputs.js";

export default function Products() {
  var [cartArray, setCartArray] = React.useState([{ images: "null", precoP: 0, qtdP: 1, referencia: 0 }]);

  var descontos = 0;
  var totalProdutos = 0;
  var quantidadeTotalItens = -1; //desconsiderando  primeiro elemento null do array
  for (let i = 0; i < cartArray.length; i++) {
    totalProdutos += cartArray[i].precoP * parseInt(cartArray[i].qtdP);
    quantidadeTotalItens += cartArray[i].qtdP;
  }
  totalProdutos = totalProdutos.toFixed(2);
  var parcelas;
  if (quantidadeTotalItens === 0) {
    parcelas = "";
  } else {
    parcelas = "ou 3x de R$" + Math.round((totalProdutos / 3) * 1e2) / 1e2 + " sem juros";
  }

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

  //Abrir dados de pagamento
  function openPagamento() {
    let bCheckout = document.querySelector(".botaoCheckout");
    let pagaWraper = document.querySelector(".pagamentoWraper");
    if (bCheckout.innerText === "CHECKOUT") {
      pagaWraper.style.display = "block";
      bCheckout.innerText = "Ver Itens";
    } else {
      fecharPagamento();
    }
  }

  function fecharPagamento() {
    let bCheckout = document.querySelector(".botaoCheckout");
    let pagaWraper = document.querySelector(".pagamentoWraper");
    pagaWraper.style.display = "none";
    bCheckout.innerText = "CHECKOUT";
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

  //Funcao para checar se todos os dados foram preenchidos
  function checarDadosPreenchidos() {
    let dados = document.querySelectorAll(".dadosEntrega");
    for (let i = 0; i < dados.length; i++) {
      if (i !== 5) {
        if (dados[i].value === "") {
          return alert("Favor preencher todos os campos obrigatorios");
        }
      }
    }

    let bannerCompra = document.querySelector(".bannerCompraFinalizada");
    let nomeUsuario = document.querySelector(".bannerCompraFinalizada > h2 > span");
    nomeUsuario.innerHTML = dados[0].value.split(" ")[0];
    bannerCompra.style.display = "block";
    setTimeout(() => {
      bannerCompra.style.display = "none";
      zerarCarrinho();
    }, 3000);
  }

  function zerarCarrinho() {
    let temp = [{ images: "null", precoP: 0, qtdP: 1, referencia: 0 }];
    setCartArray(temp);
    fecharPagamento();
    fechaOverlay();
  }

  // ********************************************* INICIO HTML ****************************************
  // ********************************************* INICIO HTML ****************************************
  // ********************************************* INICIO HTML ****************************************
  return (
    <div onClick={fechaOverlay} className="productsWraper">
      {/* COMECO DA BARRA DE NAVEGACAO */}
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
          </div>
        </div>
        {/* FIM DA BARRA DE NAVEGACAO */}

        <div className="productsNavWraperMargin">
          {/* COMECO FINALIZAR COMPRA */}
          <div tabindex="-1" className="pagamentoWraper">
            <div onClick={fecharPagamento} className="botaoFecharPagamento">
              X
            </div>
            <h2>Entrega</h2>

            <table className="pagamentoTable">
              <tbody>
                {listaDeInputs.map(function (valor, index) {
                  return (
                    <tr key={index}>
                      <td>{valor.texto}</td>
                      <td>
                        <input onBlur={valor.func} className={valor.className} id={valor.id} name={valor.name} type={valor.type} maxLength={valor.maxlength} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2>Pagamento</h2>
            <table className="pagamentoTable">
              <tbody>
                {listaDeInputs2.map(function (valor, index) {
                  return (
                    <tr key={index}>
                      <td>{valor.texto}</td>
                      <td>
                        <input onBlur={valor.func} className={valor.className} id={valor.id} name={valor.name} type={valor.type} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div onClick={checarDadosPreenchidos} className="botaoFinalizar">
              FINALIZAR
            </div>
            <p>
              <em>* campos obrigatorios</em>
            </p>
          </div>

          {/* FIM FINALIZAR COMPRA */}
          <div className="bannerCompraFinalizada">
            <h2>
              Muito obrigado pela compra, <span></span>
            </h2>
            <p>
              <em>Sua compra foi finalizada com sucesso e seus itens serão entregues dentro do prazo informado</em>{" "}
            </p>
          </div>
          {/*COMECO cart */}
          <div className="checkoutBoxWrap">
            <div className="checkoutBox">
              <h2>Resumo da Compra</h2>

              <table className="subtotal">
                <tbody>
                  <tr>
                    <td>Qtd de itens</td>
                    <td>{quantidadeTotalItens}</td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td>R${totalProdutos}</td>
                  </tr>
                  <tr>
                    <td>Descontos</td>
                    <td>R${descontos}</td>
                  </tr>
                </tbody>
              </table>

              <table className="total">
                <tbody>
                  <tr>
                    <td>TOTAL</td>
                    <td>R${totalProdutos - descontos}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{parcelas}</td>
                  </tr>
                </tbody>
              </table>

              <div onClick={openPagamento} className="botaoCheckout">
                CHECKOUT
              </div>
            </div>
          </div>
        </div>

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
            <i className="fas fa-shopping-cart"></i> Cart ({cartArray.length - 1})
            {/*********************COMECO popup quando adiciona produto***************************************************************/}
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
