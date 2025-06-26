// import person from "../assests/about/person.png";
// import person2 from "../assests/about/person2.png";
// import process1 from "../assests/about/process1.png";
// import process2 from "../assests/about/process2.png";
// import process3 from "../assests/about/process3.png";
// import headchef from "../assests/about/headchef.png";
// import assistantchef1 from "../assests/about/assistantchef1.png";
// import assistantchef2 from "../assests/about/assistantchef2.png";
// import Button from "../components/Button/Button";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
const About = () => {
  return (
    <div>
      <div className="flex px-20 py-10 items-center w-full h-screen">
        <div className="w-1/2  flex justify-between flex-col items-center">
          <div>
            <h1 className="text-7xl font-bold mb-10 text-start">About Us</h1>
            <div className="">
              <p className="text-gray-500">WE PRIDE OURSELF ON</p>
              <h1 className="text-4xl font-semibold capitalize">
                <span className="text-orange-500 ">
                  Our authentic momo recipes
                </span>
                <br />
                passed down through <br />
                generations
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center  relative">
          <div className="w-[400px] h-[400px] bg-[#0c6967] rounded-full "></div>
          <img
            // src={person}
            alt="person"
            className="absolute w-full  bottom-10"
          />
        </div>
      </div>
      <div className="w-full h-screen bg-black">
        <div className="h-[600px]  w-full bg-black text-white flex flex-col  items-start pl-20  justify-center space-y-5">
          <h1 className="text-5xl font-bold">Process behind the making</h1>
          <p className="text-2xl">
            See how only chefs cooks only the best momos
          </p>
          {/* <Button text="watch the video" icon={<MdOutlinePlayCircleFilled />} /> */}
        </div>
      </div>
      <div className="mt-30 px-20 space-y-20">
        <div className="flex justify-center  ">
          <div className="w-1/2 pr-30">
            <h1 className="text-4xl font-semibold mb-5">
              Our momos
              <span className="text-orange-500 ">are made with love</span>
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              consectetur excepturi fugiat doloribus dolor consequuntur? Dolores
              dolorum vero ea, quaerat et, aut, suscipit impedit at tempore
              nulla laudantium sunt facere? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum maiores alias aut iste tenetur
              dolores commodi magnam dolore ullam, sunt eum, soluta modi dolorem
              quasi. Doloribus provident ad quos minima?
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            {/* <img src={process1} alt="process1" className="w-full" /> */}
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="w-1/2 flex justify-center">
            {/* <img src={process2} alt="process2" className="w-full" /> */}
          </div>
          <div className="w-1/2 pl-30">
            <h1 className="text-4xl font-semibold mb-5">
              Our momos
              <span className="text-orange-500 "> are made with love</span>
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              consectetur excepturi fugiat doloribus dolor consequuntur? Dolores
              dolorum vero ea, quaerat et, aut, suscipit impedit at tempore
              nulla laudantium sunt facere? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum maiores alias aut iste tenetur
              dolores commodi magnam dolore ullam, sunt eum, soluta modi dolorem
              quasi. Doloribus provident ad quos minima?
            </p>
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="w-1/2 pr-30">
            <h1 className="text-4xl font-semibold mb-5">
              Our momos
              <span className="text-orange-500 "> are made with love</span>
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              consectetur excepturi fugiat doloribus dolor consequuntur? Dolores
              dolorum vero ea, quaerat et, aut, suscipit impedit at tempore
              nulla laudantium sunt facere? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum maiores alias aut iste tenetur
              dolores commodi magnam dolore ullam, sunt eum, soluta modi dolorem
              quasi. Doloribus provident ad quos minima?
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            {/* <img src={process3} alt="process3" className="w-full" /> */}
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black mt-10 text-white flex">
        <div className="w-[60%] flex justify-between items-center px-30 text-2xl relative">
          <h1>
            " Momo is not just about sustenance, it's about bringing people
            together and creating memories. At our restaurant, we strive to
            create a warm and inviting atmosphere where our guests can enjoy
            delicious momo, great company, and unforgettable experiences "
          </h1>
          <div className="absolute bottom-20">
            <h1 className="font-bold">Marcus Schleifer</h1>
            <h1>CEO</h1>
          </div>
        </div>
        <div className="w-[45%]">
          {/* <img src={person2} alt="" className="w-full h-full" /> */}
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-5">
            Meet The <span className="text-orange-500">Team</span>{" "}
          </h1>
          <p className="text-2xl text-green-800 font-semibold">
            Our talented team members who delivers only the best results
          </p>
        </div>
        <div className="flex justify-center gap-x-10 mt-10 ">
          {/* <img className="w-[400px]"  src={headchef} alt="headchef" />
          <img  className="w-[400px]" src={assistantchef1} alt="headchef" />
          <img  className="w-[400px]" src={assistantchef2} alt="headchef" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
