<template>
  <div id="app">
    <header class="index-header">
        <button @click="changeShowClass()" class="index-header__button">
            <img class="index-header__img" src="./assets/img/logos/logo_imn_blanco.png" alt="">
        </button>
        <h4 class="index-header__item">MENÚ</h4>
    </header>
    <nav id="nav" class="nav" :class="showClass">
      <div class="principal-header">
        <h1 class="principal-header__title">Página Web: <span>{{ actualPage }}</span></h1>
      </div>
      <ul class="menu">
        <li class="menu__item" v-for="(route, index) in routeProps" :key="index" @click="changeActualPage(index)">
          <router-link class="menu__link" :to="route.to">
            <span class="menu__span">
              <font-awesome-icon class="menu__icon" :icon="route.icon" size="1x"/>
            </span>
            {{ route.text }}
          </router-link>
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
          to: '/modelos-regionales',
          icon: 'cloud-showers-heavy',
          text: 'Modelos Numéricos (IMN)'
        },
        {
          to: '/modelos-globales',
          icon: 'globe-americas',
          text: 'Modelos Globales'
        },
        {
          to: '/modelos-climaticos',
          icon: 'temperature-low',
          text: 'Modelos Climáticos'
        },
        {
          to: '/series-tiempo',
          icon: 'chart-line',
          text: 'Series de Tiempo'
        },
        {
          to: '/reanalisys-resumen',
          icon: 'chart-area',
          text: 'Reanalisys y Resumen'
        },
        {
          to: '/aeronautica',
          icon: 'plane-departure',
          text: 'Aeronáutica'
        },
        {
          to: '/marino',
          icon: 'water',
          text: 'Marino'
        },
        {
          to: '/incendios-forestales',
          icon: 'fire',
          text: 'Incendios Forestales'
        },
        {
          to: '/dispersion-ceniza',
          icon: 'mountain',
          text: 'Dispersión de Ceniza'
        },
        {
          to: '/varios',
          icon: 'recycle',
          text: 'Varios'
        },
        {
          to: '/evaluacion',
          icon: 'clipboard',
          text: 'Evaluación'
        },
        {
          to: '/contacto',
          icon: 'envelope',
          text: 'Contacto'
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

:root {
  --color-cream: #e9e9e9;
  --color-dark-blue: #0d2c44;
  --color-light-blue: #1a95d5;
  --fonts: 'Bebas Neue', 'cursive';
}

#app {
  background: var(--color-cream);
  color: var(--color-dark-blue);
  box-sizing: border-box;
  letter-spacing: 0.5vmin;
  font-family: var(--fonts);
}

body {
  margin: 0;
  line-height: 2vmin;
  color: var(--color-dark-blue);
  background: var(--color-cream);
}

.index-header {
  margin: 0;
  display: none;
  width: 100%;
  height: 12vmin;
  background: var(--color-dark-blue);
  box-shadow: 0 0 15px rgb(49, 47, 47);
}

.index-header__button {
  display: inline-block;
  width: 12vmin;
  height: 12vmin;
  padding: 2vmin;
  border: none;
  border-right: 2px solid var(--color-cream);
  background: var(--color-dark-blue);
}

.index-header__button:focus {
  outline: none;
}

.index-header__button:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
}

.index-header__img {
  width: 7vmin;
  height: 5vmin;
}

.index-header__item {
  display: inline-block;
  font-size: 5vmin;
  margin: 0 2vmin 0 2vmin;
}

.index-header__item {
  color: var(--color-cream);
}

hr {
  border: 0;
  height: 4vmin;
  box-shadow: inset 0 12px 12px -12px var(--color-light-blue);
}

.nav,
.content {
  display: inline-block;
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

.nav {
  width: 25%;
  left: 0;
  position: fixed;
}

.principal-header__title {
  font-size: 5vmin;
  line-height: 5vmin;
  text-align: center;
}

.content {
  width: 75%;
  right: 0;
}

.content-title {
  text-align: center;
  font-size: 4vmin;
  line-height: 6vmin;
  padding: 0 1.5vmin 0 1.5vmin;
}

.content-note {
  text-align: center;
  font-size: 3vmin;
  line-height: 3.5vmin;
  padding: 0 1.5vmin 0 1.5vmin;
}

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  margin: 2vmin 0 0 2vmin;
}

.menu {
  padding: 0 0 0 0.8vmin;
  top: 0;
  list-style: none;
}

.menu__item {
  align-items: center;
  padding: 0.8vmin 0 0.8vmin;
  margin: 0 2vmin 0;
}

.menu__span {
  width: 10vmin;
  text-align: center;
  font-size: 3vmin;
}

.menu__link {
  color: var(--color-cream);
  display: flex;
  align-items: center;
  text-align: start;
  font-size: 3vmin;
  line-height: 4vmin;
  letter-spacing: 0.2vmin;
  background: var(--color-dark-blue);
  border-radius: 1vmin;
  font-weight: bold;
  text-decoration: none;
  padding: 2vmin 0 1vmin 0;
}

.menu__link:hover {
  background: var(--color-light-blue);
  color: var(--color-dark-blue);
}

.menu__link.router-link-exact-active {
  background: var(--color-light-blue);
  color: var(--color-dark-blue);
}

@media (max-width: 900px) {
  .content {
    width: 70%;
  }

  .nav {
    width: 30%;
    background: var(--color-cream);
  }

  .menu__link {
    font-size: 4vmin;
  }
}

@media (max-width: 786px) {
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
    z-index: 1;
  }

  .nav {
    width: 55%;
    height: 85%;
    top: 13vmin;
    margin-left: -100%;
    transition: all 0.35s;
    z-index: 99;
    overflow-y: auto;
    background: var(--color-cream);
    border-radius: 2vmin;
    border: 2px solid var(--color-dark-blue);
    box-shadow: 0 3px 10px 0 rgb(49, 47, 47);
  }

  .principal-header__title {
    display: none;
  }

  .menu {
    top: 0;
  }

  .menu__item {
    margin: 0.5vmin 1vmin 0;
    padding: 0.2vmin 0.5vmin 0.2vmin 0;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
  }

  .menu__link {
    border-radius: 1vmin;
    letter-spacing: 0;
  }

  .show {
    margin-left: 0;
    position: fixed;
    overflow-y: auto;
    height: 65vh;
  }
}
</style>
