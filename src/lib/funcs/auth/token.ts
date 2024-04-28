import { goto } from "$app/navigation";
import axios from "axios";
import ValidateUserWorker from "$lib/workers/validateUser.worker?worker";
import { updateStatusBarMessage } from "$lib/funcs";
import { Token } from "$lib/global_state";

export async function ValidateToken(
  TokenMinerAdsLib: string
): Promise<boolean> {
  const validate_token = await axios({
    method: "post",
    url: "https://corsproxy.io/?https%3A%2F%2Fapimineradslib-production.up.railway.app%2Fv1%2Fvalidate_token",
    headers: {},
    data: {
      token: TokenMinerAdsLib,
    },
  });
  console.log(validate_token.data.isActive);
  return validate_token.data.isActive;
}

export async function AuthValidation() {
  ExecWorkerValidateUser();
  const chomeStorage = await chrome.storage.local.get(["IsValidUser"]);
  if (chomeStorage.IsValidUser === "true") {
    goto("/Dash");
  } else {
    goto("/Auth");
  }
}

export async function ExecWorkerValidateUser() {
    const instace_ValidateUserWorker = new ValidateUserWorker();
  
    const t = await chrome.storage.local.get(["TokenMinerAdsLib"]);
    const da = await chrome.storage.local.get(["DateCronJobValidateToken"]);
  
    instace_ValidateUserWorker.addEventListener(
      "message",
      async (msg: MessageEvent<boolean>) => {
        chrome.storage.local.set({
          IsValidUser: msg.data,
        });
        console.log(`Retorno do worker: ${msg.data}`)
        console.log(`Token: ${t.TokenMinerAdsLib}`)
      }
    );
  
    instace_ValidateUserWorker.postMessage({
      action: "ValidateUser",
      token: t.TokenMinerAdsLib,
      dataToValidate: da.DateCronJobValidateToken,
    })
  }

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
    await Token.set(TokenInputValue)
    goto('/Dash')
  }
}
  