import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DRIVE_FILE_ID = "1XTtyC9gIf2mdtY0TiiygaSRo-hbqsytJ";
const GOOGLE_DRIVE_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

export async function GET() {
  return NextResponse.redirect(GOOGLE_DRIVE_DOWNLOAD_URL, 307);
}