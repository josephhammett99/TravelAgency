import React from 'react';


const Footer = () => {
  return (
    <div className="Footer">
      <div className=" footer-box">
        <div className="row">
          <div className="col-sm-3">
            <h3>Learn about us</h3>
            <p>Payment Plans</p>
            <p>Group Vacations</p>
            <p>Gift Cards</p>
          </div>
          <div className="col-sm-3">
            <h3>Let us help you</h3>
            <p>Customer Support</p>
            <p>FAQ</p>
            <p>Find A Travel Agent</p>
          </div>
          <div className="col-sm-3">
            <h3>Work with us</h3>
            <p>Careers</p>
            <p>Affiliate Program</p>
            <p>Travel Agent Sign In</p>
          </div>
          <div className="col-sm-3">
            <h3>Policies</h3>
            <p>Privacy Policy</p>
            <p>Baggage Policy</p>
            <p>Bill of Rights</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <p className="copyright">Copyright &copy;2020 Jimbo's Getaway Service</p>
          </div>
          <div className="col-sm-8">
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;