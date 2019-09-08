<template>
    <mu-container class="demo-container">
        <info style="margin-bottom: 30px;"></info>
        <mu-row gutter>
            <mu-col sm="12" md="6">
                <mu-paper style="padding: 15px;" class="demo-paper" :z-depth="1">
                    <mu-container>
                        <h2 style="">New URL</h2>
                        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                            <mu-form-item prop="input" label="Amount">
                                <mu-text-field v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item prop="select" label="Select store">
                                <mu-select v-model="form.select">
                                    <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
                                </mu-select>
                            </mu-form-item>
                            <mu-form-item prop="input" label="Description">
                                <mu-text-field v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item prop="input" label="Count">
                                <mu-text-field v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item prop="input" label="Email">
                                <mu-text-field v-model="form.input"></mu-text-field>
                            </mu-form-item>
                            <mu-form-item>
                                <mu-button color="primary" @click="submit">create url</mu-button>
                                <mu-button @click="clear">reset</mu-button>
                            </mu-form-item>
                        </mu-form>
                    </mu-container>
                </mu-paper>
            </mu-col>
            <mu-col sm="12" md="6">
                <mu-paper style="padding: 15px;" class="demo-paper" :z-depth="1">
                    <mu-container>
                        <h2 style="">Item status</h2>
                    </mu-container>
                </mu-paper>

            </mu-col>
        </mu-row>
    </mu-container>
</template>

<script>
    import info from '../components/infoPanel.vue';

    export default {
        name: "Payments",
        
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
            'info': info,
        },
        
        methods: {
            clear() {
            },
            
            submit() {
            }
        }
    };
</script>

<style scoped>

</style>
