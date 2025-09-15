import { EU_Countries, EU_Parliament_Seats } from './data.js';
import { html, useState } from '../app/lib/htm-preact.js'

export const EUPartiesByCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const seatsData = EU_Parliament_Seats.find(
    (item) => item.country === selectedCountry
  );

  const partiesOrder = [
    "European People's Party",
    "Progressive Alliance of Socialists & Democrats",
    "Renew Europe",
    "Greens/European Free Alliance",
    "European Conservative and Reformists",
    "Identity and Democracy",
    "The Left in the European Parliament"
  ];

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const totalSeats = seatsData
    ? partiesOrder.reduce((sum, party) => sum + (seatsData[party] ?? 0), 0) +
      (seatsData.NI ?? 0)
    : 0;

  return html`
    <div>
      <h2>EU Parliament Seats by Country</h2>
      <select onChange=${handleChange} value=${selectedCountry}>
        <option value="">Select a country</option>
        ${EU_Countries.map(
          (country) =>
            html`<option value=${country.name}>${country.name}</option>`
        )}
      </select>

      ${seatsData &&
      html`
        <table style="margin-top:20px; border:1px solid black; border-collapse:collapse;">
          <thead>
            <tr>
              <th style="border:1px solid black; padding:5px;">Party</th>
              <th style="border:1px solid black; padding:5px;">Seats</th>
            </tr>
          </thead>
          <tbody>
            ${partiesOrder.map(
              (party) => html`
                <tr>
                  <td style="border:1px solid black; padding:5px;">${party}</td>
                  <td style="border:1px solid black; padding:5px;">
                    ${seatsData[party] ?? 0}
                  </td>
                </tr>
              `
            )}
            <tr>
              <td style="border:1px solid black; padding:5px;">Non-Inscrits (NI)</td>
              <td style="border:1px solid black; padding:5px;">
                ${seatsData.NI ?? 0}
              </td>
            </tr>
            <tr>
              <td style="border:1px solid black; padding:5px;"><strong>Total Seats</strong></td>
              <td style="border:1px solid black; padding:5px;"><strong>${totalSeats}</strong></td>
            </tr>
          </tbody>
        </table>
      `}
    </div>
  `;
};