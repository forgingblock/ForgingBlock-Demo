<template>
    <div id="app" style="margin-top:20px;">
        <mu-container class="demo-container">
            <mu-row gutter style="margin-bottom:20px;">
                <mu-col sm="12" md="12">
                    <mu-flex class="flex-wrapper" justify-content="end">
                        <mu-flex class="flex-wrapper" justify-content="end">
                            <mu-button flat to="register" color="primary">Register</mu-button>
                        </mu-flex>
                        <mu-flex class="flex-demo" justify-content="end" >
                            <mu-button @click="openAlertDialog" flat color="primary">LOGIN</mu-button>
                            <mu-dialog title="Login to Forging Block" width="600" max-width="80%" :esc-press-close="true" :overlay-close="false" :open.sync="openAlert">
                                <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Close</mu-button>
                                <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                                    <mu-form-item label="username" prop="username" :rules="usernameRules">
                                        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                                    </mu-form-item>
                                    <mu-form-item label="password" prop="password" :rules="passwordRules">
                                        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                                    </mu-form-item>
                                    <mu-form-item>
                                        <mu-button color="primary" full-width style="margin:0;" @click="submit">Login</mu-button>
                                    </mu-form-item>
                                </mu-form>
                            </mu-dialog>
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
            return {
                openAlert: false,
                usernameRules: [
                    { validate: (val) => !!val, message: 'Username must be filled in'},
                    { validate: (val) => val.length >= 3, message: 'Username length greater than 3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: 'Password must be filled in'},
                    { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Password length must be greater than 3 and less than 10'}
                ],
                validateForm: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            openAlertDialog () {
                this.openAlert = true;
            },
            closeAlertDialog () {
                this.openAlert = false;
            },
            submit () {
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                });
            },/*
            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }*/
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
