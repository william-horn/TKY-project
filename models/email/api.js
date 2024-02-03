"use server";

// Database remote connect
import connectMongoDB from "@/libs/db/mongodb";

// In-house utilities
import { escapeRegex } from "@/libs/utils/escapeRegex";
import { toSimpleArray } from "@/libs/utils/api-utils";

// Data models
import Email from "./email";


export async function getAll() {
  // "use server";
  try {
    await connectMongoDB();

    const allEmails = await Email.find();

    return {
      ok: true,
      payload: toSimpleArray(allEmails),
    }
  } catch(error) {

    console.log(error);

    return { 
      ok: false,
      message: error 
    }
  }
}

export async function ping(options={}) {
    // "use server";
  try {
    await connectMongoDB(options.db_env);

    const oneItem = await TestModels.findOne();

    return {
      ok: true,
      payload: toSimpleArray([oneItem]),
    }
  } catch(error) {

    console.log(error);

    return { 
      ok: false,
      message: error 
    }
  }
}

