/** @format */

import React , {useEffect} from "react";
import AboutSection from "../Component/Partial/Find Work Component/AboutSection";
import Banner from "../Component/Partial/Find Work Component/Banner";
import ContactUsForm from "../Component/Partial/Find Work Component/contact-us-form";
import HeadingCont from "../Component/Partial/heading-cont";

const FindWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="find-work-conatiner">
      <Banner />
      <HeadingCont
        title={"Contact Us"}
        content={"Use the form below to get in touch."}
      />
      <ContactUsForm />
      <HeadingCont
        title={"Why Join us?"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut lectus pellentesque purus fermentum gravida. Integer accumsan feugiat diam, quis elementum arcu ultricies non. In odio ex, ultricies at urna eu, iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget dignissim urna. Sed at purus quis dolor lacinia consectetur"
        }
      />
      <AboutSection />
      <div className="pt-5"></div>
    </div>
  );
};

export default FindWork;
