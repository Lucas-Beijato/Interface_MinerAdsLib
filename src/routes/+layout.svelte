<script lang="ts">
  import "../app.css";
  import StatusBar from "$lib/components/statusBar/statusBar.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Miner Ads Lib Extension" />
</svelte:head>

<div class="app bg-cust_dark_grey w-[342px] h-fit flex justify-center items-center flex-col">
  <section class="my-3">
    <div class="bg-cust_light_grey1 mt-1 mb-2 mx-3 rounded-md p-2">
      <h3 class="font-bold text-lg text-white">Miner Ads Lib</h3>
    </div>
    
    <div class="my-1 mx-3 rounded-md">
      <slot/>
    </div>
    
    <div class="bg-cust_light_grey1 mt-2 mb-1 mx-3 rounded-md">
      <StatusBar />
    </div>
    
  </section>
</div>

