// import React from 'react';
import '../css/App.css';
import shangVid from "../videos/sample.webm";
import { HiArrowRight } from 'react-icons/hi';

function About() {
  return (
    <div className="About">
      <section id="about" className="p-4 row d-flex">
        <div className="col-md-7 col-lg-6 col-xl-6 d-inline-flex flex-column mb-4">
          <span className="mb-2 display-6">Working towards excellence in ensuring Digital Governance in Nepal.</span>
          <p className="mb-5">See how local governments are automated using software like DOT NET to deliver services more efficiently.
            This is the third line. This is a good line.</p>
          <a href="{{ route('about') }}" style={{ maxWidth: 'max-content' }} className="btn btn-primary rounded-0 d-inline-flex gap-3">
            <span>Get to know Shangrila</span>
            <span className="align-self-center">< HiArrowRight /></span>
          </a>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <video width="100%" height="100%" poster="/images/overview.jpg" controls>
            <source src={shangVid} type="video/webm"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>

  );
}

export default About;
