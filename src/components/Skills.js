import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skill, i) {
        return (
          <li
            className={`list-inline-item mx-3 bounce-animation`}
            key={i}
            style={{ "--index": i }}
          >
                   <div className="text-center skills-tile" style={{ height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center",paddingBottom: "-80px"  }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ position: "relative", marginTop:"15px" }}>
      <i className={skill.class} style={{ fontSize: "220%",paddingBottom: "-25px",marginBottom:"105px" }}></i>
      <img src={skill.class} alt="" style={{ height: "50px", padding: "0px", margin: "0px" }} />
      <p className="text-center" style={{ fontSize: "80%", marginTop: "8px", marginBottom: "30px" }}>
        {skill.name}
      </p>
    </div>
  </div>
</div>
          </li>
        );
      });

      
      var skills2 = this.props.sharedSkills.icons2.map(function (skill, i) {
        return (
          <li
            className={`list-inline-item mx-3 bounce-animation`}
            key={i}
            style={{ "--index": i }}
          >
            
            <div className="text-center skills-tile" style={{ height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center",paddingBottom: "-80px"  }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ position: "relative", marginTop:"15px" }}>
      <i className={skill.class} style={{ fontSize: "220%",paddingBottom: "-25px",marginBottom:"105px" }}></i>
      <img src={skill.class} alt="" style={{ height: "50px", padding: "0px", margin: "0px" }} />
      <p className="text-center" style={{ fontSize: "80%", marginTop: "8px", marginBottom: "30px" }}>
        {skill.name}
      </p>
    </div>
  </div>
</div>
          </li>
        );
      });

      var skills3 = this.props.sharedSkills.icons3.map(function (skill, i) {
        return (
          <li
            className={`list-inline-item mx-3 bounce-animation`}
            key={i}
            style={{ "--index": i }}
          >
            <div className="text-center skills-tile" style={{ height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center",paddingBottom: "-80px"  }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ position: "relative", marginTop:"15px" }}>
      <i className={skill.class} style={{ fontSize: "220%",paddingBottom: "-25px",marginBottom:"105px" }}></i>
      <img src={skill.class} alt="" style={{ height: "50px", padding: "0px", margin: "0px" }} />
      <p className="text-center" style={{ fontSize: "80%", marginTop: "8px", marginBottom: "30px" }}>
        {skill.name}
      </p>
    </div>
  </div>
</div>

            
          </li>
        );
      });
    }

    return (
      <section id="skills" className="padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="section-title text-center" style={{ fontSize:"20px", margin:"0px 00px 20px 0px"}}>
              <span class="text-white">{sectionName}</span>
            </h1>
          </div>
          <div class="col-12">
            <ul class="list-inline skill-icon wave-animation text-center" id="skills-list">
              {skills}
            </ul>
            <ul class="list-inline skill-icon wave-animation text-center" id="skills-list2">
              {skills2}
            </ul>
            <ul class="list-inline skill-icon wave-animation text-center" id="skills-list2">
              {skills3}
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    );
  }
}

export default Skills;
