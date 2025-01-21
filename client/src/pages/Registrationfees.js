import React from "react";
import "./Registrationfees.css";
import feeStructure from "../assets/images/registration/Feestructure.jpg"; // New table image
import qrImage from "../assets/images/registration/qr.png"; // QR code image
import Footer from "../Components/Footer/Footer";

const Registrationfees = () => {
  return (
    <div className="registration-fees-container">
      <h1 className="page-title">Registration Guidelines</h1>

      <section className="online-registration-section">
        <h2 className="section-title">Online Registration</h2>
        <p className="section-description">
          The following documents must be submitted during the online registration process:
        </p>
        <ul className="bullet-list">
          <li>Registration Fee: The registration fee must be paid on the official website.</li>
          <li>
            Original Team List: Downloaded from the website during registration. It should include the College/University Stamp and the Signature of Director/Sports staff in-charge/Principal.
          </li>
          <li>For non-engineering pool entries, the signature and stamp should be from the respective school the students are from.</li>
        </ul>
      </section>

      <section className="on-ground-verification-section">
        <h2 className="section-title">On-Ground Verification</h2>
        <p className="section-description">
          The following documents must be submitted during on-ground verification:
        </p>
        <ul className="bullet-list">
          <li>
            Each player must carry their original ID cards, a hard copy or DigiLocker version of their identity cards (Aadhar, PAN, Driving Licence, Birth Certificate, or Passport), ERP IDs on the college’s online portal, a signed and stamped bonafide certificate, and a copy of the current year’s fee receipt.
          </li>
          <li>ID Card: Each player must carry the hard copy of the unique IDs, specific to their college, valid for the Academic year 2024-25.</li>
          <li>All the details must be clearly visible on the ID cards. Xerox copies are NOT acceptable.</li>
          <li>Fee Receipt: Each player must carry a copy of their fee receipt valid for the academic year 2024-25.</li>
          <li>ERP: Each player must have their ERP/Digital ID cards active on their college portals.</li>
          <li>Bonafide: Signed by the Sports In-charge/Principal of your institution.</li>
          <li>Original Government-Issued Photo ID: For identity verification (Digital or Xerox copies are not accepted).</li>
          <li>
            Registration Fee: Paid on the website <a href="https://sportssummit.info" target="_blank" rel="noopener noreferrer">sportssummit.info</a>.
          </li>
          <li>
            The Registration team has the right to NOT allow a team to participate in case of failure to submit all the required documents.
          </li>
          <li>
            In case of objection taken by the opposition, the team will be required to arrange the original documents within the time period of 24 hours.
          </li>
        </ul>
      </section>

      <section className="important-dates-section">
        <h2 className="section-title">Important Dates</h2>
        <p className="date-detail"><strong>Last Date of Entry for Cricket:</strong> 15-02-25</p>
        <p className="date-detail"><strong>Last Date of Entry for Remaining Events:</strong> 20-02-25</p>
        <p className="registration-restriction">
          <strong>Note:</strong> Entries are strictly on a first-come, first-served basis. Please ensure timely registration.
        </p>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Registration In-Charge</h2>
        <p className="section-description">Aryaki Saykhedkar - 9112394920</p>
        <p className="section-description">Aryan Shinde - 8637754073</p>
        <p className="section-description">Ayaana Talwar - 7887886378</p>
        <p className="section-description">Pratibha Manyam - 8830339704 </p>
        <p className="section-description">For any queries, contact the registration team.</p>
      </section>

      <section className="fees-section">
        <h2 className="section-title">Registration Fee Payment</h2>
        <div className="image-container">
          <img src={feeStructure} alt="Fee Structure" className="fee-structure" /> {/* New table image */}
          <img src={qrImage} alt="QR Code" className="qr-image" /> {/* QR code image */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registrationfees;