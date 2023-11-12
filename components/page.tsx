import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderPage from "./header-page";
import Main from "./main";
import FooterPage from "./footer-page";

const Page: NextPage = () => {
  const router = useRouter();

  const onImageHeaderPageLogoClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="bg-aliceblue w-[1440px] h-[1501px] overflow-y-auto flex flex-col items-start justify-start gap-[50px]">
      <HeaderPage
        imageDimensions="/image2@2x.png"
        imageDimensionsText="/image3@2x.png"
        headerPageBoxSizing="border-box"
        headerPageBackgroundImage="url('/header--page1@3x.png')"
        headerPageFlexShrink="0"
        imageHeaderPageLogoCursor="pointer"
        headerPageBoxSizing="border-box"
        headerPageCursor="unset"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
      <Main />
      <FooterPage
        footerPageBackgroundImage="url('/footer--page1@3x.png')"
        footerPageFlexShrink="0"
      />
    </div>
  );
};

export default Page;
