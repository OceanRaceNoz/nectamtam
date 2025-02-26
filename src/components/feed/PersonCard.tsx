import React from "react";

interface PersonCardProps {
  imageUrl: string;
  name: string;
  nameColor: string;
  content: string;
  boldContent?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  imageUrl,
  name,
  nameColor,
  content,
  boldContent,
}) => {
  return (
    <article className="flex w-full items-center gap-[3px]">
      <div className="self-stretch flex min-w-60 items-center gap-2.5 flex-1 shrink basis-[0%] my-auto">
        <img
          src={imageUrl}
          alt={name}
          className="aspect-[1] object-contain w-[50px] self-stretch shrink-0 my-auto rounded-[50%]"
        />
        <div className="self-stretch flex-1 shrink basis-[0%] min-w-60 gap-2.5 my-auto">
          <span style={{ fontWeight: 700, color: nameColor }}>{name}</span>{" "}
          {content}{" "}
          {boldContent && <span className="font-bold">{boldContent}</span>}
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/c4031185e12b067f5e0bfdac9cb04a69aab6eaf6cc0977598315d5837b75de55?placeholderIfAbsent=true"
        alt="More"
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
      />
    </article>
  );
};
