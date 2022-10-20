<template>
    <div class="settings">
        <section>
            <div class="nav">
                <ul>
                    <li>
                        <router-link :to="{name:'account'}" exact>Account</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'business'}" exact>Business</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'security'}" exact>Security</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </section>
    </div>
</template>