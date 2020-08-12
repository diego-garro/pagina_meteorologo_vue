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
  height: 50px;
  background-color: var(--color-light-fonts);
  box-shadow: 0 0 15px rgb(49, 47, 47);
}

.index-header button {
  display: block;
  width: 50px;
  height: 50px;
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
  width: 100%;
  height: 80%;
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
    line-height: 18px;
    color: var(--color-light-fonts);
}

hr {
  border: 0;
  height: 12px;
  box-shadow: inset 0 12px 12px -12px var(--color-hover);
}

.menu {
  top: 0;
  list-style: none;
}

.menu li {
    align-items: center;
    padding: 2px;
}

.menu li a {
    color: var(--color-font-menu);
    display: block;
    font-size: 25px;
    line-height: 30px;
    background: var(--color-light-fonts);
    border-radius: 5px;
}

.menu li a:hover {
  background: var(--color-hover);
  color: var(--color-light-fonts);
}

.menu li span {
  display: inline-block;
  width: 75px;
  align-content: center;
  text-align: center;
  align-items: center;
}

.menu .icono {
  line-height: 18px;
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
  font-size: 50px;
  line-height: 50px;
  text-align: center;
}

.content {
  width: 75%;
  right: 0;
}

@media (max-width: 786px) {
  
  * {
    padding: 0;
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
    top: 50px;
    margin-left: -100%;
    transition: all 0.35s;
    z-index: 25;
    overflow-y: hidden;
    background: var(--color-bg);
    border-radius: 10px;
    border: 2px solid var(--color-light-fonts);
    box-shadow: 0 3px 10px 0 rgb(49, 47, 47);
  }

  .nav .header {
    display: none;
  }

  .menu li {
    padding: 0;
  }

  .menu li span {
    width: 35px;
  }

  .menu li a {
    padding: 0;
    margin: 5px;
    font-size: 20px;
    line-height: 3px;
    padding: 3px 0 3px 10px;
    border-radius: 5px;
    letter-spacing: 0;
  }

  .show {
    margin-left: 0;
    position: fixed;
    overflow-y: scroll;
    height: 65vh;
  }
}
</style>
