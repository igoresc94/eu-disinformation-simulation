import { html } from '../app/lib/htm-preact.js'
import { EU_Parties } from './data.js';

export const Parties = () => {
  return html`
    <div>
      <h2>Updated European Union Parties</h2>

      <table style="margin-top:20px; border:1px solid black; border-collapse:collapse;">
        <thead>
          <tr>
            <th style="border:1px solid black; padding:5px;">Party</th>
            <th style="border:1px solid black; padding:5px;">Seats</th>
          </tr>
        </thead>
        <tbody>
          ${EU_Parties.map(
            (party) => html`
              <tr key=${party.id}>
                <td style="border:1px solid black; padding:5px;">${party.name}</td>
                <td style="border:1px solid black; padding:5px;">${party.seats}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  `;
};