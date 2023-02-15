import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { prismaClientDatabase } from './database'

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const result = await prismaClientDatabase.user.findMany()

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
