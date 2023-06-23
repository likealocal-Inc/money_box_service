// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    airport,
    name,
    location,
    address,
    passengersCount,
    date,
    time,
    whatappid,
  } = req.query;
  //    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyACq7gF8WbQr5oYUIZSNg4AW9hzI0phA6w`;

  try {
    // const search = await axios.get(url);
    res.status(200);
  } catch (err) {
    console.log(err);
  }
  //   const response = await fetch(url, {
  //     headers: {
  //       "X-NCP-APIGW-API-KEY-ID": "01gns67yau",
  //       "X-NCP-APIGW-API-KEY": "mZ8mst5crgIEw8vzU5H4SBLNbpmXJnpxPlC9IHYb",
  //     },
  //   });
}
