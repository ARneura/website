import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import "../app/style.css";

export interface WrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  wrapperClasses?: string;
  title?: string;
  className?: string;
}

const Wrapper = ({ children, title }: WrapperProps) => {
  return (
    <div>
      <Head>
        <title>Arneura | Software Consultancy</title>
        <meta
          name="description"
          content="Unleash the power of personalized software solutions. Our experts combine cutting-edge technology and industry expertise to create custom software perfectly tailored to your business."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BL4MENCKZ8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BL4MENCKZ8', {
  page_path: window.location.pathname,
});
`,
          }}
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export const UnauthenticatedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Wrapper;
