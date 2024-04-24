import { type WorkerMessageType } from "$lib/interfaces";

self.onmessage = async (event: MessageEvent) => {
  if (event.data === "LoadDataMetaStatus") {
    let messageObject: WorkerMessageType = {
      ad_library_report: "",
      pub_date_alr: "",
      ad_library: "",
      pub_date_al: "",
    };
    
    await fetch("https://corsproxy.io/?https%3A%2F%2Fads-transparency.api.metastatus.com%2Fservices")
      .then((response) => response.text())
      .then((data: string) => {
        let ObjectData = JSON.parse(data);
        messageObject.ad_library_report = ObjectData[1].service_status 
        let date_alr = new Date(ObjectData[1].time_in_utc)
        messageObject.pub_date_alr = `${date_alr.getDate()}/${date_alr.getMonth()}/${date_alr.getFullYear()} ${date_alr.getHours()}h${date_alr.getMinutes()}` 
        messageObject.ad_library = ObjectData[0].service_status
        let date_al = new Date(ObjectData[0].time_in_utc)
        messageObject.pub_date_al = `${date_al.getDate()}/${date_al.getMonth()}/${date_al.getFullYear()} ${date_al.getHours()}h${date_al.getMinutes()}`
      
      }).catch((error) => {
        console.error("Erro ao recuperar o feed RSS:", error);
      });

    self.postMessage(messageObject);
  }
};

export {};
