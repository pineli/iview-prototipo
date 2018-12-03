<template>
  <div id="app">
    <p-header>
      <img slot="logo" src="./assets/logo.jpg" alt="iview" />

      <div class="layout-nav">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                Menu1
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                Menu2
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    menu2 sub1
                </template>
                <MenuGroup title="titulo1">
                    <MenuItem name="3-1">menu2 sub2</MenuItem>
                    <MenuItem name="3-2">menu2 sub3</MenuItem>
                    <MenuItem name="3-3">menu2 sub4</MenuItem>
                </MenuGroup>
                <MenuGroup title="titulo2">
                    <MenuItem name="3-4">menu2 sub5</MenuItem>
                    <MenuItem name="3-5">menu2 sub6</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                Menu3
            </MenuItem>
        </Menu>
      </div>
      </Menu>
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
        <CarouselItem>
          <div class="demo-carousel">
            <img slot="logo" src="./assets/b1.jpeg" alt="iview" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img slot="logo" src="./assets/b2.jpeg" alt="iview" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img slot="logo" src="./assets/b3.jpeg" alt="iview" />
          </div>
        </CarouselItem>
      </Carousel>
      <Card dis-hover shadow>
        <div class="main-con">
          <Card>
            <Row>
              <h1>h1</h1>
              <h3>h3</h3>
            </Row>
          </Card>
          <Card>

          </Card>
            <Switch size="large" />1</Switch>
            <Switch /></Switch>
            <Switch size="small" /></Switch>          
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
