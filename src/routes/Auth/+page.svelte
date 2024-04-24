<script lang="ts">
  import { ValidateTokenInputFront } from "./funcs";
</script>

<div
  class="w-80 h-80 flex flex-col justify-center bg-cust_light_grey1 items-center rounded-md"
>
  <form on:submit={ValidateTokenInputFront}
    class="flex flex-col w-full h-full justify-center items-center"
    id="AuthForm"
  >
    <label class="text-white text-lg mb-2" for=""
      >Entre com a chave de ativação!</label
    >
    <input
      class="border-cust_orange border-2 p-1 w-3/4 rounded-md text-white bg-cust_light_grey1 mb-2"
      id="Token"
      type="text"
    />
    <button
      class="text-white border-2 border-cust_orange hover:bg-cust_orange hover:scale-105 transition duration-150 ease-in-out rounded-md px-2 font-bold text-base"
      >Validar</button
    >
  </form>
</div>
