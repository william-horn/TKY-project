

import Page from "@/components/Page";
import Image from "next/image";
import Content from "@/components/Content";
import Text from "@/components/Typography/Text";
import { StatelessButton } from "@/components/Buttons/Buttons";

import connectMongoDB from "@/libs/db/mongodb";
import Email from "@/models/email/email";

import SignUp from "./SignUp";

const postEmail = async (email) => {
  "use server";

  await connectMongoDB('production');

  const original = await Email.create({
    email
  });

  console.log(original);

  return toSimpleArray(original);
}

const getEmailCount = async () => {
  "use server";

  await connectMongoDB('production');

  const count = await Email.countDocuments();

  return count;
}

const HomePage = function() {
  return (
    <Page className="bg-[#0c0c0c] min-h-screen">
      <Content span="max">

        <Content span="md" className="mx-auto  flex flex-col items-center pt-3">
          <div className="relative md:w-[896px] md:h-[500px] mb-8 max-w-[100%] w-[448px] h-[250px]">
            <Image
            fill
            alt=""
            src="/images/banner-img.jpg"
            sizes="1200px"
            className=""
            />
          </div>

          <Text textSize="2xl" className="text-center font-special text-yellow-500 mb-2">5 ACTS: THE KING IN YELLOW RPG ... AND BEYOND!</Text>
          <Text textSize="xl" className="text-center font-special text-yellow-500 mb-5">BY NILHEMOTH GAMES</Text>
          <Text textSize="2xl" className="text-center font-special text-yellow-500 mb-10">FOLLOW THE GAME FOR EXCLUSIVE BONUS CONTENT!</Text>

          <Text textSize="md" className="text-center font-special text-yellow-500 mb-3 font-bold">GET PROJECT NEWS AND UPDATES BY PROVIDING YOUR EMAIL</Text>

          <SignUp postEmail={postEmail} countEmails={getEmailCount}/>

          <div className="relative md:w-[896px] md:h-[500px] mb-8 max-w-[100%] w-[448px] h-[250px]">
            <Image
            fill
            alt=""
            src="/images/bg-art-1.jpg"
            sizes="1200px"
            />
          </div>

        </Content>

      </Content>
    </Page>
  );
}

export default HomePage;