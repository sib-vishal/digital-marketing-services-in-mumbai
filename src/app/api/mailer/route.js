import { NextResponse } from "next/server";
import { sendMail } from "./sendMail";

export async function POST(req, res) {
  try {
    await sendMail(
      "TEST", //subject
      "vishalmauryaab@gmail.com", //EmailTO
      "THI IS A TEST " //Message
    );

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json({
      message: "err.message",
      error_code: "error in api",
    });
  }
}
