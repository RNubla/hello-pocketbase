<script lang="ts" setup>
// import PocketBase from 'pocketbase';
// const client = new PocketBase('http://127.0.0.1:8090');

const email = ref('')
const password = ref('')

// admin authentication via email/pass
// const adminAuthData = await client.admins.authViaEmail('test@example.com', '123456');
const login = async () => {
    // const authData = await client.admins.authViaEmail(email.value, password.value);
    // console.log(authData)
}
</script>

<template>
    <div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
                <span>Email</span>
                <input v-model="email" type="text" placeholder="info@site.com" class="input input-bordered" />
            </label>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Password</span>
            </label>
            <label class="input-group">
                <span>Password</span>
                <input v-model="password" type="password" class="input input-bordered" />
            </label>
        </div>
        <button @click="login" class="btn">Login</button>
    </div>
</template>