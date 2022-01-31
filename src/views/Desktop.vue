<template>
  <div class="desktop" @contextmenu.prevent="rightClickDisplay">
    <div>
      <Finder />
    </div>
    <div v-if="showWindow">
      <Window />
    </div>
    <div class="footer">
      <Docker @handleDockerItem="handleDockerItem()" />
    </div>
    <div class="right-key-trigger" v-if="showRightTriggerVue">
      <RightTrigger />
    </div>
  </div>
</template>

<script>
import Docker from '@/components/Docker';
import Finder from '@/components/Finder';
import Window from '@/components/Window';
import RightTrigger from '../components/RightTrigger';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Docker,
    Finder,
    Window,
    RightTrigger
  },
  data() {
    return {
    }
  },
  methods: {
    handleDockerItem() {
      this.$store.dispatch('showWindow')
    },
    rightClickDisplay() {
      console.log(123)
    }
  },
  computed: {
    ...mapState(['showWindow', 'showRightTrigger'])
  }
}
</script>

<style scoped lang="less">
.desktop {
  background: url("../assets/pic_desktop.jpg") center top no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  .footer {
    position: fixed;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
  }
}
</style>