// import React from 'react';
import '../css/App.css';
import shangVid from "../videos/sample.webm";
import poster from "../images/overview.jpg";
import { HiArrowRight } from 'react-icons/hi';

function About() {
  return (
    <section id="about" className="p-3 p-sm-3 p-md-5 row d-flex">
      <div className="col-xl-6 col-md-8 col-sm-12 d-inline-flex flex-column mb-4">
        <span className="display-6 pb-5">Working towards excellence in ensuring Digital Governance in Nepal.</span>
        <p className="mb-5 mt-5 pt-5" style={{fontSize: '1.5rem'}}>See how local governments are automated using software like DOT NET to deliver services more efficiently.
          This is the third line. This is a good line.</p>
        <a href="{{ route('about') }}" style={{ maxWidth: 'max-content' }} className="btn btn-primary rounded-0 d-inline-flex gap-3">
          <span style={{fontSize: '1.5rem'}}>Get to know Shangrila</span>
          <span className="align-self-center">< HiArrowRight /></span>
        </a>
      </div>
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-0">
        <video width="100%" style={{minHeight: '100%'}} poster={poster} controls>
          <source src={shangVid} type="video/webm"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default About;
