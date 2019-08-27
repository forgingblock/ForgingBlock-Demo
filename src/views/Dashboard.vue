<template>
    <div>
        <info style="margin-bottom: 30px;"></info>
        <mu-paper align-items justify-content :z-depth="1" class="demo-list-wrap">
            <mu-list>
                <mu-list-item avatar button :ripple="false">
                    <mu-list-item-action>
                        <mu-avatar>
                            <img src="data:image/png;base64,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">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Bitcoin</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-button small color="primary">Connect wallet</mu-button>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item avatar button :ripple="false">
                    <mu-list-item-action>
                        <mu-avatar>
                            <img src="data:image/png;base64,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">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Ethereum</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-button small color="primary">Connect wallet</mu-button>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item avatar button :ripple="false">
                    <mu-list-item-action>
                        <mu-avatar>
                            <img style="background: white;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDQ3IDY0Ij48cGF0aCBmaWxsPSIjMkM3REY3IiBkPSJNMzAuMjUyIDYzLjQ0MWMtNC41NSAwLTcuODY0LTEuMDg5LTkuOTQ2LTMuMjY3LTIuMDgtMi4xNzctMy4xMjEtNC41MjUtMy4xMjEtNy4wNDEgMC0uOTIuMTgxLTEuNjk0LjU0NC0yLjMyM2EzLjk5MyAzLjk5MyAwIDAgMSAxLjQ4OS0xLjQ4OWMuNjI5LS4zNjMgMS40MDMtLjU0NCAyLjMyMy0uNTQ0LjkyIDAgMS42OTMuMTgxIDIuMzIzLjU0NC42MjkuMzYzIDEuMTI1Ljg2IDEuNDg4IDEuNDg5LjM2My42MjkuNTQ0IDEuNDAzLjU0NCAyLjMyMyAwIDEuMTEzLS4yNjYgMi4wMi0uNzk4IDIuNzIyLS41MzMuNzAyLTEuMTYyIDEuMTYxLTEuODg4IDEuMzguNjMuODcgMS42MjIgMS40ODcgMi45NzcgMS44NSAxLjM1NS4zODggMi43MS41ODEgNC4wNjUuNTgxIDEuODg3IDAgMy41OTMtLjUwOCA1LjExOC0xLjUyNCAxLjUyNC0xLjAxNyAyLjY1LTIuNTE3IDMuMzc2LTQuNTAxLjcyNi0xLjk4NCAxLjA4OS00LjIzNSAxLjA4OS02Ljc1MiAwLTIuNzM0LS40LTUuMDctMS4xOTgtNy4wMDUtLjc3NS0xLjk2LTEuOTI0LTMuNDEyLTMuNDQ5LTQuMzU2YTkuMjEgOS4yMSAwIDAgMC00LjkzNi0xLjQxNWMtMS4xNjIgMC0yLjYxMy40ODQtNC4zNTYgMS40NTJsLTMuMTk0IDEuNTk3di0xLjU5N0wzNy4wNzYgMTYuNEgxNy4xODV2MTkuODljMCAxLjY0Ni4zNjMgMy4wMDEgMS4wODkgNC4wNjZzMS44MzkgMS41OTcgMy4zNCAxLjU5N2MxLjE2IDAgMi4yNzQtLjM4NyAzLjMzOS0xLjE2MmExMS44MDMgMTEuODAzIDAgMCAwIDIuNzU4LTIuODNjLjA5Ny0uMjE5LjIxOC0uMzc2LjM2My0uNDczYS43MjMuNzIzIDAgMCAxIC40NzItLjE4MWMuMjY2IDAgLjU4LjEzMy45NDQuNC4zMzkuMzg2LjUwOC44MzQuNTA4IDEuMzQyYTkuMjQzIDkuMjQzIDAgMCAxLS4xODIgMS4wMTdjLS44MjIgMS44MzktMS45NiAzLjI0Mi0zLjQxMiA0LjIxYTguNDU3IDguNDU3IDAgMCAxLTQuNzkgMS40NTJjLTQuMzA4IDAtNy4yODUtLjg0Ny04LjkzLTIuNTQtMS42NDUtMS42OTUtMi40NjgtMy45OTQtMi40NjgtNi44OTdWMTYuNEguMDUydi0zLjcwM2gxMC4xNjR2LTguNDJMNy44OTMgMS45NTJWLjA2Nmg2Ljc1MWwyLjU0IDEuMzA2djExLjMyNWwyNi4yOC0uMDcyIDIuNjE0IDIuNjEzLTE2LjExNiAxNi4xMTZhMTAuODA3IDEwLjgwNyAwIDAgMSAzLjA0OS0uNzI2YzEuNzQyIDAgMy43MDIuNTU3IDUuODggMS42NyAyLjIwMiAxLjA4OSAzLjg5NiAyLjU5IDUuMDgxIDQuNSAxLjE4NiAxLjg4OCAxLjk0OCAzLjcwMyAyLjI4NyA1LjQ0NS4zNjMgMS43NDMuNTQ1IDMuMjkxLjU0NSA0LjY0NiAwIDMuMDk4LS42NTQgNS45NzctMS45NiA4LjY0LTEuMzA3IDIuNjYxLTMuMjkxIDQuNjQ1LTUuOTUzIDUuOTUyLTIuNjYyIDEuMzA3LTUuNTQyIDEuOTYtOC42MzkgMS45NnoiLz48L3N2Zz4=">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Tezos</mu-list-item-title>
                    <mu-list-item-action style="display: flex;">
                        <h2>0.00</h2>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>

    import info from '../components/infoPanel';

    export default {
        name: "Dashboard.vue",
        metaInfo: {
            title: 'Home',
        },
        components: {
            'info': info,
        },
    }

</script>

<style lang="scss">
    .demo-list-wrap {
        width: 100%;
        max-width: 100%;
    }
    .mu-avatar {
        margin-right: 30px;
        img {
            width:  40px;
            height: 40px;
        }
    }
</style>

