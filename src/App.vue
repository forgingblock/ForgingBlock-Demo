<template>
    <div id="app" style="margin-top:20px;">
        <mu-container class="demo-container">
            <mu-row gutter style="margin-bottom:20px;">
                <mu-col sm="12" md="12">
                    <mu-flex class="flex-wrapper" justify-content="end">
                        <mu-flex class="flex-wrapper" justify-content="end">
                            <mu-button flat to="register" color="primary">Register</mu-button>
                        </mu-flex>
                        <mu-flex class="flex-wrapper" justify-content="end">
                            <mu-button flat to="login" color="primary">Login</mu-button>
                        </mu-flex>
                    </mu-flex>

                </mu-col>
            </mu-row>
            <mu-row gutter>
                <mu-col sm="12" md="3">
                    <navigation></navigation>
                </mu-col>
                <mu-col sm="12" md="9">
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
        data () {

        },
        methods: {

        }
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
