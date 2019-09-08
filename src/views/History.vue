<template>
    <mu-container>
        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
            <mu-form-item prop="switch" label="Lightning invoices" >
                <mu-switch v-model="form.switch"></mu-switch>
            </mu-form-item>
        </mu-form>
        <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
            <div slot="header">Invoice #1</div>
            <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 26)">
                <template slot-scope="scope">
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.info}}</td>
                </template>
            </mu-data-table>
        </mu-expansion-panel>
        <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
            <div slot="header">Invoice #2</div>
            <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 26)">
                <template slot-scope="scope">
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.info}}</td>
                </template>
            </mu-data-table>
        </mu-expansion-panel>
        <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
            <div slot="header">Invoice #3</div>
            <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 26)">
                <template slot-scope="scope">
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.info}}</td>
                </template>
            </mu-data-table>
        </mu-expansion-panel>
    </mu-container>
</template>


<script>
    export default {
        name: "History",
        data () {
            return {
                panel: '',
                form: {
                    input: '',
                    select: '',
                    date: '',
                    radio: '',
                    checkbox: [],
                    switch: false
                },
                labelPosition: 'left',
                sort: {
                name: '',
                    order: 'asc'
                },
                columns: [
                    { title: 'Parameter',    name: 'name' },
                    { title: 'Value',        name: 'info',   align: 'right', sortable: false}
                ],
                list: [
                {
                    name: 'ReceivedDate',
                    info: '2019-04-05T14:01:24Z',
                },
                {
                    name: 'StoreId',
                    info: '2U27LEo88LrpeMJiqt',
                },
                {
                    name: 'OrderId',
                    info: 'null',
                },
                {
                    name: 'InvoiceId',
                    info: 'FKSuQreLNBo6RqVjYUVDTb',
                },
                {
                    name: 'InvoiceCreatedDate',
                    info: '2019-04-05T14:01:07Z',
                },
                {
                    name: 'PaymentId',
                    info: '096ad909d0c7611968aafa5a',
                },
                {
                    name: 'PaymentType',
                    info: 'OffChain',
                },
                {
                    name: 'CryptoCode',
                    info: '0.00397802',
                },
                {
                    name: 'InvoiceFullStatus',
                    info: 'complete',
                }
            ]
        };
        },
        methods: {
            toggle (panel) {
                this.panel = panel === this.panel ? '' : panel;
            },
            handleSortChange ({name, order}) {
                this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
            }
        }
    };
</script>

<style lang="less">
    .mu-form .mu-form-item-label {
        width: 140px !important;
    }

</style>
