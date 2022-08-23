<template>
<body class="w-screen h-screen bg-blue-100">
  <div class="grid justify-items-center">
      <img class="w-100%" src="/assets/img/spacemonkey.jpg" alt="space monkey">
      <h1 class="text-black text-4xl font-bold text-center">MRT</h1>
      <form class="grid m-1" action="loginForm">
        <label for="email">Email</label>
        <input class="my-1 border-solid border-2 border-black" type="email" name="email" placeholder="Please enter your email" required></input>
        <label for="password">Password:</label>
        <input class=" my-1 border-solid border-2 border-black" type="text" name="password" placeholder="Please enter your password" required></input>
        <button class="rounded-md p-2 my-1 bg-black text-white">LOGIN</button>
      </form>
    </div>
</body>
    
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
