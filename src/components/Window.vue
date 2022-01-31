<template>
    <div class="finder-window-container" v-if="!closeWindow">
        <div class="finder-window-left">
            <div class="indicator">
                <div class="indicator-list-wrapper">
                    <span class="indicator-list" @click="closeWindowFunc()"></span>
                    <span class="indicator-list"></span>
                    <span class="indicator-list"></span>
                </div>
            </div>
            <div class="personal-collection">
                <div class="head">
                    <span>个人收藏</span>
                    <Icon type="downArrow" />
                </div>
                <div class="personal-collection-list">
                    <div
                        class="personal-collection-list-item"
                        :class="listItemActive ? 'list-item-active' : none"
                        @click="clickItemActive()"
                    >
                        <Icon type="singal" />
                        <span>隔空投送</span>
                    </div>
                    <div class="personal-collection-list-item">
                        <Icon type="desktop" />
                        <span>桌面</span>
                    </div>
                    <div class="personal-collection-list-item">
                        <Icon type="folder" />
                        <span>文稿</span>
                    </div>
                    <div class="personal-collection-list-item">
                        <Icon type="download" />
                        <span>下载</span>
                    </div>
                    <div class="personal-collection-list-item">
                        <Icon type="wengao" />
                        <span>文件夹</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="finder-window-right">123</div>
    </div>
</template>

<script>
import Icon from './Icon.vue';
import { mapState } from 'vuex';
export default {
    components: {
        Icon
    },
    data() {
        return {
            listItemActive: true,
        }
    },
    computed: {
        ...mapState(['closeWindow'])
    },
    methods: {
        clickItemActive() {
            this.listItemActive = true;
        },
        closeWindowFunc() {
            this.$store.dispatch('closeWindow')
        }
    }
}
</script>

<style scoped lang="less">
.finder-window-container {
    display: flex;
    position: fixed;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);

    width: 60vw;
    height: 60vh;
    background: #f0f0f0;
    border-radius: 10px;
    .finder-window-left {
        width: 20%;
        height: 100%;
        border-radius: 10px;
        background: #e9d8d8;
        .indicator {
            border-radius: 10px;

            width: 100%;
            height: 50px;
            .indicator-list-wrapper {
                padding: 20px;
                .indicator-list {
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    margin: 0 5px;
                }
                .indicator-list:nth-of-type(1) {
                    background: red;
                }
                .indicator-list:nth-of-type(2) {
                    background: #f0b748;
                }
                .indicator-list:nth-of-type(3) {
                    background: #62c555;
                }
            }
        }
        .personal-collection {
            .head {
                display: flex;
                justify-content: space-between;
                padding: 0 10px;
                font-size: 10px;
                color: grey;
                padding-left: 15px;
                i {
                    font-size: 10px;
                }
            }
            .personal-collection-list {
                width: 100%;
                box-sizing: border-box;
                .list-item-active {
                    background: #d0c2be;
                }
                .personal-collection-list-item {
                    margin: 15px 5px;
                    cursor: pointer;
                    font-size: 13px;
                    padding: 8px;
                    border-radius: 8px;
                    span {
                        margin-left: 8px;
                    }
                }
            }
        }
    }
    .finder-window-right {
        height: 100%;
    }
}
</style>