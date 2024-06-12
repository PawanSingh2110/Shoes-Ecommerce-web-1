import React from "react";
import patter from "../assets/footer.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-evenly items-center">
        <div className="mt-20">
          <h2 className="text-4xl font-bold">
            L
            <span className="bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
              uxeStep
            </span>
          </h2>
          <p className="text-sm  text-neutral-600 mt-4">
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing .
          </p>
          <img src={patter} alt="" className="h-28 w-32 rounded-lg mt-4" />
        </div>

        <div className="flex mt-20">
          <div className="">
            <h1 className="font-semibold text-2xl mr-20 ">learn more</h1>
            <ul>
              <li className=" text-neutral-600 cursor-pointer">about us</li>
              <li className=" text-neutral-600 cursor-pointer">latest item</li>
              <li className=" text-neutral-600 cursor-pointer">hot offer</li>
              <li className=" text-neutral-600 cursor-pointer">
                popular design
              </li>
              <li className=" text-neutral-600 cursor-pointer">FAQ</li>
              <li className=" text-neutral-600 cursor-pointer">
                Private policy
              </li>
              <li className=" text-neutral-600 cursor-pointer"></li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold  text-2xl mr-20">Our Community</h1>
            <ul>
              <li className=" text-neutral-600 cursor-pointer">
                Terms and Condition
              </li>
              <li className=" text-neutral-600 cursor-pointer">
                Special offer item
              </li>
              <li className=" text-neutral-600 cursor-pointer">hot offer</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-2xl">Contact us</h1>
            <ul>
              <li className=" text-neutral-600 cursor-pointer">
                Phone no :7400034444
              </li>
              <li className=" text-neutral-600 cursor-pointer">
                Email id : nike@123.com
              </li>
              <li className=" text-neutral-600 cursor-pointer">Inquery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center text-2xl cursor-pointer">
      <FontAwesomeIcon icon={faYoutube}   className="ml-5"/>
      <FontAwesomeIcon icon={faInstagram} className="ml-5"/>
      <FontAwesomeIcon icon={faFacebook}  className="ml-5"/>
      <FontAwesomeIcon icon={faTwitter}   className="ml-5"/>
      <FontAwesomeIcon icon={faLinkedin}  className="ml-5"/>

      </div>
      <h1 className="text-center mt-4">All Right reserved |©
</h1>
    </footer>
  );
};

export default Footer;
