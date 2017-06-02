<template>
    <div class="first">
       <h1>{{title}}</h1> 
    </div>
</template>

<script>
export default {
    name: 'first',
    data(){
        return {
            title: 'This is the first component'
        }
    },
    methods: {
        message(){
            return 'This is the message'
        }
    }
    
}
</script>