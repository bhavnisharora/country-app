import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-light pt-5">
        <div className="container">
          <div className="row text-center text-md-start ">
            {/* About Section */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">About Us</h5>
              <p>
                We are dedicated to providing the best services to our
                customers. Stay connected and reach out for any inquiries or
                feedback.
              </p>
            </div>

            {/* Links Section */}
            <div className="col-md-4 mb-4 text-center">
              <h5 className="text-uppercase mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#about" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-light text-decoration-none"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-light text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-light text-decoration-none">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="text-md-end col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a
                  href="https://facebook.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook fa-lg"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter fa-lg"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram fa-lg"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="bg-dark text-center py-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
