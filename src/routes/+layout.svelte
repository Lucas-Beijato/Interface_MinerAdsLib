<script lang="ts">
  import "../app.css";
  import StatusBar from "$lib/components/statusBar/statusBar.svelte";
  import { AuthValidation } from "$lib/funcs/auth/token";
  import { onMount } from "svelte";
  import { SetTokenState, Verify_date_to_validate } from "$lib/funcs";

  onMount(async () => {
    await AuthValidation();
    await SetTokenState();
    await Verify_date_to_validate();
  });

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Miner Ads Lib Extension" />
</svelte:head>

<div class="app bg-cust_dark_grey w-[342px] h-fit flex justify-center items-center flex-col">
  <section class="my-3">
    <div class="bg-cust_light_grey1 mt-1 mb-2 mx-3 rounded-md p-2 flex flex-row justify-center items-center">
      <h3 class="font-bold text-lg text-white w-1/2">Miner Ads Lib</h3>
      <div class="w-1/2 h-fit flex justify-end items-end">
        <a href="/Config" class="w-fit h-fit flex transition duration-150 hover:scale-110 bg-cust_light_grey2 rounded-md">
          <div class="hover:animate-spin-slow p-1">
            <svg enable-background="new 0 0 24 24" fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" id="fi_3524659"><path d="m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
          </div>
        </a>
      </div>
    </div>
    
    <div class="my-1 mx-3 rounded-md">
      <slot/>
    </div>
    
    <div class="bg-cust_light_grey1 mt-2 mb-1 mx-3 rounded-md">
      <StatusBar />
    </div>
    
  </section>
</div>

