<template>
    <div class="right-trigger-container">
        <div class="right-list">新建文件夹</div>
        <div class="right-list">显示简介</div>
        <div class="right-list">更改桌面背景</div>
        <div class="right-list">使用叠放</div>
        <div class="right-list">排序方式</div>
        <div class="right-list">整理</div>
        <div class="right-list">整理方式</div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
.right-trigger-container {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    width: 150px;
    background: #edc6bb;
    border-radius: 10px;
    .right-list {
        margin: 10px 0;
        cursor: pointer;
        padding: 2px 10px;
        &:hover {
            color: #fff;
            background: #417fe6;
        }
    }
}
</style>