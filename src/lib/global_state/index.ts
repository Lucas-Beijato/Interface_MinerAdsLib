import { writable } from "svelte/store";

export const StatusBarMessage = writable({
    Color: "",
    Text: "Tudo pronto para começar!"
})

export const StatusMetaServices = writable({
    Ad_Library_Report: "Loading...",
    Pub_Date_ALR: "Loading...",
    Ad_Library: "Loading...",
    Pub_Date_AL: "Loading...",
})

export const Token = writable("")