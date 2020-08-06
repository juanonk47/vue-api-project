<template>
  <div>
    <div class="content-block">
      <div class="dx-card responsive-paddings">
        <div class="center-logo">
          <div class="logos-container polaroid">
            <img
              class="img-profile"
              src="https://avatars2.githubusercontent.com/u/2934917?s=400&u=1c3cdd466f61525d62c1fcd92d57752dde08c925&v=4"
              alt=""
            />
            <div class="container">
              <a target="_blank" href="https://github.com/juanonk47"
                ><img
                  class="img-git"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
        <h6>LISTA DE APIS USADOS</h6>
      <apilist />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.logos-container {
  margin: 20px 0 40px 0;
  text-align: center;
  svg {
    display: inline-block;
  }
}

.devextreme-logo {
  width: 200px;
  height: 34px;
  margin-bottom: 17px;
}

.vue-logo {
  width: 180px;
  height: 62px;
}

.plus {
  margin: 20px 10px;
  width: 22px;
  height: 22px;
}

.screen-x-small .logos-container {
  svg {
    width: 100%;
    display: block;
    &.plus {
      margin: 0;
    }
  }
}

div.polaroid {
  width: 30%;

  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.img-profile {
  width: 100%;
}

.img-git {
  width: 48%;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}
.center-logo {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.logo-github {
  width: 54%;
}
</style>
<script>
import apilist from "../components/api-list";

export default {
  name:'home',
  components: {apilist}
}
</script>