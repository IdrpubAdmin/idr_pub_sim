<template>
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
                :key="tBody.id + tBody.name"
            >
                <td v-for="(name,i) in tBody.name"
                    :key="i" 
                    :class="name.class"
                >
                    <template v-if="name.check === true"><input type="checkbox"></template>
                    <template v-else-if="name.router === true"><router-link :to="{name:name.path}">{{name.txt}}</router-link></template>
                    <template v-else-if="name.select === true">
                        <select-box
                            :option="tBody.option"
                            :selected="tBody.selected"
                            :name="tBody.selName"
                        ></select-box>
                    </template>
                    <template v-else>
                        <b v-html="name.txt" v-if="name.txt"></b>
                        <img v-if="name.img === true" :src="'assets/images/table/'+ name.src +'.png'" :alt="name.src+' img'">
                    </template> 
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
module.exports = {
    components: {
        'select-box' : SelectBox,
    },
    props: {
        table : Object
    }
}
</script>