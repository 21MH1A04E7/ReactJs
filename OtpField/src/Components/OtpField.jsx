import React, { useEffect, useRef, useState } from "react";

function OtpField() {
  const [Otp, setOtp] = useState(new Array(6).fill(""));
  const ref = useRef([]);
  console.log(ref);
  console.log(ref.current);
  const handlekeyDown = (e, index) => {
    const { key } = e;
    const coypOtp = [...Otp];
    if(e.key==="ArrowRight"){
        if (index < Otp.length - 1) {
          ref.current[index + 1].focus();
        }
      return;
    }
    if(e.key==="ArrowLeft"){
        if (index > 0) {
          ref.current[index - 1].focus();
        }
      return;
    }
    if (e.key == "Backspace") {
      coypOtp[index] = "";
      setOtp(coypOtp);
      if (index > 0) {
        ref.current[index - 1].focus();
      }
      return;
    }
    if (isNaN(key)) {
      return;
    }
    coypOtp[index] = e.key;
    setOtp(coypOtp);
    if (Otp.length - 1 > index) {
      ref.current[index + 1].focus();
    }
  };
  useEffect(()=>{
    ref.current[0].focus()
  },[])
  return (
    <div className="container1">
      {Otp.map((value, index) => {
        return (
          <input
            ref={(currenInput) => (ref.current[index] = currenInput)}
            key={index}
            type="text"
            value={value}
            onKeyDown={(e) => handlekeyDown(e, index)}
          ></input>
        );
      })}
    </div>
  );
}
export default OtpField;