import { Avatar, AvatarGroup, Button, Fab, Rating, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Slider from '@mui/material/Slider';


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Home = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className=" container  px-4 pt-14">
      <main>
        <div className=" flex justify-between">
          <div>
            <h1 className=" leading-normal text-4xl font-black w-[300px]">
              Create Your Website Today with
              <span className=" text-orange-600">ZONE</span>
            </h1>
            <p className=" w-[300px] my-5">
              The ZONE is built on top of MUI, a powerful library that provides
              flexible, customizable, and easy-to-use components.
            </p>
            <Button variant="contained" disableElevation>
              Figma Workcpaces
            </Button>
            <p className=" w-[300px] my-4 text-[#9999]">AVAILABLE FOR</p>
          </div>
          <div>
            <img
              className="w-[700px]"
              src={`https://zone-ui.vercel.app/assets/images/home/home_hero.png`}
              alt=""
            />
          </div>
        </div>
      </main>
      <main className=" rounded bg-[#F4F6F8] pt-32 container px-4">
        <div>
          <div className=" justify-center mx-auto flex ">
            <img
              className=" w-[800px]"
              src={`https://zone-ui.vercel.app/assets/images/home/new_start.png`}
              alt=""
            />
          </div>
          <div className=" justify-center mx-auto  ">
            <p className=" justify-center mx-auto flex">NEW START</p>
            <h1 className=" text-4xl mx-auto justify-between text-center w-[500px]">
              The <span className=" text-orange-500 ">ZONE</span> UI Kit
            </h1>
            <p className=" w-[500px] mx-auto justify-between text-center  pb-14">
              Modern ui kit to save your time, boost your creativity. Neat and
              super stylish layout ready to help with your projects
            </p>
          </div>
        </div>
      </main>
      <main className=" container  pt-24">
        <div className=" flex justify-between">
          <div>
            <p className=" w-[300px] mb-9">INTERFACE STARTER KIT</p>
            <h1 className=" text-5xl w-[350px] mb-9">Flexible Components</h1>
            <p className=" w-[360px]">
              Pre-set components are easy to customize and use. We collected
              most popular elements. Menu, sliders, buttons, inputs etc. are all
              here. Just dive in!
            </p>
            <Button variant="contained" disableElevation>
              Browse Components {">"}
            </Button>
          </div>
          <div>
            <div className="flex gap-5">
              <div>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <div>
                <Button variant="contained" disableElevation>
                  + Add To Cart
                </Button>
              </div>
              <div>
                <Fab color="primary" size="small" aria-label="add">
                  <SubscriptionsIcon />
                </Fab>
              </div>
              <div>
                <Stack>
                  <CircularProgress variant="determinate" value={progress} />
                </Stack>
              </div>
            </div>
            <div className=" flex mt-10 items-center">
              <div>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="one" label="Angular" />
                  <Tab value="two" label="react" />
                  <Tab value="three" label="Veu" />
                </Tabs>
              </div>
              <div>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="icon tabs example"
                >
                  <Tab icon={<PhoneIcon />} aria-label="phone" />
                  <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                  <Tab icon={<PersonPinIcon />} aria-label="person" />
                </Tabs>
              </div>
              <div>
                <Button color="secondary">Secondary</Button>
              </div>
            </div>
            <div className=" flex items-center justify-end gap-5">
              <div className=" mt-10">
                <Button size="small">Small</Button>
              </div>
              <div>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </Stack>
              </div>
            </div>
            <div>
              <div>
                <Slider
                  size="small"
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
