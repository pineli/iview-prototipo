<template>
  <div id="app">
    <p-header>
      <img slot="logo" src="./assets/logo.png" alt="iview" />
      <menu
        breakpoint="md"
        collapsible
        :collapsed-width="78"
        mode="horizontal"
        theme="light"
        active-name="1"
      >
        <div class="layout-nav">
          <menuitem name="1">Eventos</menuitem>
          <menuitem name="2">News</menuitem>
          <Submenu name="3">
            <template slot="title">
              Sub-menu
            </template>
            <MenuGroup title="title">
              <menuitem name="3-1">opcao 1</menuitem>
              <menuitem name="3-2">opcao 2</menuitem>
              <menuitem name="3-3">opcao 3</menuitem>
            </MenuGroup>
          </Submenu>
        </div>
      </menu>
      <Icon slot="menu" type="android-apps"></Icon>
    </p-header>
    <div class="main">
      <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
      >
        <CarouselItem> <div class="demo-carousel">1</div> </CarouselItem>
        <CarouselItem> <div class="demo-carousel">2</div> </CarouselItem>
        <CarouselItem> <div class="demo-carousel">3</div> </CarouselItem>
        <CarouselItem> <div class="demo-carousel">4</div> </CarouselItem>
      </Carousel>
      <Card dis-hover shadow>
        <div class="main-con">
          <Card>
            <Row>
              <h1>Teste Layout</h1>
              <h3>---***---</h3>
            </Row>
          </Card>
          <Card> </Card>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PHeader from "./components/PHeader";

export default {
  name: "App",
  components: {
    HelloWorld,
    PHeader
  },
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "hover"
      }
    };
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #eff2f7;
}
</style>

<style scoped>
.main {
  max-width: 960px;
  margin: 90px auto 20px;
  padding: 20px;
  background: #ffffff;
  z-index: 2;
}

.main-con h1 {
  text-align: center;
}
.main-con h3 {
  text-align: center;
  color: #80848f;
  font-weight: 500;
}
.main-con h2 {
  color: #2d8cf0;
  font-size: 18px;
  padding-left: 10px;
  margin: 20px 0;
  border-left: 5px solid #2d8cf0;
}
.main-con h4 {
  margin: 22px 2px 6px;
  padding-left: 10px;
  border-left: 3px solid #19be6b;
}

.demo-carousel {
  height: 300px;
  line-height: 300px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #b2b5b9;
}
</style>
