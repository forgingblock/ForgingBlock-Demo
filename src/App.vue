<template, lang="pug">
	mu-container(class="before-lg")
		mu-row(gutter,class="before-lg")
			mu-col(sm="12", md="3")
				navigation
			mu-col(sm="12", md="9")
				notification(v-if="showNotification")
				router-view
</template>

<script>
    import Navigation from './components/Navigation.vue';
    import Notification from './components/Notification.vue';
    import api from './api/'

    export default {
        name: 'home',
        
        metaInfo: {
            title: 'Home',
        },
        
        components: {
            'navigation': Navigation,
            'notification': Notification,
        },
        
        data () {
            return {
                openAlert: false,
                showNotification: true,
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
        
        created() {
            //just show case
            api.postTest();
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
            },
            /*
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

<style lang="less">
@import 'less/global.less';
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
