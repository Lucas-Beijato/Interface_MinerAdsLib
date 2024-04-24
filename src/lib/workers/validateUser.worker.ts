import axios from "axios";

self.onmessage = async (event: MessageEvent) => {
  if (event.data.action === "ValidateUser") {

    let IsValid: boolean = false;

    const token: string = event.data.token
    const dateToValidate = new Date(event.data.dataToValidate)

    if (token === undefined || token === "") {
        IsValid = false
    } else {
        const requestAPI = await CronJobValidateToken(token, dateToValidate);

        if (requestAPI === "noValidate") {
          IsValid = true
        }

        if (requestAPI === true) {
            IsValid = true
        } 

        if (requestAPI === false) {
          IsValid = false
      }
    }

    async function CronJobValidateToken(
      TokenMinerAdsLib: string,
      dateToValidate: Date
    ): Promise<any> {
      const now = new Date();

      if (now >= dateToValidate) {
        const isValidToken = await ValidateToken(TokenMinerAdsLib);
        return isValidToken;
      }

      return "noValidate"
    }

    async function ValidateToken(
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
      return validate_token.data.isActive;
    }
    // Return
    self.postMessage(IsValid.toString());
  }
};

export {};
