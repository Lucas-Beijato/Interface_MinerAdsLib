<script lang="ts">
  import { type WorkerMessageType } from "$lib/interfaces";
  import { StatusMetaServices } from "$lib/global_state"; 
  import { ExecWorkerMetaStatus } from "$lib/funcs";
  import { onMount } from "svelte";

  let MetaStatus: WorkerMessageType = {
    ad_library_report: "",
    ad_library: "",
    pub_date_alr: "",
    pub_date_al: "",
  }

  StatusMetaServices.subscribe((state) => {
    MetaStatus.ad_library = state.Ad_Library;
    MetaStatus.ad_library_report = state.Ad_Library_Report;
    MetaStatus.pub_date_alr = state.Pub_Date_ALR;
    MetaStatus.pub_date_al = state.Pub_Date_AL;
  });

  onMount(() => {
    ExecWorkerMetaStatus();
  });
</script>

<div class="bg-cust_light_grey1 w-full mx-3 rounded-md p-4">
  <h3 class="text-white font-bold text-lg">Status dos serviços do Meta:</h3>
  <h4 class="text-white flex flex-row">
    <p class="font-semibold">Ad Library:&nbsp;</p>
    <p>{`${MetaStatus.ad_library}`}</p>
  </h4>
  <h4 class="text-white flex flex-row">
    <p class="font-semibold">Atualização:&nbsp;</p>
    <p>{`${MetaStatus.pub_date_al}`}</p>
  </h4>
  <h4 class="text-white flex flex-row">
    <p class="font-semibold">Ad Library Report:&nbsp;</p>
    <p>{`${MetaStatus.ad_library_report}`}</p>
  </h4>
  <h4 class="text-white flex flex-row">
    <p class="font-semibold">Atualização:&nbsp;</p>
    <p>{`${MetaStatus.pub_date_alr}`}</p>
  </h4>
  <button
    on:click={ExecWorkerMetaStatus}
    class="bg-cust_orange text-white mt-2 px-2 py-1 rounded-sm font-bold hover:scale-105 transition duration-150 ease-in-out"
    >Recarregar</button
  >
</div>
