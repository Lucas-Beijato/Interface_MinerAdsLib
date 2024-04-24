import { Filters } from "./filters";
import { updateStatusBarMessage } from "$lib/funcs";
import { getTabs } from "$lib/funcs";

async function LoadGlobalElements() {
  const { tabNumber, tabURL } = await getTabs();
  const isValidTab = await ValideteTab();
  return { tabNumber, tabURL, isValidTab };
}

async function ValideteTab() {
  const { tabURL } = await getTabs();
  if (tabURL.includes("facebook.com/ads/library/")) {
    return true;
  }
  return false;
}

export async function ExecScript(e: any) {
  e.preventDefault();
  const { isValidTab, tabNumber } = await LoadGlobalElements();

  if (isValidTab) {
    const INPUTVALUE = (<HTMLInputElement>document.querySelector("#valorInput"))
      .value;
    const INPUTURL = (<HTMLInputElement>document.querySelector("#URLinput"))
      .value;
    // const INPUTBUTTON = (<HTMLInputElement>(document.querySelector("#buttonTitle"))).value;

    chrome.scripting.executeScript({
      target: { tabId: tabNumber },
      func: Filters,
      args: [INPUTVALUE, INPUTURL],
    });
    updateStatusBarMessage("green", "Filtro aplicado!");
  } else {
    updateStatusBarMessage(
      "red",
      "Esta página não é a biblioteca de anuncios do Meta!"
    );
  }
}
