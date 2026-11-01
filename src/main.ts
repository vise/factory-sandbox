import { splitBill } from "./split";

const form = document.querySelector<HTMLFormElement>("#split-form")!;
const error = document.querySelector<HTMLParagraphElement>("#error")!;
const shares = document.querySelector<HTMLOListElement>("#shares")!;

const field = (id: string) => document.querySelector<HTMLInputElement>(`#${id}`)!.value;
const toCents = (text: string) => Math.round(Number(text) * 100);
const format = (cents: number) => (cents / 100).toFixed(2);

function render(): void {
  error.textContent = "";
  shares.replaceChildren();
  try {
    const result = splitBill(toCents(field("total")), Number(field("people")), Number(field("tip")));
    for (const cents of result) {
      const item = document.createElement("li");
      item.textContent = format(cents);
      shares.append(item);
    }
  } catch (e) {
    if (!(e instanceof RangeError)) throw e;
    error.textContent = e.message;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
});
render();
