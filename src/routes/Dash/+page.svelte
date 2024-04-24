<script lang="ts">
    import StatusMetaService from "$lib/components/StatusMetaService/status_Meta_Service.svelte";
    import { updateStatusBarMessage } from "$lib/funcs";
    import { ExecScript } from "./funcs";

    updateStatusBarMessage("", "Preencha os campos e vamos começar!")
  </script>
  
  <div class="w-80 h-fit flex flex-col justify-center items-center rounded-md">
    <div class="bg-cust_light_grey1 mb-2 w-full rounded-md">
      <form
        class="flex flex-col w-full h-full p-4"
        id="form"
        on:submit={ExecScript}
      >
        <div class="my-1">
          <label class="text-white text-base mb-1" for="valor"
            >Valor para filtro:</label
          >
          <input
            class="border-cust_orange border-2 p-1 w-full rounded-md text-white bg-cust_light_grey1"
            type="text"
            name="valor"
            id="valorInput"
          />
          <p class="italic text-white text-xs">
            *Referente-se: X usam esse criativo e esse texto.
          </p>
        </div>
  
        <div class="my-1">
          <label class="text-white text-base mb-1" for="URLinput"
            >URL para filtro:</label
          >
          <input
            class="border-cust_orange border-2 p-1 w-full rounded-md text-white bg-cust_light_grey1"
            type="text"
            name="url"
            id="URLinput"
          />
          <p class="italic text-white text-xs">
            *Referente-se: Ao link do anúncio.
          </p>
        </div>
  
        <button
          class="text-white w-[100px] bg-cust_orange hover:scale-105 transition duration-150 ease-in-out rounded-sm px-2 font-bold text-base"
          >Filtrar</button
        >
      </form>
    </div>
    <StatusMetaService/>
  </div>
  