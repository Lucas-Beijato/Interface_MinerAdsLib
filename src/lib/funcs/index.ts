import { goto } from "$app/navigation";
import ValidateUserWorker from "$lib/workers/validateUser.worker?worker";
import MetaStatusWorker from "$lib/workers/statusMetaService.worker?worker";
import axios from "axios";
import { StatusMetaServices } from "$lib/global_state";
import { type WorkerMessageType } from "$lib/interfaces";
import { StatusBarMessage } from "$lib/global_state";

export async function ExecWorkerMetaStatus() {
  const MetaWorker = new MetaStatusWorker();

  MetaWorker.addEventListener(
    "message",
    async (msg: MessageEvent<WorkerMessageType>) => {
      StatusMetaServices.update((state) => {
        return {
          ...state,
          Ad_Library_Report: msg.data.ad_library_report,
          Pub_Date_ALR: msg.data.pub_date_alr,
          Ad_Library: msg.data.ad_library,
          Pub_Date_AL: msg.data.pub_date_al,
        };
      });
    }
  );

  MetaWorker.postMessage("LoadDataMetaStatus");
}

export const getTabs = async (): Promise<{ tabNumber: number; tabURL: string; }> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id !== undefined && tab.url !== undefined) {
    return { tabNumber: tab.id, tabURL: tab.url };
  }
  return { tabNumber: 0, tabURL: "" };
};

export async function ExecWorkerValidateUser() {
  const instace_ValidateUserWorker = new ValidateUserWorker();

  const t = await chrome.storage.local.get(["TokenMinerAdsLib"]);
  const da = await chrome.storage.local.get(["DateCronJobValidateToken"]);

  instace_ValidateUserWorker.addEventListener(
    "message",
    async (msg: MessageEvent<boolean>) => {
      console.log("Retorno do worker")
      chrome.storage.local.set({
        IsValidUser: msg.data,
      });
    }
  );

  instace_ValidateUserWorker.postMessage({
    action: "ValidateUser",
    token: t.TokenMinerAdsLib,
    dataToValidate: da.DateCronJobValidateToken,
  })
}

export async function AuthValidation() {
  ExecWorkerValidateUser()
  const chomeStorage = await chrome.storage.local.get(["IsValidUser"]);
  if (chomeStorage.IsValidUser === "true") {
    goto("/Dash");
  } else {
    goto("/Auth");
  }
}

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

export function updateStatusBarMessage(color: string, text: string) {
    StatusBarMessage.update((state) => {
      return {...state, Color: color, Text: text}
    })
}