import { ejercicioreservas } from "./helpers/sistemaReservas";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`;

ejercicioreservas();
