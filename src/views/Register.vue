<template>
    <mu-container>
        <mu-paper style="padding: 15px;" class="demo-paper" :z-depth="1">
        <mu-row gutter>
            <mu-col sm="12" md="12">
                <mu-form style="padding: 20px;" ref="form" :model="validateForm">
                    <mu-flex class="flex-wrapper" justify-content="start">
                        <h2 style="color:#424058;">Registration</h2>
                    </mu-flex>
                    <mu-form-item label="email"  prop="email" :rules="emailRules">
                        <mu-text-field v-model="validateForm.email" id="email" prop="email"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item label="password" prop="password" help-text="Minimum 8 characters, maximum 64" :rules="passwordRules">
                        <mu-text-field type="password" v-model="validateForm.password" id="password" prop="password"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="isAgree" :rules="agreeRules">
                        <mu-checkbox label="By registering I agree with the terms and conditions" v-model="validateForm.isAgree"></mu-checkbox>
                    </mu-form-item>
                    <mu-form-item>
                        <mu-button style="margin-left: 0;" color="primary" @click='registerUser'>register</mu-button>
                        <mu-button @click="clear">reset</mu-button>
                    </mu-form-item>
                </mu-form>
            </mu-col>
        </mu-row>
        </mu-paper>
    </mu-container>

</template>

<script>
    import qs from 'qs';

    export default {
        name: "Register",
        data () {
            return {
                emailRules: [
                    { validate: (val) => !!val, message: 'Email must be filled in'},
                    { validate: (val) => val.length >= 3, message: 'Username length greater than 3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: 'Password must be filled in'},
                    { validate: (val) => val.length >= 8 && val.length <= 64, message: 'Password length must be greater than 11 and less than 64'}
                ],
                agreeRules: [{ validate: (val) => !!val, message: 'Must agree with user agreement'}],
                validateForm: {
                    email: '',
                    password: '',
                    isAgree: false
                }
            }
        },
        methods: {
            registerUser(){

                let password = document.getElementById('password').value;
                let email = document.getElementById('email').value;

                const rdata = qs.stringify({
                    "password": password,
                    "email": email
                });
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                });
                this.$store.dispatch('register', (rdata) ).then(()=>{
                    this.$router.push('/login');
                })
            },

            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    email: '',
                    password: '',
                    isAgree: true
                };
            }
        }
    };
</script>

<style scoped>

</style>
