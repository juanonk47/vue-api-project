<template>
  <div class="images">
    <div
      v-for="apilist in apilist"
      :key="apilist.ID"
    >
      <div
        class="item-content"
        @click="showHouse(apilist)"
      >
        <img class="img-api" :src="apilist.Image">
        <div class="item-options">
          <div>
            <div class="address">{{ apilist.Address }}</div>
          </div>
        </div>
      </div>
    </div>

    <DxPopup
      :width="660"
      :height="540"
      :show-title="true"
      :title="currentHouse.Address"
      :drag-enabled="false"
      :close-on-outside-click="true"
      :visible.sync="popupVisible"
    >
      <template #content="{ data }">
        <div class="popup-property-details">
          <div>{{ currentHouse.desc }}</div>
          <br>
          <div>URL:  <a  target="_blank" :href="currentHouse.url">{{ currentHouse.url}} </a></div>
        </div>
      </template>
    </DxPopup>
  </div>

</template>

<script>
import DxPopup from 'devextreme-vue/popup';

import notify from 'devextreme/ui/notify';

import { housesSource } from '../utils/data.js';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

const
  ADD_TO_FAVORITES = 'Add to Favorites',
  REMOVE_FROM_FAVORITES = 'Remove from Favorites';

export default {
    name:'api-list',
  components: {
     DxPopup
  },
  filters: {
    currency(val) {
      return currencyFormatter.format(val);
    }
  },
  data: function() {
    return {
      apilist: housesSource,
      currentHouse: housesSource[0],
      popupVisible: false,
      position: {
        offset: '0, 2',
        at: 'bottom',
        my: 'top',
        collision: 'fit flip'
      }
    };
  },
  computed: {
    favoriteText() {
      return this.currentHouse.Favorite ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES;
    }
  },
  methods: {
    showHouse(apilist) {
      this.currentHouse = apilist;
      this.popupVisible = true;
    },
    changeFavoriteState() {
      let favoriteState = !this.currentHouse.Favorite;
      let message = `This item has been ${
        favoriteState ? 'added to' : 'removed from'
      } the Favorites list!`;
      this.currentHouse.Favorite = favoriteState;
      notify({
        message: message,
        width: 450
      },
      favoriteState ? 'success' : 'error', 2000
      );
    }
  }
};
</script>

<style>

.large-text {
    font-size: 24px;
    color: #ff6a50;
}
.opacity {
    opacity: 0.5;
}
.images {
    font-size: 0;
}
.images > div {
    display: inline-block;
    width: 33.3%;
    vertical-align: top;
}
.images .item-content {
    position: relative;
    margin: 5px;
    color: #fff;
    cursor: pointer;
}
.images .item-content > img {
    width: 100%;
}
.item-content .item-options {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.images .item-content:hover > .item-options {
    box-shadow: inset 0 0 0 2px #f05b41;
}
.item-content .item-options > div {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 64px;
    padding-top: 4px;
    background-color: rgba(19,32,51,0.8);
    z-index: 1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
}
.images .item-content:hover > .item-options > div {
    border-bottom: 2px solid #f05b41;
    border-left: 2px solid #f05b41;
    border-right: 2px solid #f05b41;
}
.item-content .item-options .address,
.item-content .item-options .price {
    max-width: 70%;
    padding-left: 8px;
}
.item-content .item-options .address {
    font-size: 14px;
}
.item-content .item-options .agent {
    font-size: 12px;
    width: 60px;
    position: absolute;
    right: -2px;
    top: 0;
    bottom: 0;
    text-align: center;
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    line-height: 13px;
}
.item-content .item-options .agent > div:hover {
    color: #f05b41;
}
.item-content .item-options .agent img {
    display: block;
    width: 13px;
    height: 16px;
    margin: 8px auto 2px;
}
.agent-details > img, .agent-details > div {
    display: inline-block;
    vertical-align: top;
    line-height: 26px;
}
.agent-details > img {
    width: 40px;
    margin-right: 10px;
}
.agent-details .phone {
    font-size: 18px;
}
.popup-property-details {
    overflow: hidden;
    position: relative;
}
.popup-property-details .images {
    width: 700px;
}
.popup-property-details img {
    height: 205px;
    margin: 10px 10px 10px 0;
}
.dx-button.favorites {
    background-color: #f05b41;
    color: #fff;
    position: absolute;
    top: 5px;
    right: 0;
}
.dx-button.favorites .dx-icon {
    color: #fff;
}
.img-api{
    width: 40%!important;
}

</style>