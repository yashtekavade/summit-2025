import React from "react";
import Footer from "../Components/Footer/Footer";
import "./Instructions.css";

const Instructions = () => {
  return (
    <div>
      <div className="custom-box">
        <h1 className="custom-box-title">
          <center>IMPORTANT RULES</center>
          </h1>
        <p className="custom-box-subtitle">
          Please read the following rules carefully to ensure smooth
          participation and conduct during the event.
        </p>
      </div>
      <div className="rules-container">
        <ul className="rules-list">
          <li>
            Teams must report 30 minutes before the scheduled match time; late
            arrivals beyond 15 minutes will result in forfeiture.
          </li>
          <li>
            Kindly refer to the rulebook given for every respective sport.
            Misconduct (verbal or physical) on or off the field will lead to
            disqualification.
          </li>
          <li>
            Matches may be delayed due to unforeseen circumstances, with
            schedule changes at the discretion of organizers.
          </li>
          <li>
            The tournament is open to an age limit of under 27 years and a
            birthdate on or before the day of the tournament.
          </li>
          <li>
            Teams must submit a Unique ID (ERP) of their college in print and
            digital format before the event.
          </li>
          <li>
            Participants must provide their current year’s fee receipt, a
            bonafide certificate, team list, government ID, online college
            portal ID (ERP), and college ID at the time of registration.
          </li>
          <li>
            A minimum of four teams from different colleges is required for an
            event to take place.
          </li>
          <li>
            Each college can register only one team per event, with no multiple
            entries allowed.
          </li>
          <li>Changes to the team list are not permitted after registration.</li>
          <li>
            Matches will follow the Federation rules of the respective games.
          </li>
          <li>
            Referees’/umpires’ decisions are final; disputes must be raised by
            the team captain to the event organizers.
          </li>
          <li>
            Protests require a fee of Rs. 5000/- and must be submitted in
            writing within one hour of the match.
          </li>
          <li>
            All participants must wear sports uniforms and carry their college
            flags for the Inauguration Ceremony and participate in the March
            Past.
          </li>
          <li>
            First Aid Kits and an Ambulance will be provided, but the
            university/organizers will not be held responsible for injuries or
            mishaps.
          </li>
          <li>Refunds will not be issued under any circumstances.</li>
          <li>
            Prize money is subject to change based on the number of entries.
          </li>
          <li>
            The organizing committee reserves the right to debar any player/team
            for misconduct or failure to meet requirements.
          </li>
          <li>
            The organizing committee holds the right to amend the rules or
            schedule as necessary.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Instructions;
