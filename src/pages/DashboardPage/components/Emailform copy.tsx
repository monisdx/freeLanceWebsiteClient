import { useState } from "react";
import { TextField } from "@mui/material";
import useModal from "../../../hooks/useModal";
import nodemailer from "nodemailer"

declare global {
  interface Window {
    Email: {
      send: (params: any) => void;
    };
  }
}

interface emailform {
  email: string;
  subject: string;
  body: string;
}

const Emailform = ({finalRows}:any) => {
  // const modal = useModal();
  // const [formData, setformData] = useState<emailform>({
  //   email: "",
  //   subject: "",
  //   body: "",
  // });

  // const handlechange = (e: any) => {
  //   setformData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "stalvishsandhu@gmail.com",
  //     pass: "uirrbjjdrqfuftyv",
  //   },
  // });

  //  const emailArray:any[] = finalRows.map((user:any,i:any)=>(user.email));

  //  console.log("data:", finalRows);
  //  console.log(emailArray);
  // // const getEmailsFromAPI = async () => {
  // //   try {
  // //     const response = await fetch(
  // //       "http://localhost:5000/saveDetails/getDetailsbyid/"
  // //     );

  // //     if (!response.ok) {
  // //       throw new Error("Failed to fetch data from the API");
  // //     }

  // //     const data = await response.json();
  // //     const emailArray = data.map((item: { email: any }) => item.email);

  // //     return emailArray;
  // //   } catch (error) {
  // //     console.error("Error fetching data:", error);
  // //     return [];
  // //   }
  // // };
  // const sendEmail = (to: string) => {
  //   const mailOptions = {
  //     from: formData.email,
  //     to,
  //     subject: formData.subject,
  //     text: formData.body,
  //   };

  //   transporter.sendMail(mailOptions, (error: any, info: { response: string; }) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Email sent: " + info.response);
  //     }
  //   });
  // };
  // const submitHandler = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("before email");

    
  //   if (emailArray.length === 0) {
  //     console.log("No emails found");
  //   }

  //   emailArray.forEach((email: string) => {
  //     sendEmail(email);
  //   });

  //   console.log("after email");
  // };

  return null;

  return (
    <div className=" bg-foreground flex justify-between items-center flex-col gap-10  rounded-lg mt-4 p-5 w-[700px]  shadow-[0px_1px_20px_rgba(14,30,37,0.12)] s:w-[300px] s:p-2.5 sm:w-[400px]">
      <div className="flex flex-col justify-center items-center text-xl font-manrope font-semibold">
        <img
          className="w-[100px] h-[62px]"
          src="/images/Gmail-Logo.jpg"
          alt="lock"
        />
      </div>
      <form
        className="  flex w-full flex-col gap-5 justify-evenly s:w-full vm:w-full"
        onSubmit={submitHandler}
      >
        <div>
          <h1 className="font-manrope font-bold text-black text-base mb-2">
            Enter your email
          </h1>
          <TextField
            id="email"
            name="email"
            variant="outlined"
            label="Email"
            type="email"
            onChange={handlechange}
            value={formData.email}
            required
            fullWidth
          />
        </div>
        <div>
          <h1 className="font-manrope font-bold text-black text-base mb-2">
            Enter Subject
          </h1>
          <TextField
            id="text"
            name="subject"
            variant="outlined"
            label="Subject"
            type="text"
            onChange={handlechange}
            value={formData.subject}
            required
            fullWidth
          />
        </div>
        <div>
          <h1 className="font-manrope font-bold text-black text-base mb-2">
            Enter Body
          </h1>
          <TextField
            id="body"
            variant="outlined"
            label="Body"
            type="text"
            onChange={handlechange}
            value={formData.body}
            required
            multiline
            rows={4}
            fullWidth
            name="body"
          />
        </div>

        <div className="flex flex-row justify-between my-4">
          <button onClick={() => modal.hide()} className="btn-3 ">
            Back
          </button>
          <button className="btn-3 " type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Emailform;