<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <lit-component
    :title="`Hey CoMPASexample Team!`"
    :counter="0"
    @counter-incremented="
      ($event) => console.log(`The counter is ${$event.detail}`)
    "
  ></lit-component>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
