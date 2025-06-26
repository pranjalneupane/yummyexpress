import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { IoTimeSharp } from "react-icons/io5";

function Contact() {
  return (
    <div className="mt-10 mx-40">
      <div className="text-center">
        <div>
          <i className="text-4xl text-green-700 font-bold font-[cursive]">
            Our Contact
          </i>
          <br />
          <br />
          <br />
          <p className="text-4xl text-gray-400">GET IN TOUCH</p>
          <br />
          <p className="text-2xl text-black font-medium">
            <span className="text-red-800">Our Friendly Team</span> would love
            to hear from you
          </p>
        </div>
        <div className="flex justify-between my-20">
          <div
            className="w-80 rounded-2xl p-6 font-semibold"
            style={{ boxShadow: "6px 6px 10px rgba(0,0,0,0.1)" }}
          >
            <div className="flex gap-2">
              <FaLocationDot className="text-orange-600 h-7 w-7" />
              <h1 className="font-bold">LOCATION</h1>
            </div>
            <p className="font-bold">
              New Baneshwor -41201,
              <br />
              Kathmandu, Bagmati, Nepal
            </p>
          </div>

          <div
            className="w-80 rounded-2xl p-6 font-semibold"
            style={{ boxShadow: "6px 6px 10px rgba(0,0,0,0.1)" }}
          >
            <div className="flex gap-2">
              <LuPhoneCall className="text-orange-600 h-7 w-7" />
              <h1 className="font-bold">PHONE</h1>
            </div>
            <div className="flex ">
            <div className="flex-2 w-10 h-auto">
              <p className="font-medium text-green-700">Mobile:</p><br /><br />
              <p className="font-medium text-green-700">Tel:</p>
            </div>
            <div>
              <p>
                ‪(+977) 9866137449‬ <br /> ‪(+977) 9818569763‬
              </p><br />
              <p>01-4724298492</p>
            </div>
            </div>
          </div>

          <div
            className="w-80 rounded-2xl"
            style={{ boxShadow: "6px 6px 10px rgba(0,0,0,0.1)" }}
          >
            <div className="flex gap-2">
              <IoTimeSharp className="text-orange-600 h-7 w-7" />
              <h1 className="font-bold">SERVICE TIME</h1>
            </div>
            <div className="flex justify-between p-6 font-semibold">
            <div className="text-xl text-green-700">
              <p>MON - FRI</p>
              <p>SAT - SUN</p>
            </div>
            <div>
              <p>8 am - 8 pm</p>
              <p>Closed</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-20  bg-gray-50  rounded-2xl h-auto w-full">
        <div>
          <iframe
            className="h-full w-120"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.9270507147!2d85.32951860264005!3d27.694684219033558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1748019923123!5m2!1sen!2snp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="rounded-2xl p-10 ">
          <h1 className="text-3xl font-bold text-black leading-15">
            Contact <span className="text-red-800">Us</span>
          </h1>
          <p className="text-xl text-gray-500">
            If you have any queries, send us a message. Our Friendly team would
            love to hear from you.
          </p>
          <br />
          <div className=" rounded-2xl text-xl ">
            <div className="flex justify-between">
              <div>
                <label htmlFor="firstname">First Name</label>
                <br />
                <input
                  className="border border-gray-400 rounded-xl h-15 w-60 mt-3"
                  type="text"
                  name="firstname"
                  id="firstname"
                />
              </div>

              <div>
                <label htmlFor="lastname">Last Name</label>
                <br />
                <input
                  className="border border-gray-400 rounded-xl h-15 w-60 mt-3"
                  type="text"
                  name="lastname"
                  id="lastname"
                />
              </div>
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border border-gray-400 rounded-xl h-15 w-full mt-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <br /> <br />
            <div>
              <label htmlFor="choose">What can we do for you</label>
              <br />
              <select
                className="border border-gray-400 rounded-xl h-15 w-full mt-3"
                name="Servicetype"
                id="choose"
                required
              >
                <option className=" text-gray-400 " value="" disabled hidden>
                  Choose
                </option>
                <option value="Deliveries">Deliveries</option>
                <option value="Transport">Transportation</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
            <br />
            <br />
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                className="border border-gray-400 rounded-xl h-15 w-full mt-3"
                type="number"
                name="phone"
                id="phone"
              />
            </div>
            <br />
            <br />
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-gray-400 rounded-xl h-15 w-full mt-3 "
              name="message"
              id="message"
            />{" "}
            <br />
            <br />
            <button
              className="text-white bg-amber-700 rounded-4xl h-15 w-60 mt-3 "
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
