<template>
    <div>
        <b-navbar type="primary" variant="primary">
            <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/product/list" class="nav-menu">Product</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/product/add" class="nav-menu">Add</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/register" class="nav-menu">Register new admin</router-link></b-nav-item>
            <b-nav-item><a href="#" class="nav-menu" @click.prevent="logout">Logout</a></b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push("/")
        }
    },
    computed: {
        isLogin() {
            return this.$store.state.isLogin
        }
    }
}
</script>

<style>
    .nav-menu {
        color: white;
    }
</style>