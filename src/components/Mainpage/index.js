import React from "react";

//Importando todos os Stylesheets CSS
import "./style.css";
import "./blob.css";
import "./about.css";
import "./conteudomain.css";
import "./botoesnavegacao.css";
import "./contato.css";

//importanto todas as imagens
import blob_0 from "../../images/blob_0.jpg";
import blob_1 from "../../images/blob_1.jpg";
import blob_2 from "../../images/blob_2.jpg";
import blob_3 from "../../images/blob_3.jpg";
import logo from "../../images/logo.jpg";

import foto12 from "../../images/foto12.jpg";
import foto16 from "../../images/foto16.jpg";
import foto17 from "../../images/foto17.jpg";
import foto18 from "../../images/foto18.jpg";

export default function Mainpage(props) {
  //Funcao para iniciar slideshow quando pagina terminar de carregar
  window.addEventListener("load", function () {
    showSlides();
  });

  //Funcao para banner de imagens passar automaticamente
  var slideIndex = 0;
  function showSlides() {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  //Funcao para abrir overlay de produtos
  function openProducts() {
    var productWraper = document.querySelector(".productsWraper");
    productWraper.classList.add("visible");
  }

  //Funcao para abrir tela de About
  function openAbout(i) {
    let aboutWrap = document.querySelectorAll(".aboutWraper");

    //Primeiro fechada todos os que estao abertos para depois aplicar e abrir o certo.
    for (let a = 0; a < aboutWrap.length; a++) {
      aboutWrap[a].classList.remove("aplicarsumirContent");
    }
    aboutWrap[i].classList.add("aplicarsumirContent");
    aboutWrap[i].classList.remove("aplicarmostrarContent");
  }

  //Funcao para voltar o conteudo
  function showMain(i) {
    let aboutWrap = document.querySelectorAll(".aboutWraper")[i];
    aboutWrap.classList.remove("aplicarsumirContent");
    aboutWrap.classList.add("aplicarmostrarContent");
  }

  return (
    <div className="mainWraper">
      {props.children}

      {/*Começo da barra de navegaçao superior*/}
      <div className="topNavBarWraper">
        <div
          onClick={() => {
            openAbout(0);
          }}
          className="topNavLogo"
        >
          <p className="about">SOBRE</p>

          <img className="logo" src={logo} alt="AVOA LOGO" />
        </div>

        <div
          onClick={() => {
            openAbout(1);
          }}
          className="topNavIcons"
        >
          <p className="topNavIconsP">
            <i className="fas fa-envelope"></i>
          </p>
          <p className="topNavText">Contato</p>
        </div>

        <a href="https://www.instagram.com/avoa.h/" target="_blank" rel="noopener noreferrer">
          <div className="topNavIcons">
            <p className="topNavIconsP">
              <i className="fab fa-instagram"></i>
            </p>
            <p className="topNavText">Instagram</p>
          </div>
        </a>

        <a href="https://api.whatsapp.com/send?phone=5581981886969&text=oi,%20AVO%C3%81!%20:)." target="_blank" rel="noopener noreferrer">
          <div className="topNavIcons">
            <p className="topNavIconsP">
              <i className="fab fa-whatsapp"></i>
            </p>
            <p className="topNavText">Whatsapp</p>
          </div>
        </a>
        <div className="topNavIcons">
          <p className="topNavIconsP">
            <i className="fas fa-shopping-cart"></i>
          </p>
          <p className="topNavText">Cart</p>
        </div>
      </div>
      {/*FIM da barra de navegaçao superior*/}

      {/*COMECO do conteudo embaixo da barra de navegacao*/}
      <div className="mainContentWraper">
        <img src={blob_0} alt=" " id="blob_0" className="blobs" />
        <img src={blob_1} alt=" " id="blob_1" className="blobs" />
        <img src={blob_2} alt=" " id="blob_2" className="blobs" />
        <img src={blob_3} alt=" " id="blob_3" className="blobs" />

        {/*COMECO do slider de quando clica no ABOUT*/}
        <div className="aboutWraper">
          <div
            onClick={() => {
              showMain(0);
            }}
            className="closeArrowWraper"
          >
            <i className="fas fa-chevron-up arrowup"></i>
          </div>
          <article>
            <h2>Sobre</h2>
            <p>A AVOÁ é uma marca nordestina, de Recife.</p>
            <p>Moda autoral, que atende o seguimento MODA CASUAL feminina.</p>
            <p>Existe desde Julho de 2017</p>
            <p>
              O nome AVOÁ vem de vôo, num jeitinho nordestino de s e dizer. O voar traz a ideia de leveza, fluidez, moviment o, calma. E a nordestinidade da palavra, além das co res usadas na
              identidade, se associam a terra, cultur a. A ideia é de exaltar a regionalidade.
            </p>
          </article>
        </div>
        {/*FIM do slider de quando clica no ABOUT*/}

        {/*COMECO do slider de quando clica no CONTATO*/}
        <div className="aboutWraper contatoWrap">
          <div
            onClick={() => {
              showMain(1);
            }}
            className="closeArrowWraper"
          >
            <i className="fas fa-chevron-up arrowup"></i>
          </div>

          <p>Entre em contato conosco pelo formulario abaixo</p>
          <input id="name" name="name" type="text" placeholder="Nome" />
          <input id="sobrenome" name="lastname" type="text" placeholder="Sobrenome" />
          <input id="email" name="email" type="email" placeholder="E-mail" />

          <form>
            <textarea id="msg" name="msg" placeholder="Mensagem"></textarea>
          </form>

          <div className="botaoDeEnviar">Enviar</div>
        </div>
        {/*FIM do slider de quando clica no CONTATO*/}

        {/*COMECO do conteudo no centro da area de conteudo*/}
        <div className="mainContent">
          <div className="mensagemDoDiaWraper">
            <p className="mensagemDoDiaP">
              "O PROCESSO CRIATIVO É REALIZADO POR GABRIELA MELO, CRIADORA DA AVOÁ, E AS PEÇAS VIRAM REALIDADE PELAS MÃOS DE MULHERES BATALHADORAS QUE COSTURAM COMO QUEM AVOAM E ENCHEM ESSA MARCA DE
              HISTÓRIA."
            </p>
          </div>
          <div
            onClick={() => {
              openProducts();
            }}
            className="bannerWraper"
          >
            <div className="mySlides fade">
              <img src={foto12} alt="Banner" className="bannerImg" />
            </div>
            <div className="mySlides fade">
              <img src={foto16} alt="Banner" className="bannerImg" />
            </div>
            <div className="mySlides fade">
              <img src={foto17} alt="Banner" className="bannerImg" />
            </div>
            <div className="mySlides fade">
              <img src={foto18} alt="Banner" className="bannerImg" />
            </div>

            <div className="overlayCards">PRODUTOS</div>
          </div>
        </div>

        {/*FIM do conteudo no centro da area de conteudo*/}
      </div>
      {/*FIM do conteudo embaixo da barra de navegacao */}
    </div>
  );
}
