<template>
    <div class="finder-bar-container">
        <ul class="left-bar">
            <li class="mac-come" @click="triggerNav()">🍎</li>
            <li>访达</li>
            <li>文件</li>
            <li>编辑</li>
            <li>显示</li>
            <li>前往</li>
            <li>窗口</li>
            <li>帮助</li>
        </ul>
        <div class="mac-come-container" v-if="macComeContainer">
            <div class="mac-come-list">关于本机</div>
            <div class="mac-come-list">系统偏好设置</div>
            <div class="mac-come-list">App Store</div>
            <div class="mac-come-list">最近使用的项目</div>
            <div class="mac-come-list">强制退出</div>
            <div class="mac-come-list">睡眠</div>
            <div class="mac-come-list">重新启动</div>
            <div class="mac-come-list">关机</div>
        </div>

        <ul class="right-bar">
            <li>访达</li>
            <li>文件</li>
            <li>编辑</li>
            <li>显示</li>
            <li>前往</li>
            <li>窗口</li>
            <li>帮助</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            macComeContainer: false
        }
    },
    methods: {
        triggerNav() {
            this.macComeContainer = !this.macComeContainer
        }
    }
}
</script>

<style scoped lang="less">
.finder-bar-container {
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 25px;
    line-height: 25px;
    background: hsla(0, 0%, 100%, 0.25);
    color: black;
    font-size: 15px;
    font-weight: bolder;
    .left-bar {
    }
    .right-bar {
    }
    .mac-come-container {
        position: absolute;
        left: 5px;
        top: 25px;
        text-align: left;
        padding: 0 10px;
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: hsla(0, 0%, 100%, 0.45);
        border-radius: 5px;
        .mac-come-list {
            border-radius: 5px;
            cursor: pointer;
            margin: 6px 0;
            padding: 0 10px;
            &:hover {
                background: #417fe6;
                color: #fff;
            }
        }
    }
    ul {
        display: flex;
        li {
            cursor: pointer;
            margin: 0 10px;
        }
    }
}
</style>