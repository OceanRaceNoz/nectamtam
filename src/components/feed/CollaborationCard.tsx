import React from "react";

interface CollaborationCardProps {
  imageUrl: string;
  person1: { name: string; color: string };
  person2: { name: string; color: string };
  content: string;
  boldContent: string;
}

export const CollaborationCard: React.FC<CollaborationCardProps> = ({
  imageUrl,
  person1,
  person2,
  content,
  boldContent,
}) => {
  return (
    <article className="w-full text-white font-bold">
      <div className="flex w-full items-center gap-[3px]">
        <div className="self-stretch flex min-w-60 items-center gap-2.5 flex-1 shrink basis-[0%] my-auto">
          <img
            src={imageUrl}
            alt="Collaboration"
            className="aspect-[1.58] object-contain w-[79px] self-stretch shrink-0 gap-[-21px] my-auto"
          />
          <div className="self-stretch flex-1 shrink basis-[0%] gap-2.5 my-auto">
            <span style={{ color: person1.color }}>{person1.name}</span>{" "}
            <span className="font-medium">und</span>{" "}
            <span style={{ color: person2.color }}>{person2.name} </span>
            <span className="font-medium">setzen sich für mehr </span>
            {boldContent}
            <span className="font-medium"> in der Innenstadt ein.</span>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/c4031185e12b067f5e0bfdac9cb04a69aab6eaf6cc0977598315d5837b75de55?placeholderIfAbsent=true"
          alt="More"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
      </div>
    </article>
  );
};
