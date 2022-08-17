<template>
    <div class="content-title">
        <h3>{{subTitle}}<b>{{title}}</b></h3>
        <p>{{paragraph}}</p>
    </div>
</template>

<script>

export default {
    props: {
        subTitle : String,
        title : String,
        paragraph : String
    }
}
</script>