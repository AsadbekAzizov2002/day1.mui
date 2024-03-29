import React from "react";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import { Button } from "@mui/material";

const Homess = () => {
  return (
    <div>
      <main>
        <div className=" px4 container mt-24">
          <div className=" flex justify-between">
            <div>
              <p>FEATURE HIGHLIGHTS</p>
              <h1 className=" font-bold text-4xl w-[350px] py-8">
                Have Everything You Need
              </h1>
              <p className=" w-[350px]">
                Let's see what makes our theme super powerful and user-friendly!
              </p>
            </div>
            <div className=" grid grid-cols-3 gap-10">
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
              <div className="  w-40">
                <div className=" ml-14 justify-center w-6">
                  <PersonalVideoIcon />
                </div>
                <h2>5 Prebuilt Websites</h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className=" bg-slate-500 w-full h-[500px] mt-32">
        <div className="container px-4">
          <p className=" text-white w-[150px] mx-auto pt-[200px]">
            PROFESSIONAL KIT
          </p>
          <h1 className=" w-[350px] my-5 mx-auto text-white text-5xl font-bold">
            For Designer
          </h1>
          <div className=" mx-auto w-[200px]">
            <Button variant="contained" disableElevation>
              Disable elevation
            </Button>
          </div>
        </div>
      </main>
      <main>
        <div className=" container">
          <div>
            <p className=" w-[200px] mx-auto pt-32 mb-14">PRICING PLANS</p>
            <h1 className=" w-[400px] mb-14 mx-auto font-extrabold text-4xl">
              The Right Plan For Your Business
            </h1>
            <p className=" w-[600px] mx-auto">
              Choose the perfect plan for your needs. Always flexible to grow
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homess;
