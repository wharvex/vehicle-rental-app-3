import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Card from "./card";

type MainContentCardsGroupType = {
  star1?: string;
  text?: string;
  star11?: string;
  text1?: string;

  /** Style props */
  imageCardStarAlignItems?: CSSProperties["alignItems"];
  imageCardStarJustifyContent?: CSSProperties["justifyContent"];
};

const MainContentCardsGroup: NextPage<MainContentCardsGroupType> = ({
  star1,
  text,
  star11,
  text1,
  imageCardStarAlignItems,
  imageCardStarJustifyContent,
}) => {
  const imageCardStarStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: imageCardStarAlignItems,
      justifyContent: imageCardStarJustifyContent,
    };
  }, [imageCardStarAlignItems, imageCardStarJustifyContent]);

  return (
    <div className="bg-aliceblue overflow-hidden flex flex-row items-center justify-center p-[50px] box-border gap-[50px] self-stretch">
      <Card
        testimonialImageUrls="/star-11@2x.png"
        testimonialButtonText="Read Testimonials"
        cardFlex="1"
        imageCardStarAlignItems="center"
        imageCardStarJustifyContent="center"
      />
      <Card
        testimonialImageUrls="/star-1@2x.png"
        testimonialButtonText="Read Testimonials"
        cardFlex="1"
        imageCardStarAlignItems="center"
        imageCardStarJustifyContent="center"
      />
      <Card
        testimonialImageUrls="/star-12@2x.png"
        testimonialButtonText="Read Testimonials"
        cardFlex="1"
        imageCardStarAlignItems="center"
        imageCardStarJustifyContent="center"
      />
    </div>
  );
};

export default MainContentCardsGroup;
