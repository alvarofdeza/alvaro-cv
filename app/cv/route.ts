import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DRIVE_FILE_ID = "1XTtyC9gIf2mdtY0TiiygaSRo-hbqsytJ";
const GOOGLE_DRIVE_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

export async function GET() {
  const driveResponse = await fetch(GOOGLE_DRIVE_DOWNLOAD_URL, {
    cache: "no-store",
  });

  if (!driveResponse.ok) {
    return NextResponse.json(
      { error: "Unable to load resume" },
      { status: 502 },
    );
  }

  const pdf = await driveResponse.arrayBuffer();

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="CV_Alvaro_Fernandez.pdf"',
    },
  });
}