<template>
    <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-list>
            <router-link to="/">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="dashboard"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Wallets</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/stores">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="store_mall_directory"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Stores</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/invoices">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="receipt"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Invoices</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/history">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="history"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>History</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/payments">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="donut_large"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Payment URLs</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/crowdfunding">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="people"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Crowdfunding</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/integration">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="extension"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Integration</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <router-link to="/account">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="person"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Account</mu-list-item-title>
                </mu-list-item>
            </router-link>
            <mu-divider></mu-divider>
            <router-link to="/logout">
                <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="remove"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Logout</mu-list-item-title>
                </mu-list-item>
            </router-link>

        </mu-list>
    </mu-paper>

</template>

<script>
    export default {
        name: "Navigation.vue"
    }
</script>

<style lang="less">
    .mu-item-action {
        min-width: 33px;
    }
    a.router-link-exact-active {
        .mu-item-title, .mu-item-action {
            color: #2196f3;
        }
    }
</style>
