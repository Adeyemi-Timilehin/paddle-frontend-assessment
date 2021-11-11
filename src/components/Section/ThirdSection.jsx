import React from "react";

function ThirdSection() {
  return (
    <div className="my-5">
      <div className="text-center">
        <h3>Choose Your Plan</h3>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="row mt-5 text-center ">
        <div className="col-3 mr-5 divider">
          <div className="mb-5">
            <img src="./pricing3.png" alt="" />
            <h5>Free Plan</h5>
            <ul id="nav-list">
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
            </ul>
          </div>
          <h6>Free</h6>

          <button className="btn-divider">Select</button>
        </div>
        <div className="col-3 mr-5 divider">
          <div className="mb-5">
            <img src="./pricing2.png" alt="" />
            <h5>Standard Plan</h5>
            <ul id="nav-list">
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
            </ul>
          </div>
          <h6>$9 / mo</h6>

          <button className="btn-divider">Select</button>
        </div>
        <div className="col-3 divider">
          <div className="mb-5 ">
            <img src="./pricing1.png" alt="" />
            <h5>Premium Plan</h5>
            <ul id="nav-list">
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
              <li>Mauris sem neque</li>
            </ul>
          </div>
          <h6>$12 / mo</h6>

          <button className="btn-divider--premuim">Select</button>
        </div>
      </div>
      <div className="paddle-top">
        <div className="text-center mb-5">
          <h2>Get Started With Paddle Today</h2>
          <p>
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
            ante egestas ullamcorper
          </p>
          <button className="btn-paddle">Start Today</button>
        </div>

        <div className="row">
          <div className="partner col-3">NETFLIX</div>
          <div className="partner col-3">
            <span className="partner-round"></span>
            reddit
          </div>
          <div>
          </div>
        </div>
        <div className="text-center my-5">
          <h3>Trusted by Thousands of Happy Customer</h3>
          <p>
            Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse
            et suscipit est, nec laoreet mi. Nunc pellentesque imperdiet
            ultricies.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-3 testimonial">
            <div className="row">
              <img className="mr-3 ml-3" src="./1.png" alt="" />
              <div>
                <h4>Viezh Robert</h4>
                <p>Warsaw, Poland</p>
              </div>
              <p className="ml-3 p-size">
                4.5 <img src="./Vector.png" alt="" srcset="" />
              </p>
            </div>
            <p>
              <q>
                {" "}
                Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex
              </q>
            </p>
          </div>
          <div className="col-3 testimonial">
            <div className="row">
              <img className="mr-3 ml-3" src="./2.png" alt="" />
              <div>
                <h4>Yessica Christy</h4>
                <p>Shanxi, China</p>
              </div>
              <p className="ml-3 p-size">
                4.5 <img src="./Vector.png" alt="" srcset="" />
              </p>
            </div>
            <p>
              <q>
                {" "}
                Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex
              </q>
            </p>
          </div>
          <div className="col-3 testimonial">
            <div className="row">
              <img className="mr-3 ml-3" src="./3.png" alt="" />
              <div>
                <h4>Kim Young Jou</h4>
                <p>Seoul, South Korea</p>
              </div>
              <p className="ml-3 p-size">
                4.5 <img src="./Vector.png" alt="" srcset="" />
              </p>
            </div>
            <p>
              <q>
                {" "}
                Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex
              </q>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
