
"use client"

import Text from "@/components/Typography/Text";

import stringIsEmpty from "@/libs/utils/stringIsEmpty";

import { useState, useEffect, useRef } from "react";
import { StatelessButton } from "@/components/Buttons/Buttons";
import { useLocalStorageState } from "@/hooks/useLocalStorageRequest";

const SignUp = function({
  countEmails,
  postEmail
}) {
  const [getEmailHistory, setEmailHistory] = useLocalStorageState("nilhemoth:email", "not used");
  const [emailCount, setEmailCount] = useState(null);
  const [usedEmail, setUsedEmail] = useState(false);
  const inputRef = useRef(null);

  const onEmailPost = (e) => {
    console.log('fired onsubmit');
    // e.preventDefault();
    
    const text = inputRef.current.value;
    if (stringIsEmpty(text) || getEmailHistory() === "used") return;

    console.log('submitted', text);
    
    setEmailHistory(() => ("used"));
    setUsedEmail(true);

    postEmail(text)
      .then(res => {
        console.log('created: ', res);
      });
  }

  const updateEmailCount = () => {
    countEmails()
      .then((count) => {
        setEmailCount(count);
      });
  }

  useEffect(() => {
    updateEmailCount();
    setUsedEmail(getEmailHistory());
  }, []);

  return (
    <>
      <form className="flex xl:w-[30%] lg:w-[35%] md:w-[40%] sm:w-[50%] w-[90%] max-w-[400px] mb-1" onSubmit={onEmailPost}>
        <div className="flex bg-transparent w-full">
          <input
          ref={inputRef}
          autoComplete="email"
          placeholder="name@example.com"
          type="email"
          className="w-full text-black font-gf-2 p-1"
          />
        </div>
        <StatelessButton
        className={{
          self: "rounded-none font-bold bg-[#5e5ecf] hover:bg-[#7777df] py-1 px-2"
        }}
        type="submit"
        >
          Submit
        </StatelessButton>
      </form>

      {
        usedEmail === "used"
          ? <div>
              <Text textSize="md" className="text-center text-green-500">Your email has been submitted!</Text>
              <Text textSize="md" className="text-center text-stone-600 mb-8">If you entered the wrong email, or you&apos;d like to change your email, please email us at: <a href="mailto:5ActsTheKingInYellow@gmail.com" className="underline">5ActsTheKingInYellow@gmail.com</a></Text>
            </div>    
          : <div className="mb-8"></div>
      }

      <Text textSize="md" className="font-special text-yellow-500 mb-10">JOIN <b>{emailCount}</b> OTHER PEOPLE!</Text>
    </>
  );
}

export default SignUp;