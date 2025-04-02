import { Provider } from "@/components/ui/provider";
import "../app/globals.css";
// import Head from "next/head";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      {/* <Head>
        <title>GoHire - Find Your Dream Job</title>
        <meta
          name="description"
          content="Discover remote jobs worldwide with GoHire. Apply today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
