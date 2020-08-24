<template>
  <div id="app">
    <header class="index-header">
        <button @click="changeShowClass()" class="index-header__item">
            <img src="./assets/img/logos/logo_imn_blanco.png" alt="">
        </button>
        <h4 class="index-header__item">MENÚ</h4>
    </header>
    <nav id="nav" class="nav" :class="showClass">
      <div class="header">
        <h1>Página Web: <span>{{ actualPage }}</span></h1>
      </div>
      <ul class="menu">
        <li v-for="(route, index) in routeProps" :key="index" @click="changeActualPage(index)">
          <router-link :to="route.to"><span><i :class="`icono izquierda fas fa-${route.icon}`"/></span>{{ route.text }}</router-link>
        </li>
      </ul>
    </nav>
    <main id="content" class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      actualPage: 'Inicio',
      showClass: '',
      routeProps: [
        {
          to: '/',
          icon: 'home',
          text: 'Inicio'
        },
        {
          to: '/imagenes-satelite',
          icon: 'satellite',
          text: 'Imágenes de Satélite'
        },
        {
          to: '/datos-seguimiento',
          icon: 'database',
          text: 'Datos de Seguimiento'
        },
        {
          to: '/huracanes-cnh',
          icon: 'poo-storm',
          text: 'Huracanes y Ondas (CNH)'
        },
        {
          to: '/oscilaciones',
          icon: 'wave-square',
          text: 'Oscilaciones'
        },
        {
          to: '/modelos-imn',
          icon: 'cloud-sun-rain',
          text: 'Modelos Numéricos (IMN)'
        }
      ],
    }
  },
  methods: {
    changeShowClass() {
      if (!this.showClass) {
        this.showClass = 'show'
      } else {
        this.showClass = ''
      }
    },
    changeActualPage(index) {
      this.actualPage = this.routeProps[index].text
    }
  },
}
</script>

<style>
:root {
    --color-bg: #e9e9e9;
    --color-bg2: #0e6b8a;
    --color-dark-fonts: #e9e9e9;
    --color-light-fonts: #0d2c44;
    --color-font-menu: #e9e9e9;
    --color-hover: #1a95d5;
    --color-box-shadow: #084370;
    --fonts: 'Bebas Neue', 'cursive';
}

* {
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    letter-spacing: 2px;
}

.index-header {
  display: none;
  width: 100%;
  height: 10vmin;
  background-color: var(--color-light-fonts);
  box-shadow: 0 0 15px rgb(49, 47, 47);
}

.index-header button {
  display: block;
  width: 10vmin;
  height: 10vmin;
  padding: 10px;
  border: none;
  border-right: 2px solid var(--color-bg);
  color: var(--color-light-fonts);
  background-color: var(--color-light-fonts);
}

.index-header button:focus {
  outline: none;
}

.index-header button:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
}

.index-header button img {
  width: 5vmin;
  height: 4vmin;
}

.index-header .index-header__item {
  display: inline-block;
  margin: 0 5px 0 0;
}

.index-header h4 {
  color: var(--color-dark-fonts);
}

body {
    /* background-image: radial-gradient(circle, var(--color-bg), var(--color-bg2)); */
    background-color: var(--color-bg);
    font-family: var(--fonts);
    line-height: 2vmin;
    color: var(--color-light-fonts);
}

hr {
  border: 0;
  height: 4vmin;
  box-shadow: inset 0 12px 12px -12px var(--color-hover);
}

.menu {
  top: 0;
  list-style: none;
}

.menu li {
    align-items: center;
    padding: 0 1vmin 1vmin 1vmin;
}

.menu li a {
    color: var(--color-font-menu);
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 4vmin;
    line-height: 4vmin;
    background: var(--color-light-fonts);
    border-radius: 1vmin;
}

.menu li a:hover {
  background: var(--color-hover);
  color: var(--color-light-fonts);
}

.menu li span {
  width: 11vmin;
  text-align: center;
}

.menu .icono {
  line-height: 3vmin;
}

.menu a {
  font-weight: bold;
  color: var(--color-light-fonts);
  text-decoration: none;
}

.menu li a.router-link-exact-active {
  background: var(--color-hover);
  color: var(--color-light-fonts);
}

.nav,
.content {
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}

.nav {
  width: 25%;
  left: 0;
  position: fixed;
}

.nav .header h1 {
  font-size: 8vmin;
  line-height: 8vmin;
  text-align: center;
}

.content {
  width: 75%;
  right: 0;
}

.content div .title {
  text-align: center;
  font-size: 6vmin;
  line-height: 6vmin;
  padding: 0 1.5vmin 0 1.5vmin;
}

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  margin: 2vmin 0 0 0;
}

@media (max-width: 900px) {
  .content {
    width: 70%;
  }

  .nav {
    width: 30%;
  }
}

@media (max-width: 786px) {
  
  * {
    padding: 0;
  }

  body {
    line-height: 4vmin;
  }

  .index-header {
    display: block;
    position: fixed;
    z-index: 50;
  }

  .content {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }

  .nav {
    position: absolute;
    width: 75%;
    height: 100%;
    top: 11vmin;
    margin-left: -100%;
    transition: all 0.35s;
    z-index: 25;
    overflow-y: hidden;
    background: var(--color-bg);
    border-radius: 2vmin;
    border: 2px solid var(--color-light-fonts);
    box-shadow: 0 3px 10px 0 rgb(49, 47, 47);
  }

  .nav .header {
    display: none;
  }

  .menu li {
    padding: 0 0.5vmin 0.2vmin 0.5vmin;
  }

  .menu li a {
    padding: 0;
    margin: 0.8vmin 0.5vmin 0 0.5vmin;
    font-size: 4vmin;
    line-height: 1vmin;
    padding: 1vmin 0 1vmin 1vmin;
    border-radius: 1vmin;
    letter-spacing: 0;
  }

  .show {
    margin-left: 0;
    position: fixed;
    overflow-y: hidden;
    height: 65vh;
  }
}
</style>
