<template>
    <i class="iconfont color" :class="fontClass"></i>
</template>

<script>
const classMap = {
    download: "icon-yunduanxiazai",
    wengao: "icon-wengao",
    desktop: "icon-zhuomian",
    singal: 'icon-hot-spot-signal',
    folder: 'icon-a-wenjianjiawenjian',
    downArrow: 'icon-xiajiantou',
};
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        fontClass() {
            return classMap[this.type];
        },
    },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_3167460_iovncywhck.css";
.iconfont {
    color: inherit;
    font-size: inherit;
}
.color {
    color: blue;
}
</style>