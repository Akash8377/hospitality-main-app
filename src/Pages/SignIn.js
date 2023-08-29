/** @format */

import React , { useEffect} from "react";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import UserSelection from "../Component/Partial/Sign In Component/user-selection";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="signin-container">
      <HeadingCont title={"Continue Signing In with"} content={""} />
      <UserSelection />
      <Newsletter />
      <div className="pt-5"></div>
    </div>
  );
};

export default SignIn;
