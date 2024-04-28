import MetaStatusWorker from "$lib/workers/statusMetaService.worker?worker";
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

export function updateStatusBarMessage(color: string, text: string) {
    StatusBarMessage.update((state) => {
      return {...state, Color: color, Text: text}
    })
}