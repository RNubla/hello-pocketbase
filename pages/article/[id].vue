<script lang="ts" setup>
const route = useRoute()
// const { data } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, { initialCache: false })
const { data } = await useFetch(`http://127.0.0.1:8090/api/collections/articles/records/${route.params.id}`, { initialCache: false })
// console.log(data.value.title)
// await definePageMeta({
//     title: data.value.title,
// })
</script>
<template>
    <div>
        <div>{{ data.title }}</div>
        <div>{{ data.content }}</div>
    </div>

</template>