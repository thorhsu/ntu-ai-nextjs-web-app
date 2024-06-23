/** @type {import('next').NextConfig} */
const nextConfig = {
  // 設定允許的host
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        port: "",
        pathname: "/**",
        //   https://oaidalleapiprodscus.blob.core.windows.net/private/org-3ZhMeQUBGmzO98sreioCWzrd/user-iG54sCrl0nTUd55SW5q3DxaR/img-chfybJ8EMIBW0BL5rIfb3an9.png?st=2024-06-23T02%3A13%3A24Z&se=2024-06-23T04%3A13%3A24Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-22T13%3A47%3A05Z&ske=2024-06-23T13%3A47%3A05Z&sks=b&skv=2023-11-03&sig=3hMOAymoK8/oTcYzNZYAFfVyvzebf%2BpLqTqBU0z91Gg%3D) on `next/image`, hostname "oaidalleapiprodscus.blob.core.windows.net" is not configured under images in your `next.config.js`
        // See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
      },
    ],
  },
};

export default nextConfig;
