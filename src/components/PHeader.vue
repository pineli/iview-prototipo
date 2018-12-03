<template>
		<div class="header">
			<div class="logo-con">
				<slot name="logo"></slot>
			</div>
      <div class="link-con">
        <slot></slot>
      </div>
		</div>
</template>

<script>
export default {
  name: "PHeader",
  data() {
    return {

    };
  }
};
</script>

<style>
.ivu-menu-horizontal {
  height: 70px;
  line-height: 68px;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  color: #2d8cf0;
  border-bottom: 1px solid #2d8cf0;
}
</style>

<style scoped>
.header {
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #e9eaec;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 30;
  overflow: hidden;
  box-shadow: 0 1px 4px 1px rgba(200, 200, 200, 0.3);
}
.logo-con {
  height: 60px;
  margin: 5px 100px;
  display: inline-block;
}
.logo-con img {
  height: 100%;
  width: auto;
}

.link-con {
  float: right;
  margin-right: 100px;
  height: 70px;
  line-height: 70px;
}

.link-con_ a {
  display: block;
  float: left;
  height: 100%;
  font-size: 16px;
  margin: 0 10px;
}
</style>
