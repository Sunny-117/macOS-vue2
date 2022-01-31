<template>
    <div class="docker-item-container" @click="handleDockerItem">
        <img :src="imgSrc" />
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            require: true,
            type: String
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
.docker-item-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
        width: 90%;
        height: 90%;
        background-size: cover;
        border-radius: 5px;
        margin: 0 7px;
    }
}
@keyframes bottom {
    from,
    20%,
    53%,
    to {
        transform: translate3d(0, 0, 0);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    40%,
    43% {
        transform: translate3d(0, -35px, 0) scaleY(1.1);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    70% {
        transform: translate3d(0, -35px, 0) scaleY(1.05);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    80% {
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0) scaleY(0.95);
    }

    90% {
        transform: translate3d(0, -6px, 0) scaleY(1.02);
    }
}

@keyframes top {
    from,
    20%,
    53%,
    to {
        transform: translate3d(0, 0, 0);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    40%,
    43% {
        transform: translate3d(0, 35px, 0) scaleY(1.1);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    70% {
        transform: translate3d(0, 35px, 0) scaleY(1.05);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    80% {
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0) scaleY(0.95);
    }

    90% {
        transform: translate3d(0, 6px, 0) scaleY(1.02);
    }
}
</style>