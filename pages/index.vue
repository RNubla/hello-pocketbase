<script setup lang="ts">
export interface Article {
    id: number | string
    title: string
    body: string
}
// console.log($fetch('/api/hello'))
// $fetch('/api/hello').then((res) => console.log(res))
// const { data } = await useFetch<Article>("https://jsonplaceholder.typicode.com/posts", { initialCache: false })
// console.log(data.value)
const { data } = await useFetch<Article>("http://127.0.0.1:8090/api/collections/articles/records?page=1&perPage=30", { initialCache: false })
console.log(data.value.items)
</script>
<template>
    <div class=" flex flex-row gap-2">
        <div class="md:flex hidden w-64">Left</div>
        <ul class="grow flex flex-col gap-4">
            <li v-for="article in data.items" :key="article.id">
                <!-- {{ article.title }} -->
                <PostCard :id="article.id" :body="article.content" :title="article.title" />
            </li>
            <!-- <li v-for="article in data.value" :key="article.value.id">
            </li> -->
        </ul>
        <div class="lg:flex hidden w-64">Right</div>
    </div>
</template>

