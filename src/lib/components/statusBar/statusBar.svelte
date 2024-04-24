<script lang="ts">
  import { StatusBarMessage } from "$lib/global_state";
  let text: String = "";
  let color: String = "";

  StatusBarMessage.subscribe((state) => {
    text = state.Text;
    color = state.Color;
  });
</script>

<p
  id="MessageBar"
  style={`background-color: ${color || "#292929"};`}
  class="text-white font-semibold text-center w-80 p-2 rounded-md bg-cust_light_grey1"
>
  {text}
</p>
