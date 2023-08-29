/** @format */

import React , {useEffect} from "react";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import Banner from "../Component/Partial/StaffComponent/Banner";
import TrainingCourse from "../Component/Partial/StaffComponent/TrainingCourse";

const Staff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="staff-container">
      <Banner />
      <TrainingCourse />
      <HeadingCont title={"Consultancy"} content={""} />
      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <Newsletter />
      <div className="pt-5"></div>
    </div>
  );
};

export default Staff;
