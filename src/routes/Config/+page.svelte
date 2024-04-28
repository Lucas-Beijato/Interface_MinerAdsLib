<script lang="ts">
  import { goto } from "$app/navigation";
  import { updateStatusBarMessage } from "$lib/funcs";
  import { Token } from "$lib/global_state";
  import { onMount } from "svelte";
  let token: string;

  onMount(async () => {
    Token.subscribe((value) => {
      token = value;
    });
  });

  async function Reset_Token() {
    updateStatusBarMessage("red", "Token excluido!");
    await chrome.storage.local.set({
      TokenMinerAdsLib: "",
    });
    Token.set("");
    await chrome.storage.local.set({
      IsValidUser : false
    });
    goto("/Auth");
  }

  async function ToGoBack() {
    let token: string = "";
    Token.subscribe((value) => {
      token = value;
    });
    if (token === "") {
      goto("/Auth");
    } else {
      goto("/Dash");
    }
  }
</script>

<div class="w-80 h-fit flex flex-col justify-center items-center rounded-md">
  <div class="flex justify-start items-start mb-2 w-full">
    <button
      class="text-white font-bold p-2 bg-cust_light_grey1 rounded-md"
      on:click={ToGoBack}>Voltar</button
    >
  </div>
  <div class="bg-cust_light_grey1 rounded-md p-2 w-full">
    <h3 class="text-white font-bold">Token Ativo:</h3>
    <p class="text-white break-words mb-2">{token}</p>
    <button
      class="bg-cust_orange rounded-sm p-1 text-white font-bold"
      on:click={Reset_Token}>Reset Token</button
    >
  </div>
</div>
