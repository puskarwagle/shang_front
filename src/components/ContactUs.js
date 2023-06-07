// Custom css and bootstrap
import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/js/bootstrap.js';

function ContactUs() {
  return (
    <section id="contact" className=''>
      <h1>Contact us</h1>
      <div id="cMapForm" className="d-flex justify-content-center flex-md-row flex-sm-row flex-column d-sm-flex-column gap-5">

        <div className="gmap gmap-sm">
          <iframe
            title="Embedded Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.104023293115!2d85.33724784851069!3d27.701041176144106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a383b0d657%3A0xc015b104b0451efa!2sShangrila%20Microsystem!5e0!3m2!1sen!2snp!4v1679909937538!5m2!1sen!2snp&z=10"
            style={{ minWidth: '100%', border: '0', height: '100%' }}
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div id="cDetails" className="d-flex flex-column">
          <h5 className="mb-4">Shangrila Microsystem</h5>
          <span style={{ marginBottom: '0.5rem', color: '#4682B4', fontSize: '1rem' }}>Call Us</span>
          <span style={{ marginBottom: '1rem', fontSize: '1rem' }}>+977 - 01 – 4102850, 4102852</span>
          <span style={{ marginBottom: '0.5rem', color: '#4682B4', fontSize: '1rem' }}>Address</span>
          <span style={{ marginBottom: '1rem', fontSize: '1rem' }}>Maitidevi, Kathmandu, Nepal</span>
          <span style={{ marginBottom: '0.5rem', color: '#4682B4', fontSize: '1rem' }}>Email us</span>
          <span style={{ marginBottom: '1rem', fontSize: '1rem' }}>info@shangrilagroup.com.np</span>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;


