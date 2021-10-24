import React from "react";
import "./Section.css";
function FirstSection() {
  return (
    <div id="firstsec">
      <section className="row">
        <article className="col-6">
          <h1 className="header">We Are Everything We Aspire To BE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
            turpis eget ipsum malesuada dignissim
          </p>
          <button className="btn-start">Get Started</button>
        </article>
        <article className="col-6">
          <img src="./web.png" className="img-fluid" alt="" />
        </article>
      </section>
      <section className="sec">
        <div className="row">
          <div className="offset-1 col-1">
            <p className="" id="user">
              <p className="p"></p>
            </p>
          </div>
          <div className="">
            <span className="content">90+</span>
            <p className="content-paragraph">Users</p>
          </div>
        
        <div className="row offset-2">
          <div className="col-6">
            <p className="" id="user">
              <p className="p"></p>
            </p>
          </div>
          <div className="col-2">
            <span className="content">30+</span>
            <p className="content-paragraph">Locations</p>
          </div>
        </div>
        <div className="row offset-2">
          <div className="col-6">
            <p className="" id="user">
              <p className="p"></p>
            </p>
          </div>
          <div className="col-2">
            <span className="content">50+</span>
            <p className="content-paragraph">Servers</p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
