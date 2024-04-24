<script lang="ts">
  import { AuthValidation } from "$lib/funcs";
  import { onMount } from "svelte";

  async function setDateToValidate() {
    const d = new Date();
      const nextValidation: Date = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        d.getHours() + 2
      );
      await chrome.storage.local.set({
        DateCronJobValidateToken: nextValidation.toString(),
      });
  }

  onMount(async () => {
    await AuthValidation();
    
    const da = await chrome.storage.local.get(["DateCronJobValidateToken"]);
    if (da.DateCronJobValidateToken === undefined || da.DateCronJobValidateToken === "") {
      await setDateToValidate()
    }
 
    const now = new Date();
    const NextDate: Date = new Date(da.DateCronJobValidateToken);

    if (now >= NextDate) {
      await setDateToValidate()
    }
    
  });
</script>
