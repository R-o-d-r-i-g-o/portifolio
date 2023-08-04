import { NextResponse } from "next/server";

const config = { matcher: ['/', '/:path'] };

const middleware = async () => {
  NextResponse.next();
}

export default middleware;
export { config };
