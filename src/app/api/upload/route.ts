import { NextRequest, NextResponse } from "next/server";
import moment from "moment";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file || file.size === 0) {
      return NextResponse.json(
        { success: false },
        { status: 404, statusText: "File not found" }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // expresión regular que coincide con la extensión del archivo en file.name
    const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");

    const path = `${process.cwd()}/static/editor-${moment().format()}-${fileNameWithoutExtension}.webp`;

    const initPath = process.cwd();

    await sharp(buffer)
      .resize({
        width: 1920,
        height: 1920,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: 100 })
      .toFile(path);

    return NextResponse.json(
      {
        success: true,
        error: false,
        text: `Open ${path.replace("/app", "")} to see the img editor`,
        result: path
          .replace("/app", "")
          .replace("/admin", "")
          .replace(`${initPath}`, ""),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: true, success: false, err: error.message },
      { status: 500 }
    );
  }
}
