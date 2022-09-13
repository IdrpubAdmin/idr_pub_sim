<template>
    <div>
        <h1>
            <router-link to="/">
                <img src="images/Graph.png" alt="">
                <span>Metrix</span>
            </router-link>
        </h1>
        <nav>
            <ul>
                <li v-for="category">
                    <router-link to="/">
                        <img src="images/category.png" alt="">
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/orders">
                        Orders
                    </router-link>
                </li>
                <li>
                    <router-link to="/customers">
                        Customers
                    </router-link>
                </li>
                <li>
                    <router-link to="/inventory">
                        Inventory
                    </router-link>
                </li>
                <li>
                    <router-link to="/conversations">
                        Conversations
                    </router-link>
                </li>
                <li>
                    <router-link to="/settings">
                        Settings
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
module.exports = {
    
}
</script>