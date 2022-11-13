<script setup lang="ts">
export interface Article {
    id: string
    title: string
    body: string
}
const props = defineProps<Article>()
</script>

<template>
    <div class="container mx-auto  w-full bg-base-100 ">

        <figure class=" "><img class="object-contain w-screen" src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div class="card-body">
            <NuxtLink :to="`/article/${props.id}`">
                <h2 class="font-bold  text-2xl">{{ props.title }}</h2>
            </NuxtLink>
            <p>{{ props.body }}</p>
            <div class="card-actions justify-end">
            </div>
        </div>
    </div>
</template>