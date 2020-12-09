<template>
  <MainView />
</template>

<script>
import MainView from "./view/MainView/MainView";

export default {
  name: "App",
  components: {
    MainView,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

*:after,
*:before {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-family: "RobotoRegular", "Microsoft YaHei";
  color: #ffffff;
}

body {
  min-width: 1280px;
  overflow-x: hidden;
  font-weight: normal;
  font-size: 1rem;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

li {
  list-style: none;
}

input,
textarea {
  border: 0;
  background: none;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.01);
  background: #ccc;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  background: #ededed;
}
</style>
