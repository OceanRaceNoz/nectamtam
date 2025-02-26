import React from "react";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { SearchBar } from "@/components/search/SearchBar";
import { PersonCard } from "@/components/feed/PersonCard";
import { CollaborationCard } from "@/components/feed/CollaborationCard";

const Index = () => {
  return (
    <div className="bg-[rgba(32,31,35,1)] flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto">
      <TopBar />

      <main className="flex flex-col items-center w-full">
        <SearchBar />

        <section className="w-[335px] max-w-full text-sm text-[#F3F3F3] font-medium mt-[63px] space-y-[25px]">
          <PersonCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/9eb3ad7a280386dfc170d86577e382089bbe488b93d5025d04cc939fa938ed64?placeholderIfAbsent=true"
            name="Sigmund Emsig"
            nameColor="rgba(64,132,242,1)"
            content="macht einen vorschlag für mehr"
            boldContent="bezahlbaren Wohnraum"
          />

          <PersonCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/fe4a910aef862e14a56ca71111a62a5bfc0716243b0524cc7758a4711c2bf1cd?placeholderIfAbsent=true"
            name="Agathe Arglos"
            nameColor="rgba(250,204,21,1)"
            content="möchte"
            boldContent="Bürgermeisterin"
          />

          <PersonCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/b7bd2f02753be9ef18b06674b916180f7120453637cea0221b457582a624f7d5?placeholderIfAbsent=true"
            name="Meno Meckertgern"
            nameColor="rgba(250,135,21,1)"
            content="möchte"
            boldContent="Windkraftanlagen abbauen lassen"
          />

          <CollaborationCard
            imageUrl="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/07ed5055e546ea83ed115a2bb9cb259782548946b7e69e3e0c73339c59147369?placeholderIfAbsent=true"
            person1={{ name: "Hanna Müller", color: "rgba(64,132,242,1)" }}
            person2={{ name: "Peter Braun", color: "rgba(250,204,21,1)" }}
            content="setzen sich für mehr"
            boldContent="Fahrradwege"
          />
        </section>
      </main>

      <footer className="mt-[63px] w-full">
        <BottomNav />
      </footer>
    </div>
  );
};

export default Index;
