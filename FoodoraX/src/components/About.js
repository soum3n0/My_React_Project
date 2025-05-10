import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div className ="about-style">
      <h1>About us</h1>
      <h4>
        we're passionate about making ordering food easy and enjoyable. We
        believe that everyone deserves access to delicious food, no matter where
        they are. Our mission is to provide a seamless and reliable platform for
        ordering and delivery, connecting you with your favorite restaurants and
        cuisines. We are a team of experienced professionals dedicated to
        providing the best possible user experience. Our app features a
        user-friendly interface, a wide variety of restaurants, and real-time
        order tracking. We value your satisfaction and are committed to
        continuous improvement.
      </h4>
      <User />
      <UserClass Name={"Soumen Dey"} Location="Amral" />
    </div>
  );
};

export default About;