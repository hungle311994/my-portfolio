import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" name="/contact">
      <div className="title">
        <h2>Contact Me</h2>
        <span>Get in touch</span>
      </div>

      <div className="detail">
        <div className="infor">
          <div className="item phone">
            <span>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span>(+84) 337 909 301</span>
          </div>

          <div className="item email">
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span>lequanghung311994@gmail.com</span>
          </div>

          <div className="item phone">
            <span>
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <span>Bay Hien Ward, Ho Chi Minh City</span>
          </div>

          <img src={require("../../assets/coder-1.png")} alt="" />
        </div>

        <form action="">
          <div className="form-item">
            <label>Name</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label>Email</label>
            <input type="mail" />
          </div>

          <div className="form-item">
            <label>Message</label>
            <textarea />
          </div>

          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
