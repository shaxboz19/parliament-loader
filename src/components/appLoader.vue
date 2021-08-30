<template>
  <div class="loader-wrapper">
    <div class="loader-logo">
      <img id="logo" src="../assets/logo.svg" alt="not found" />
    </div>
    <div class="loader__text">
      <img id="text" class="svg-animate" src="../assets/text.svg" alt="logo" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.loader-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #0b4aa8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loader-logo {
  height: 500px;
  width: auto;
}
.loader-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.loader__text {
  width: 60%;
  text-align: center;
}
.loader__text img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
