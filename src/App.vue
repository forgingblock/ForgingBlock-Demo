<template>
    <div id="app" style="margin-top:40px;">
        <mu-container class="demo-container">
            <mu-row gutter>
                <mu-col span="3">
                    <navigation></navigation>
                    <div id="nav">
                        <router-link to="/">Home</router-link> |
                        <router-link to="/about">About</router-link>
                    </div>
                </mu-col>
                <mu-col span="9">
                    <router-view></router-view>
                </mu-col>
            </mu-row>
        </mu-container>
    </div>
</template>

<script>
    import navigation from './components/Navigation';

    export default {
        name: 'home',
        metaInfo: {
            title: 'Home',
        },
        components: {
            'navigation': navigation,
        },
    };

</script>


<style lang="scss">
    .demo-list-wrap {
        width: 100%;
        max-width: 260px;
    }
    #app {
        font-family: Roboto, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
