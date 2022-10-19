<template>
    <article class="table-area">
        <div class="title">
            <h5>{{table.title}} <span v-if="$route.path === '/orders/vieworder'">{{table.tBody.length}}<span></h5>
            <ul class="table-btns">
                <li class="search-area">
                    <button type="submit" class="search-icon"></button>
                    <input type="search" placeholder="Search">
                </li>
                <li class="filter-btn btn">
                    <button class="filter-icon" @click.stop="toggleBtn('filterPop')">Filter</button>
                    <filter-popup></filter-popup>
                </li>
                <li class="date-btn btn">
                    <button class="calendar2-icon">Filter</button>
                </li>
                <li class="share-btn btn">
                    <button class="sand-icon">Share</button>
                </li>
                <li class="action-btn">
                    <select-box
                        :select-data = selectData.tableSelect01
                    ></select-box>
                </li>
            </ul>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th v-for="tHead in table.tHead" 
                            :key="tHead.id + tHead.class" 
                            :class="tHead.class" 
                        >
                        <template v-if="tHead.type === 'check'"><input type="checkbox"></template>
                        <template v-else-if="tHead.type === 'none'"></template>
                        <template v-else>
                            <span>{{tHead.name}}</span>
                            <img src="assets/images/table/sort.png" alt="sort icon">
                        </template>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tBody in table.tBody"
                        :key="tBody.id"
                    >
                        <td v-for="(name,i) in tBody.name"
                            :key="i" 
                        >
                            <template v-if="name.check === true"><input type="checkbox"></template>
                            <template v-else-if="name.router === true"><router-link :to="{name:name.path}">{{name.txt}}</router-link></template>
                            <template v-else-if="name.select === true">
                                <select-box
                                    :select-data = tBody.tableSelcet
                                ></select-box>
                            </template>
                            <template v-else>
                                <b v-html="name.txt" v-if="name.txt" :class="name.class"></b>
                                <img v-if="name.img === true" :src="'assets/images/table/'+ name.src +'.png'" :alt="name.src+' img'">
                            </template> 
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination" v-if="table.tBody.length >= 8">
                <div class="paging">
                    <select-box
                        :select-data = selectData.pageSelect01
                    ></select-box>
                    <p class="txt">Items per page</p>
                    <p><span>1-10</span> of <span>200</span> items</p>
                </div>
                <div class="paging">
                    <select-box
                        :select-data = selectData.pageSelect02
                    ></select-box>
                    <p>of <span>44</span> pages</p>
                    <div class="btns">
                        <button>
                            <img src="assets/images/table/Arrow-Left.png" alt="left icon">
                        </button>
                        <button>
                            <img src="assets/images/table/Arrow-Right.png" alt="right icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
module.exports = {
    methods: {
        toggleBtn(payload){
            this.$store.commit('toggleBtn', payload)
        },
    },
    computed: {
        selectData() {
            return this.$store.getters["selectData"].selectBox
        }
    },
    components: {
        'select-box' : SelectBox,
        'filter-popup' : FilterPopup,
    },
    props: {
        table : Object
    },
}
</script>