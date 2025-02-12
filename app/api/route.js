/**
 *
 * @param {Request} request
 */
export async function GET(request) {
  console.log(request.method);

  return new Response('Hello');
}
