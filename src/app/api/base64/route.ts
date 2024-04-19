import { NEXT_AUTH_URL } from "@/const/env";
import { NextRequest, NextResponse } from "next/server";

import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function GET(request: NextRequest) {
  const imgPath = request.nextUrl.searchParams.get("imgPath");

  try {
    const file = await fs.readFile(`public/${imgPath}`);
    const { base64 } = await getPlaiceholder(file);

    return NextResponse.json(
      {
        message: "OK",
        data: base64,
      },
      {
        status: 200,
        statusText: "success",
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
          statusText: "failed",
        }
      );
    } else if (error && typeof error === "object" && "message" in error) {
      return NextResponse.json(
        {
          message: error.message as string,
        },
        {
          status: 400,
          statusText: "failed",
        }
      );
    } else if (typeof error === "string") {
      return NextResponse.json(
        {
          message: error,
        },
        {
          status: 400,
          statusText: "failed",
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Unexpected error!",
        },
        {
          status: 400,
          statusText: "failed",
        }
      );
    }
  }
}
