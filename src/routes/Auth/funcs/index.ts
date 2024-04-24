import { updateStatusBarMessage } from "$lib/funcs";
import { goto } from "$app/navigation";
import { ValidateToken } from "$lib/funcs";

export async function ValidateTokenInputFront(e: any) {
  e.preventDefault()

  updateStatusBarMessage("", "Aguarde, validando...")
  const TokenInputValue = <string>(
    (<HTMLInputElement>document.getElementById("Token")).value
  );

  const isValid = await ValidateToken(TokenInputValue)

  if (!isValid) {
    updateStatusBarMessage("red", "Inválido, adicione uma chave válida.")
    return
  }

  if (isValid) {
    await chrome.storage.local.set({
      TokenMinerAdsLib: TokenInputValue,
    });
    await chrome.storage.local.set({
      IsValidUser: "true",
    });
    goto('/Dash')
  }
}