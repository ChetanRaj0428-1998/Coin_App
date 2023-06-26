import React, { Component } from "react";
//import { Icon } from "@iconify/react";
//import angularIcon from "@iconify/icons-logos/angular-icon";
//import reactIcon from "@iconify/icons-logos/react";
//import vueIcon from "@iconify/icons-logos/vue";
//import instaIcon from "@iconify/icons-logos/instagram-icon";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
     // var about = this.props.resumeBasicInfo.description;
    }

    return (
     <section id="about" className="padding">
  <div className="col-md-12">
    <h1 style={{ color: "black", fontSize: "20px", margin: "0px 00px 20px 0px" }}>
      <span>{sectionName}</span>
    </h1>
    <div className="row center mx-auto mb-5">
      <div className="col-md-4 mb-5 center">
        <div className="polaroid">
          <span style={{ cursor: "auto" }}>
            <img
              src={profilepic}
              alt="Avatar placeholder"
              className="full-width-image"
            />
          </span>
        </div>
      </div>

      <div className="col-md-8 center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <span
                className="iconify"
                data-icon="emojione:red-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <div
              className="card-body font-trebuchet text-justify ml-3 mr-3"
              style={{
                height: "auto",
                fontSize: "162%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="wave">{hello} :)</span>
              <br />
              <br />
              "👋 Hey there, awesome visitors! Welcome to my little corner of the internet!
              <br />
              <br />
              I'm Chetan, a Computer Science Masters graduate and Bachelors graduate - proudly holding multiple degrees like a boss! 🎓💪 I have a deep passion for crafting applications for 💻 desktop, 🌐 web, and 📱 mobile, and I've had a blast working on various projects that showcase my skills and expertise. 💻🚀
              <br />
              <br />
              👨‍💻I have 1+ years of industry experience and 5+ years of coding and development background. Ready to create tech wonders and turn your ideas into reality! ✨💼💻🚀. If you're interested in hiring me or have an exciting offer, you can reach me through my social media channels. Let's connect and create something amazing together! ✨🤝"
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
  }
}

export default About;
