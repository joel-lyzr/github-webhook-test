// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(
    "https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=e450a7ef-856c-40ac-937f-f5940871efe8&token=jWvqh9cXIxNEcTsrZfF0OyYFQwtViNEZ4tjNIWiXi8&operation=startbuild",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );
  const data = await response.json();
  res.status(200).json({ data });
}
