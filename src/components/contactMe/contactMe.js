import "./contactMe.css";
import { MailOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function ContactMe() {
  return (
    <div className="contact-me-page-container" id="contact-me-page-container">
      <div className="contact-me-form-container" id="contact-me-page-container">
        <div className="contact-me-title-container">
          <MailOutlined style={{ fontSize: "25px" }} />
          <span>Contact Me</span>

          <p>Let me know how I can help!</p>
        </div>

        <form
          name="contact-me"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label>
              First Name: <input type="text" name="first-name" />
            </label>
          </div>
          <div>
            <label>
              Last Name: <input type="text" name="last-name" />
            </label>
          </div>
          <div>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className="contact-me-social">
        <p>
          Don't want to use the contact form? <br></br>Here are my social media
          links:
        </p>
        <div className="contact-me-icons">
          <a href="https://twitter.com/Steven_c2">
            <FontAwesomeIcon
              icon={brands("twitter")}
              className="twitter-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/steven-cheung321/">
            <FontAwesomeIcon
              icon={brands("linkedin")}
              className="linkedin-icon"
            />
          </a>

          <a href="https://github.com/StevenCK1">
            <FontAwesomeIcon icon={brands("github")} className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
