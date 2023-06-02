import React from "react";

const Game = () => {
  return (
    <section className="py-[50px] about w-full bg-text text-primary">
      <div className="container grid justify-between items-center lg:grid-cols-2 gap-10">
        <div className="">
          <h1 className=" text-5xl md:text-6xl capitalize font-Japanese_3017">
            Shiba Run Game
          </h1>
          <p className="text-primary  font-mono mt-5">
            Shiba Run is an addictive continuous running and jumping game that
            provides a fun-filled experience to players. The game features
            adorable Shiba Inu characters hopping over hurdles, collecting
            rewards, and competing for high scores. Available on iPhone, the
            game is designed to be intuitive, engaging, and suitable for players
            of all ages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Game;
