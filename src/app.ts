import { Ecdsa, Ed25519 } from "@sodot/sodot-node-sdk";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const SODOT_API_KEY = process.env.SODOT_API_KEY;
const ecdsa = new Ecdsa();
const eddsa = new Ed25519();

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  if (!SODOT_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Missing SODOT_API_KEY",
      }),
    };
  }

  switch (event.httpMethod) {
    case "POST":
      if (event.resource === "/room") {
        const { maxUsers } = JSON.parse(event.body || "{}");
        if (!maxUsers) {
          return {
            statusCode: 400,
            body: JSON.stringify({
              message: "Invalid request",
            }),
          };
        }

        const ecdsaUUID = await ecdsa.createRoom(maxUsers, SODOT_API_KEY);
        const eddsaUUID = await eddsa.createRoom(maxUsers, SODOT_API_KEY);

        const roomId = ecdsaUUID + "-" + eddsaUUID;

        return {
          statusCode: 200,
          body: JSON.stringify({
            roomId,
          }),
        };
      }
      break;
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "Invalid request",
    }),
  };
};
