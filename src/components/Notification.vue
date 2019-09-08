<template, lang="pug">
    mu-alert(color="info", class="db-notification")
        mu-icon(left value="info")
        span This is notification block
</template>

<script>
    export default {
        name: "Notification"
    }
</script>

<style lang="less", scoped>
    .db-notification {
        margin-bottom: 30px;
    }