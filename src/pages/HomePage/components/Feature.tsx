import React from "react";

const Feature = ({ icon, title, text }: any) => {
  return (
    <div className="w-[270px] h-[190px] flex justify-center items-start flex-col gap-4 m-4 p-4 rounded-[10px] bg-foreground shadow-[0px_1px_20px_rgba(14,30,37,0.12)] s:my-4 s:mx-0">
      <h2 className="animate-bounce">{icon}</h2>
      <h1 className="font-manrope font-extrabold text-lg text-black tracking-[-0.04em] s:text-sm">
        {title}
      </h1>
      <p className="font-manrope font-medium text-sm text-grey s:text-xs">
        {text}
      </p>
    </div>
  );
};

export default Feature;
