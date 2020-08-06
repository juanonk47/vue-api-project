<template>
  <div>
    <div class="content-block">
      <div class="dx-card responsive-paddings">
        <DxTextBox v-model="text" :max-length="40" value-change-event="keyup">
          <DxTextBoxButton
            :options="serachButton"
            name="search"
            location="after"
        /></DxTextBox>
        <div v-if="movie.Poster" class="container">
          <DxBox :height="600" direction="row" width="100%">
            <DxItem :ratio="0.9">
              <template #default>
                <img class="img-poster" :src="movie.Poster" alt="" />
              </template>
            </DxItem>
            <DxItem :ratio="2">
              <template #default>
                <div class="form">
                  <div class="dx-fieldset">
                    <div class="dx-fieldset-header">Datos de la pelicula</div>
                    <div class="dx-field">
                      <div class="dx-field-label">Titulo</div>
                      <div class="dx-field-value-static">{{ movie.Title }}</div>
                    </div>
                    <div class="dx-field">
                      <div class="dx-field-label">Descripcion</div>
                      <div class="dx-field-value-static">{{ movie.Plot }}</div>
                    </div>
                    <div class="dx-field">
                      <div class="dx-field-label">Actores</div>
                      <div class="dx-field-value-static">
                        {{ movie.Actors }}
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </DxItem>
          </DxBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DxTextBox from "devextreme-vue/text-box";
import Axios from "axios";
import { DxButton as DxTextBoxButton } from "devextreme-vue/text-box";
import appinfo from "../app-info";
import { DxBox, DxItem } from "devextreme-vue/box";

export default {
  components: { DxTextBox, DxTextBoxButton, DxBox, DxItem },
  data() {
    return {
      text: "",
      movie: {},
      serachButton: {
        icon: "https://img.icons8.com/pastel-glyph/2x/search--v2.png",
        type: "default",
        onClick: () => {
          this.getMovie();
        },
      },
    };
  },
  methods: {
    getMovie() {
      Axios.get(
        `https://www.omdbapi.com/?apikey=${appinfo.API_KEY_OMDB}&t=${this.text}`
      ).then((response) => {
        this.movie = response.data;
      });
    },
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
}

.bottomright {
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-size: 18px;
}

.img-poster {
  width: 57% !important;
  height: auto !important;
  flex-basis: !important;
  opacity: 0.8;
  flex-basis: 0px;
  flex-grow: 0;
}
.dx-fieldset:first-child > h4:first-child {
  margin-top: 0;
}

#notes-container > .dx-field > .dx-field-label {
  width: 20%;
}

#notes-container > .dx-field > .dx-field-value {
  width: 80%;
}
</style>
