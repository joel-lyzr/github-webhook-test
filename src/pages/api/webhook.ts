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
    "https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=9b311be4-47eb-4923-8bc2-08f74b4aa497&token=c0uUSJgTcrJnGPpXmkmkYkzoDzyzHY3N0eQCbcNrY&operation=startbuild",
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
