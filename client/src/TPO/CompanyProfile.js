import React from "react";
import { Link } from "react-router-dom";

// import SvgIcon from "../components/SvgIcon";
import JobCard from "../components/JobCard";
import {BASE_URL} from "../CONSTANTS";

async function getAllJobs(compId) {
  try {
    const data = await fetch(`${BASE_URL}/companies/${compId}/jobs`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    });
    const retData = await data.json();
    console.log("data", retData);
    return retData;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "error, please check console for details";
  }
}

class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      compId: "",
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const compId = url.replace("/companies/", "");
    // this.setState({id:ret});                                                              gvbv h

    getAllJobs(compId).then((val) => {
      this.setState({
        jobs: val,
        compId: compId,
      });
    });
  }

  render() {
    const jobcard = this.state.jobs.map((val) => {
      console.log(val);
      // let val = value.toObject();
      val.deadlineDate = "Applied";
      return (
        <Link to={`/companies/${this.state.compId}/jobs/${val._id}`}>
          <JobCard key={val._id} details={val} />
        </Link>
      );
    });

    return (
      <div
        style={{
          padding: "120px 20px 80px",
          maxWidth: "60%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div className="company-details">
          <p>
            Adipisicing proident non quis quis eiusmod ex eu consectetur
            exercitation proident occaecat nulla. Sit quis anim consectetur
            laboris quis id aliquip. Laboris do incididunt fugiat cupidatat
            dolor dolore minim ipsum eiusmod commodo pariatur. Aliqua laborum
            dolor labore reprehenderit labore minim laboris adipisicing elit
            tempor.
          </p>
          <br />
          <p>
            Et consectetur minim velit incididunt eiusmod labore consequat
            excepteur esse exercitation ullamco ipsum. Duis esse enim commodo
            eiusmod ullamco. Excepteur dolore eiusmod aute ad quis. Elit aliqua
            ex pariatur eu dolor quis dolore adipisicing fugiat. Labore sunt
            sunt magna exercitation cillum elit proident velit sint fugiat
            fugiat ea cillum laboris. Proident sunt eu dolor laboris adipisicing
            consectetur occaecat officia aute. Aliquip ad velit minim proident.
          </p>
          <br />
          <p>
            Proident adipisicing Lorem consequat dolor aliquip cupidatat irure
            nulla officia ut. Commodo consectetur officia qui consectetur duis
            qui exercitation deserunt incididunt elit. Commodo quis consectetur
            cillum culpa Lorem ullamco nulla voluptate. Commodo pariatur laboris
            eu cupidatat sunt laboris veniam excepteur veniam eiusmod. Amet do
            dolor est amet id mollit laboris sit dolor esse exercitation.
          </p>
        </div>

        <div className="job-offers mt-7">
          <p>
            <b>Jobs Offered</b>
          </p>
          {jobcard}
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
