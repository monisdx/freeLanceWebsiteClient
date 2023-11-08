import React, { useState } from "react";
import {BsFillPatchCheckFill} from "react-icons/bs";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";


const postjoburl = 'https://free-lance-website-server.vercel.app/jobs/create_job';

const steps = ["Step 1", "Step 2", "Step 3"];

const skills = [
  "HTML",
  "CSS",
  "Js",
  "Next.Js",
  "React.Js",
  "MUI",
  "PHP",
  "Posgrey SQL",
  "Mongo DB",
  "Node.Js",
  "Figma",
  "Django",
  "Swift",
  "Java",
  "Kotlin",
  "React Native",
  "Flutter",
  "Python",
  "Tensorflow",
  "PyTorch",
  "OpenCV",
  "Scikit-Learn",
  "Numpy",
  "Pandas"
];

const categorys = [
  "Web Development",
  "Mobile App Development",
  "AI Development",
  "Game Development",
  "UI/UX Design",
  "DevOps & Cloud"
]

const ITEM_HEIGHT = 33;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Stepperform = () => {
  const theme = useTheme();
  const [activestep, setactivestep] = useState(0);
  const [amount, setamount] = useState(0);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [skillset, setskillset] = useState<string[]>([]);
  const [category, setcategory] = useState("");
  const [abc, setabc] = useState("");
  const values = { amount, title, description, skillset, category };

  const handleskill = (event: SelectChangeEvent<typeof skillset>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setskillset(typeof value === "string" ? value.split(",") : value);
    var abc = "";
    for (var i = 0; i < value.length; i++) {
      if (i == value.length - 1) {
        abc = abc + value[i];
      } else {
        abc = abc + value[i] + ", ";
      }
    }
    // console.log(abc);
    setabc(abc);
  };

  const handleamount = (e: any) => {
    setamount(e.target.value);
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
  };

  const handletitle = (e: any) => {
    settitle(e.target.value);
  };
  const localfunc = async()=>{
    const token = localStorage.getItem('token');
    const object = {
      "title":values.title,
      "description":values.description,
      "budget":values.amount,
      "skills":values.skillset,
      "category":values.category
    }

   console.log(object);
    await fetch(postjoburl,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "token":`${token}`
      },
      body: JSON.stringify(object)
    }).then(async(res)=>{
      const data = await res.json();
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  }
  
  const handlecategory = (e: any) => {
    setcategory(e.target.value);
  }
  const handledescription = (e: any) => {
    setdescription(e.target.value);
  };
  const handlenext = () => {
    console.log(activestep === 2)
    if(activestep === 2){
      console.log(values)
      localfunc();
    }
    setactivestep(activestep + 1);
  };

  const handleback = () => {
    console.log(values);
    setactivestep(activestep - 1);
  };

  const getstepcontent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <div>
              <h1 className="font-manrope font-bold text-black text-base">
                Give your project brief a title
              </h1>
              <p className="font-manrope text-grey text-sm mb-2">
                Keep it short and simple.
              </p>
              <TextField
                id="title"
                name="title"
                variant="outlined"
                label="Title"
                type="text"
                onChange={handletitle}
                value={values.title}
                required
                fullWidth
              />
            </div>
            <div>
              <h1 className="font-manrope font-bold text-black text-base">
                What are you looking to get done?
              </h1>
              <p className="font-manrope text-grey text-sm mb-2">
                This will help get your brief to the right talent.
              </p>
              <TextField
                id="description"
                name="description"
                variant="outlined"
                label="Description"
                type="text"
                onChange={handledescription}
                value={values.description}
                required
                multiline
                rows={4}
                fullWidth
              />
            </div>
            <div className="flex flex-row justify-between mt-4">
              {/* {activestep >0 ? <button onClick={handleback}   className="btn-3" type="button">{"<- Back"}</button> : ""} */}
              <button onClick={handlenext} className="btn-3" type="button">
                {"Next ->"}
              </button>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div>
              <h1 className="font-manrope font-bold text-black text-base mb-2">
                I'm looking to spend...
              </h1>
              <TextField
                id="amount"
                name="amount"
                variant="outlined"
                label="Amount"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaRupeeSign />
                    </InputAdornment>
                  ),
                }}
                onChange={handleamount}
                value={values.amount}
                required
                fullWidth
              />
            </div>
            <div>
              <h1 className="font-manrope font-bold text-black text-base mb-2">
                What skills are required?
              </h1>
              {/* <p className="font-manrope text-grey text-sm mb-2">This will help get your brief to the right talent.</p> */}
              <FormControl fullWidth>
                <InputLabel id="skill-label">Skills *</InputLabel>
                <Select
                  labelId="skill-label"
                  id="skills"
                  multiple
                  fullWidth
                  value={values.skillset}
                  onChange={handleskill}
                  input={<OutlinedInput label="Skills" />}
                  MenuProps={MenuProps}
                >
                  {skills.map((skill) => (
                    <MenuItem
                      key={skill}
                      value={skill}
                      style={getStyles(skill, skillset, theme)}
                    >
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <h1 className="font-manrope font-bold text-black text-base mb-2">
                Which category best fits your project?
              </h1>
              <FormControl fullWidth>
                <InputLabel id="category-label">Category *</InputLabel>
                <Select
                  labelId="category-label"
                  id="categorynbhbvb"
                  required
                  fullWidth
                  label="Category"
                  value={values.category}
                  onChange={handlecategory}
                  MenuProps={MenuProps}
                >
                  {categorys.map((category,i) => (
                    <MenuItem
                      key={i}
                      value={category}
                      style={getStyles(category, skillset, theme)}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-row justify-between mt-4">
              {activestep > 0 ? (
                <button onClick={handleback} className="btn-3" type="button">
                  {"<- Back"}
                </button>
              ) : (
                ""
              )}
              <button onClick={handlenext} className="btn-3" type="button">
                {"Next ->"}
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="font-manrope text-black font-extrabold text-center text-2xl">
              Review
            </h1>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Title
                </h2>
                <p className="font-manrope text-grey text-sm">{title}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Description
                </h2>
                <p className="font-manrope text-grey text-sm">{description}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Category
                </h2>
                <p className="font-manrope text-grey text-sm">{category}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Skills
                </h2>
                <p className="font-manrope text-grey text-sm">{abc}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Budget
                </h2>
                <p className=" flex items-center font-manrope text-grey text-sm">
                  <FaRupeeSign />
                  {amount}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-4">
              {activestep > 0 ? (
                <button onClick={handleback} className="btn-3" type="button">
                  {"<- Back"}
                </button>
              ) : (
                ""
              )}
              <button onClick={handlenext} className="btn-3" type="submit">
                Post job
              </button>
            </div>
          </>
        );
      default:
        console.log("erroe 404");
    }
  };

  return (
    <div className=' bg-foreground flex flex-col gap-10 m-auto rounded-lg mt-4 p-5 w-[70%]  shadow-[0px_1px_20px_rgba(14,30,37,0.12)] s:w-4/5 s:p-2.5 sm:w-6/12"'>
      <div>
        <Stepper
          activeStep={activestep}
          alternativeLabel
          connector={<StepConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {activestep === 3 ? (
        <h1 className=" flex flex-col justify-center items-center gap-4 text-xl text-black font-bold text-center font-manrope">
          <BsFillPatchCheckFill size={'50px'} color="#4adf52"/>
          Job post successfully
        </h1>
      ) : (
        <>
          <div className="flex justify-center">
            <form
              className="flex w-[80%] flex-col gap-5 justify-evenly s:w-full vm:w-full"
              onSubmit={handleSubmit}
            >
              {getstepcontent(activestep)}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Stepperform;
