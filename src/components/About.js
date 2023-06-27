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
            <p>
            "👋 Hey there, awesome visitors! Welcome to my little corner of the internet!
              <br />
              <br />
              Welcome to my portfolio website! I'm Chetan, a <strong>Computer Science graduate</strong> with both a <strong>Masters</strong> and <strong>Bachelors degree</strong>. With a strong passion for<strong>application development</strong>, I specialize in crafting software solutions for <strong>desktop</strong>, <strong>web</strong>, and <strong>mobile</strong> platforms. Over the years, I've had the opportunity to work on diverse projects that demonstrate my expertise and skills. 
              <br />
              <br />
              With <strong>1+ years of industrkjfsdfsdahjkjhky experience</strong> and a solid coding and development background spanning <strong>5+ years</strong>, I am ready to create innovative solutions and bring your ideas to life. If you're interested in hiring me or have an exciting offer, please feel free to reach out to me through my social media channels. Let's connect and collaborate on something amazing together!

            </p>
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
