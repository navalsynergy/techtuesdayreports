import React, { useState , useRef} from "react";
import "../result.css";
import { Pie, Bar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const Result = (props) => {
  const location = useLocation();
  const [rawdata, setrawData] = useState(location.state);
  let content_rating_score = rawdata[0].content_rating_score;
  let overall_rating_score = rawdata[0].overall_rating_score;
  let presenting_skills_rating_score =
    rawdata[0].presenting_skills_rating_score;
  let overall_sentiment_score = rawdata[0].overall_sentiment_score;
  console.log(content_rating_score);
  const data = {
    labels: Object.keys(content_rating_score),
    datasets: [
      {
        label: "Content Rating",
        data: Object.values(content_rating_score),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data1 = {
    labels: Object.keys(overall_rating_score),
    datasets: [
      {
        label: "Overall rating Score",
        data: Object.values(overall_rating_score),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: Object.keys(presenting_skills_rating_score),
    datasets: [
      {
        label: "Content Rating",
        data: Object.values(presenting_skills_rating_score),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
    labels: Object.keys(overall_sentiment_score),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(overall_sentiment_score),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const componentRef = useRef();

  return (
    <>
    <ReactToPrint
    trigger={() => <a href="javascript:void">Print this out!</a>}
    content={() => componentRef.current}
  />
    <div class="piechartbackground" ref={componentRef}>
      <div class="ui grid" >
        <div class="four wide computer sixteen wide mobile eight wide tablet column Tlabel">
          <div class="ui segment">
            <Pie data={data} width={100} height={100} />
          </div>
          <label className="TlabelA">Content Rating Score</label>
        </div>
        <div class="four wide computer sixteen wide mobile eight wide tablet column Tlabel">
          <div class="ui segment">
            <Pie data={data1} width={100} height={100} />
          </div>
          <label className="TlabelA">Overall Rating Score</label>
        </div>
        <div class="four wide computer sixteen wide mobile eight wide tablet column Tlabel">
          <div class="ui segment">
            <Pie data={data2} width={100} height={100} />
          </div>
          <label className="TlabelA">Presenting Skills Rating Score</label>
        </div>
        <div class="four wide computer sixteen wide mobile eight wide tablet column Tlabel">
          <div class="ui segment">
            <Bar data={data3} id="overall Sentiment" width={100} height={100} />
          </div>
          <label className="TlabelA">Overall Sentiment Score</label>
        </div>
      </div>
    </div>
    </>
  );
};

export default Result;
