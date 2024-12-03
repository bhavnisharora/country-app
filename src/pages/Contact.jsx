import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    formData.preventDefault();
    const InputFormData = Object.fromEntries(formData.enteries());
    console.log(InputFormData);
  };

  return (
    <div className="container py-5">
      <p className="text-center mb-4 display-1">Contact Us</p>
      <div className="row mt-5">
        {/* Contact Form */}
        <div className="col-md-6 mb-6">
          <p className="fs-1 fw-bold text-capitalize">Get in Touch</p>
          <form action={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                placeholder="Your Email Address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                name="message"
                rows="5"
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              value="send"
              className="btn btn-primary w-100"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6 mb-6">
          <p className="fs-1 text-capitalize fw-bold mt-5 mt-md-0">
            Contact Information
          </p>
          <p className="mt-3">
            <i className="bi bi-geo-alt-fill me-2"></i> 123 Main Street,
            Anytown, USA
          </p>
          <p>
            <i className="bi bi-telephone-fill me-2"></i> +1 234 567 890
          </p>
          <p>
            <i className="bi bi-envelope-fill me-2"></i> contact@company.com
          </p>
          <h5 className="mt-4">Follow Us</h5>
          <div className="d-flex">
            <a href="#" className="btn btn-outline-primary btn-sm me-2">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-outline-primary btn-sm me-2">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-outline-primary btn-sm">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <h4 className="text-center mb-4">Our Location</h4>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509104!2d144.95373531590434!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dc352f420a0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1614125961234!5m2!1sen!2sus"
            title="Google Map"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
