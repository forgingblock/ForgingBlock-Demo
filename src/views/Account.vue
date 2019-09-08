<template>
    <mu-container class="demo-container">
        <h1>Account</h1>
        <mu-row gutter>
            <mu-col sm="12" md="6">
                <mu-paper style="padding: 15px;" class="demo-paper" :z-depth="1">
                    <mu-container>
                        <h2 style="">Email</h2>
                        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                            <mu-form-item prop="input" label="Email">
                                <mu-text-field disabled placeholder="whatagreatemail@email.xy" v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item prop="input" label="New email">
                                <mu-text-field v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item>
                                <mu-button color="primary" @click="submit">save</mu-button>
                            </mu-form-item>
                        </mu-form>
                    </mu-container>
                </mu-paper>
            </mu-col>
            <mu-col sm="12" md="6">
                <mu-paper style="padding: 15px;" class="demo-paper" :z-depth="1">
                    <mu-container>
                        <h2 style="">Password</h2>
                        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                            <mu-form-item prop="input" label="Password">
                                <mu-text-field disabled placeholder="● ● ● ● ● ● ● ● ● ● ● ●" v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item prop="input" label="New password">
                                <mu-text-field v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item>
                                <mu-button color="primary" @click="submit">save</mu-button>
                            </mu-form-item>
                        </mu-form>
                    </mu-container>
                </mu-paper>

            </mu-col>
        </mu-row>
    </mu-container>
</template>

<script>

    export default {
        name: "Account",
        
        data () {
            return {
                options: [
                    '#33123123', '#111113123', '#001'
                ],
                labelPosition: 'top',
                form: {
                    input: '',
                    select: '',
                    date: '',
                    radio: '',
                    checkbox: [],
                    switch: false
                }
            }
        },
        
        components: {
        },
        
        methods: {
            clear() {
            },
            
            submit() {
            }
        }
    }
</script>

<style scoped>

</style>
