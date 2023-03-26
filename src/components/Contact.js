import React from "react";
import map from "../../src/images/map.png";

export default function Contact() {
  return (
    <div id="contact">
      <h1>Visit Us</h1>
      <hr />
      <h2>La Perla Di Pompano</h2>
      <p>420 N Federal Hwy, Pompano Beach, Florida 33062</p>
      <a
        aria-label="Get directions from Google maps"
        href="https://www.google.com/maps/dir//La+Perla+di+Pompano,+420+N+Federal+Hwy,+Pompano+Beach,+FL+33062/@26.2363136,-80.1027564,19.86z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88d9029ea7555e0f:0x6f7f28550f565202!2m2!1d-80.1026211!2d26.2364457!3e0"
        target="_blank"
        rel="noreferrer"
      >
        Directions
      </a>
      <p>
        Please call for Reservations and Information:
        <br />
        (754) 222-9174 or (248) 730-8872
      </p>
      <h3>Hours</h3>
      <p>
        Tuesday - Saturday: 5pm - 10pm
        <br />
        Sunday and Monday: Closed
        <br />
        Reservations are recommended.
      </p>
      <a
        aria-label="View restaurant location on Google maps"
        href="https://www.google.com/maps/place/La+Perla+di+Pompano/@26.2363136,-80.1027564,19z/data=!4m6!3m5!1s0x88d9029ea7555e0f:0x6f7f28550f565202!8m2!3d26.236445!4d-80.102623!16s%2Fg%2F1hm60r1z6"
        target="_blank"
        rel="noreferrer"
        className="map-link"
      >
        <img className="map" src={map} alt="Map of restaurant location" />
      </a>
    </div>
  );
}
