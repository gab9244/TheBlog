import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="ToPage">
      <img
        src="https://media.licdn.com/dms/image/D4D12AQF6mW4EuB-99Q/article-cover_image-shrink_720_1280/0/1692951785182?e=2147483647&v=beta&t=I6_1-aBTAg0fihJHret-C4hRNuffBu8JyrqKfXsm74w"
        alt="coding"
        width={400}
      />
      <div className="context">
        <h2>How to find a job as a back-end developer</h2>
        <div className="info">
          <Link className="author" to="#">
            Gabriel
          </Link>
          <time>03/21/2024 16:36</time>
        </div>
        <p>
          If you having been studing back-end leaguages for some time at think
          that i time to look for a job let me give you some advices
        </p>
      </div>
    </section>
  );
};

export default Section;
