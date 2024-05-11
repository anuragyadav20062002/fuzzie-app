import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
    punlicRoutes: [
        '/',
        '/api/clerk-webhook',
        '/api/drive-activity/notification',
      ],
      ignoredRoutes: [
        '/api/auth/callback/discord',
        '/api/auth/callback/notion',
        '/api/auth/callback/slack',
        '/api/flow',
        '/api/cron/wait',
      ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};