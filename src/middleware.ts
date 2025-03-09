import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const config = {
    matcher: ["/", "/en/:path*", "/ar/:path*"],
};

export default createMiddleware(routing);
