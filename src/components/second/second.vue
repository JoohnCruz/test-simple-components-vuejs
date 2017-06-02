<template>
    <div class="second">
        <h1>{{title}}</h1> 
    </div>
</template>

<script>
export default {
    name: 'second',
    data(){
        return {
            title: "This is the second component"
        }
    },
    methods: {
        sum(a, b){
            return a + b
        },
        getGithubUsers(name) {
            return this.$http.get(`https://api.github.com/users/${name}`)
        }
    }    
}
</script>