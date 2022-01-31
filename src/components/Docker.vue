<template>
    <div class="dockor-container">
        <div class="dockor-item" v-for="(item, index) in dockerImg" :key="index">
            <DockerItem :imgSrc="item.imgSrc" @handleDockerItem="handleDockerItem()" />
        </div>
    </div>
</template>

<script>
import DockerItem from './DockerItem.vue';
import explorer from '../assets/docker/explorer.png'
import browser from '../assets/docker/browser.png'
import ControlPlanel from '../assets/docker/ControlPlanel.png'
import download from '../assets/docker/download.png'
import facetime from '../assets/docker/facetime.png'
import Launchpad from '../assets/docker/Launchpad.png'
import note from '../assets/docker/note.png'
import Visual_Studio_Code from '../assets/docker/Visual_Studio_Code.png'
import folder from '../assets/docker/folder.png'
import Trash_Full from '../assets/docker/Trash_Full.png'

import Calculator from '../assets/docker/Calculator.png'
import Chrome from '../assets/docker/Chrome.png'
import Terminal from '../assets/docker/Terminal.png'


export default {
    components: {
        DockerItem
    },
    data() {
        return {
            dockerImg: [
                { imgSrc: explorer, index: 0 },
                { imgSrc: browser, index: 1 },
                { imgSrc: download, index: 2 },
                { imgSrc: ControlPlanel, index: 3 },
                { imgSrc: facetime, index: 4 },
                { imgSrc: Launchpad, index: 5 },
                { imgSrc: note, index: 6 },
                { imgSrc: Visual_Studio_Code, index: 7 },
                { imgSrc: folder, index: 8 },
                { imgSrc: Terminal, index: 9 },

                { imgSrc: Calculator, index: 10 },
                { imgSrc: Chrome, index: 11 },
                { imgSrc: Trash_Full, index: 12 },
            ]
        }
    },
    methods: {
        handleDockerItem() {
            this.$emit('handleDockerItem')
        }
    }
}
</script>

<style scoped lang="less">
.dockor-container {
    height: 80px;
    background: hsla(0, 0%, 100%, 0.25);
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-around;
    .dockor-item {
        width: 80px;
        height: 80px;
    }
}
</style>