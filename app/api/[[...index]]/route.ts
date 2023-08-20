// import vocab, { vocabVariantTranslator } from "@/app/user/objectNames";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest } from "next/server";

interface PageParams extends Params {
  index: string[];
}

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const index = pathname.split("/");
  const data = index.splice(2);

  let pageData = {};

  let i = 0;
  while (i < data.length && data.length > 2) {
    pageData = {
      ...pageData,
      [`${data[i]}`]: data[i + 1],
    };
    i = i + 2;
  }

  // return new Response(JSON.stringify(pageData));
  return new Response(JSON.stringify(pageData));
}
