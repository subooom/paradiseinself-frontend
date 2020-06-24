<template>
    <div class="main-content">
    </div>
</template>

<script>
    export default {
      name: 'Index',
      data(){
        return{
          user: {
            isLoggedIn: false
          },
        }
      },
      methods: {
        handleGoogleSignInSuccess(data){
          console.log(data)
        },
        handleGoogleSignInError(error){

        }
      }
    }
</script>
