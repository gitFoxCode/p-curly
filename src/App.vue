<template>
  <svg-sprite />
  <Nav />
  <Hero  />
  <Projects />
  <Skills />
  <Clients />
  <Nav />
  <Newsletter />
  <Footer />
</template>

<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Clients from "./components/Clients.vue";
import Newsletter from "./components/Newsletter.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Hero,
    Projects,
    Skills,
    Clients,
    Newsletter,
    Footer
  },
  created(){
    document.title = "Curly - freelancer | Portfolio";
  }
};
</script>

<style lang="scss">
  @import '~@/assets/css/reset.css';
  *,*::after,*::before{
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    background-color: #FAFAFA;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
  }
  .button{
    padding: 15px 15px;
    border: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    overflow: hidden;
    font-size: 1em;
    color: #43364A;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: transparent;
  }
  .button .icon{
    margin-left: 20px;
  }
  .button::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-45%);
    background-color: #FF8367;
    z-index: -1;
    transition: transform 0.3s;
  }
  .button:hover.button::after, .button:focus.button::after{
    left: 0;
    transition: transform 0.4s;
    transform: translateX(0);
  }
  ::-webkit-scrollbar {
  width: 2px;
  height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff8367;
    border: 25px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #e9795f;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #b14f38;
  }
  ::-webkit-scrollbar-track {
    background: #fafafa;
    border: 15px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-track:active {
    background: #eeeeee;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>
