<template>
    <div>
        <mu-flex class="flex-wrapper" justify-content="end">
            <mu-flex class="flex-demo" justify-content="center" >
                <mu-button style="margin-bottom:20px;" class="is-right" fab small right color="primary">
                    <mu-icon value="add"></mu-icon>
                </mu-button>
            </mu-flex>
        </mu-flex>
        <mu-container style="padding: 0;">
            <mu-paper :z-depth="1">
                <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
                    <template slot-scope="scope">
                        <td>{{scope.row.name}}</td>
                        <td class="is-right">{{scope.row.info}}</td>
                        <td class="is-right">
                            <mu-button small>
                            delete<mu-icon right value="delete"></mu-icon>
                            </mu-button>
                        </td>
                    </template>
                </mu-data-table>
            </mu-paper>
        </mu-container>
    </div>
</template>



<script>

    export default {
    name: 'Stores',
    data () {
        return {
            sort: {
                name: '',
                order: 'asc'
            },
            columns: [
                { title: 'Store ID',    name: 'name' },
                { title: 'Info',        name: 'info',   align: 'right', sortable: false},
                { title: '',      name: 'button',        align: 'right', sortable: false }
            ],
            list: [
                {
                    name: '#33123123',
                    info: 'Et pluribus unum',
                },
                {
                    name: '#111113123',
                    info: 'Lorem ipsum',
                },
                {
                    name: '#001',
                    info: 'Pupsy lorem et al',
                }
            ]
        };
    },
    methods: {
        handleSortChange ({name, order}) {
            this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
        }
    },
    components: {
    }
};
</script>


<style scoped>

</style>
