import { FaBirthdayCake } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
// import Box from "../components/Box";
import { IoPlayCircle } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { PiChefHat } from "react-icons/pi";

// const chefImg =
//   "https://img.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg?ga=GA1.1.1123632555.1748070707&semt=ais_hybrid&w=740"; // placeholder
// const foodBg =
//   "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"; // placeholder
// const partyImg =
//   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"; // placeholder
// const cateringImg =
//   "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=600&q=80"; // placeholder
// const qrImg =
//   "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=ServiceQR"; // placeholder

export default function Services() {
  return (
    <div>
      {/* Header Section */}
      <div>
        {/* TOP-LEFT DOT GRID */}
        <div className="absolute top-60 right-120 z-0 p-6 opacity-20">
          {/* <Box /> */}
        </div>

        {/* BOTTOM-RIGHT DOT GRID */}
        <div className="absolute bottom-[0] right-0 z-0 p-6 opacity-20">
          {/* <Box /> */}
        </div>
        <div className="flex justify-between bg-white px-8 ml-30">
          <div className="flex-1  mt-40">
            <h2 className="text-5xl text-green-700 italic font-[cursive] mb-2">
              Our Services
            </h2>
            <br />
            <div className="uppercase text-2xl text-gray-400 mb-2">
              Knowing our customers needs
            </div>
            <div className="mb-4">
              <span className="text-orange-600 font-bold text-xl leading-4">
                We're more than just momos.
              </span>
              <br />
              <span className="text-black font-bold text-xl">
                We're a full-service dining experience.
              </span>
            </div>
          </div>

          <div className="relative mr-20">
            <div className="w-20 h-20 bg-green-100 rounded-full"></div>
            <img src="servicehero.png" alt="Chef" className=" h-140 w-140 " />
            {/* <div className="absolute top-0 right-0 w-16 h-16 bg-dotted-pattern opacity-30"></div> */}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] mt-8">
        <img
          // src={foodBg}
          alt="Momo Food"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex flex-col justify-center pl-16">
          <h2 className="text-white text-3xl font-bold mb-2">Dine With Us</h2>
          <p className="text-white text-lg mb-6 max-w-xl">
            Enjoy our momos in the comfort of your own home with our delivery
            services.
          </p>
          <button className="flex gap-3 w-fit p-3 text-white bg-green-700 rounded-4xl">
            <IoPlayCircle className="h-6 w-6 text-white " />
            Watch the video
          </button>
        </div>
      </div>

      <div className="mt-30 mx-40">
        <div className="flex gap-20 justify-between">
          <div className=" w-[50%]">
            <GiPartyPopper className="w-20 h-20 text-red-400" />
            <h1 className="mt-4 text-3xl font-semibold">Private Party</h1>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quae
              rerum vel ea vero laboriosam alias autem quaerat molestiae odit.
            </p>
            <div
              className="mt-15 rounded-2xl p-4 flex justify-between"
              style={{ boxShadow: "6px 6px 10px rgba(0,0,0,0.1)" }}
            >
              <div>
                <p className="text-2xl font-bold text-green-700">
                  Scan the QR code
                </p>
                <p className="text-gray-400">
                  You can aslo check about the services
                </p>
              </div>
              <div>
                <img className="h-18 w-18" src="QR.svg" alt="QR" />
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBhcnR5fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="mt-20 flex gap-20 justify-between">
          <div>
            <img
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBhcnR5fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div className=" w-[50%]">
            <PiChefHat className="w-20 h-20 text-red-400" />
            <h1 className="mt-4 text-3xl font-semibold">Catering</h1>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quae
              rerum vel ea vero laboriosam alias autem quaerat molestiae odit.{" "}
            </p>
            <div
              className="mt-15 rounded-2xl p-4 flex justify-between"
              style={{ boxShadow: "6px 6px 10px rgba(0,0,0,0.1)" }}
            >
              <div>
                <p className="text-2xl font-bold text-green-700">
                  Scan the QR code
                </p>
                <p className="text-gray-400">
                  You can aslo check about the services
                </p>
              </div>
              <div>
                <img className="h-18 w-18" src="QR.svg" alt="QR" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 mb-10 bg-gray-50 rounded-2xl py-12 px-6 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">Got any Queries?</h2>
        <p className="text-gray-500 mb-6">
          If you have any queries, send us a message. Our friendly team would
          love to hear from you
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
