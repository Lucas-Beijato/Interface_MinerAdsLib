export function Filters(
  valueToFilter: string,
  URLToFilter: string,
) { // btnTitleToFilter: string
  
  // Aux Funcs
  function DeleteCard(item: HTMLElement) {
    if (item.parentElement !== undefined && item.parentElement !== null) {
      // item.parentElement.style.display = "none";
      item.parentElement.remove();
    }
    // item.style.display = "none";
    item.remove();
  }
  const ITEMS = document.querySelectorAll<HTMLElement>(
    'div[class="_7jvw x2izyaf x1hq5gj4 x1d52u69"]'
  );
  ITEMS.forEach((item) => {
    // Value of annoucements utilization
    if (valueToFilter !== "") {
      let value = parseInt(valueToFilter);
      let strong = item.querySelectorAll("strong");
      if (strong.length === 0) {
        DeleteCard(item);
        return;
      }
      if (item.innerText.includes("Inativo")) {
        DeleteCard(item);
        return;
      }
      let numberAnunc = parseInt(strong[0].innerText.replace(" anúncios", ""));
      if (numberAnunc < value) {
        DeleteCard(item);
        return;
      }
    }
    // Value of URL annoucements
    if (URLToFilter !== "") {
      const innerElements = item.querySelectorAll<HTMLElement>(
        'div[class="_4ik4 _4ik5"]'
      );
      if (innerElements[2] === undefined) {
        DeleteCard(item);
        return;
      }
      if (!innerElements[2].innerText.toLowerCase().includes(".com")) {
        DeleteCard(item);
        return;
      }
      if (
        innerElements[2].innerText
          .toLowerCase()
          .includes(URLToFilter.toLowerCase()) === false
      ) {
        DeleteCard(item);
        return;
      }
    }

  });
  // Force Load Page
  const btn_load_page = <HTMLElement>document.querySelector('a[class="_8n_3"]');
  if ( btn_load_page != null) {
    btn_load_page.click();
  }
}