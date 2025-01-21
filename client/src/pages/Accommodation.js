import React from "react";
import "./Accommodation.css"; // Make sure to create this CSS file for styling
import Footer from "../Components/Footer/Footer"; // Adjust the import path as necessary

const Accommodation = () => {
  return (
    <div className="accommodation-container">
      <h1 className="page-title">Accommodation Guidelines</h1>

      <section className="accommodation-section">
        <p className="section-description">
          Accommodation charges must be paid upon arrival at the MIT-WPU campus.
        </p>
        <ul className="bullet-list">
          <li>
            <strong>Accommodation Registration:</strong> If accommodation has not been pre-registered, MIT-WPU is not responsible for providing it.
          </li>
          <li>
            <strong>Registration on the Website:</strong> Registering for accommodation on the website indicates your interest but does not guarantee accommodation.
          </li>
          <li>
            <strong>Deposit:</strong> The deposit in cash would be required to be submitted upon arrival which may vary according to the number of rooms required by each team. This deposit will be refunded after the event concludes.
          </li>
          <li>
            <strong>Costs:</strong> Accommodation Availability: Accommodation will not be entertained after arrival if not registered beforehand.
          </li>
          <li>
            <strong>Extra Accommodation and Boarding:</strong> Additional accommodation and boarding facilities will be charged as applicable.
          </li>
          <li>
            <strong>Provided Amenities:</strong> MIT-WPU will provide mattresses and quilts.
          </li>
          <li>
            <strong>Help Desk:</strong> Report to the MIT-WPU, Kothrud Campus Help Desk for accommodation details.
          </li>
          <li>
            MIT-WPU will not be responsible for any loss of personal belongings.
          </li>
          <li>
            <strong>Misbehavior:</strong> MIT-WPU reserves the right to take punitive action in case of any misbehavior. The said actions may include:
            <ul>
              <li>The per head expenditure for accommodation, food (breakfast), and transport is Rs. 800/- per day.</li>
              <li>Additional arrangements can be made independently if needed.</li>
              <li>Confiscating the security deposit and registration fee.</li>
              <li>Cancelling the participation of the concerned college.</li>
              <li>Escorting the team off campus.</li>
              <li>Reporting misconduct to the head of the concerned institution.</li>
            </ul>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;