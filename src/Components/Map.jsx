import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Map = () => {
  return (
    <section className="py-[50px] w-full bg-pr">
      <div className="container text-center ">
        <h1 className=" text-5xl md:text-6xl capitalize font-Japanese_3017">
          roadmap
        </h1>

        <VerticalTimeline className="mt-10 text-start" lineColor="#FFE083">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6C2F41", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "black", color: "#fff" }}
            // icon={<MdRocketLaunch />}
          >
            <h3 className="vertical-timeline-element-title font-Audiowide text-3xl capitalize">
              Token Launch
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize ">
                Smart contract deployment and audit
              </li>
              <li className="capitalize">Listing on decentralized exchanges</li>
              <li className="capitalize">Marketing and community building</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6C2F41", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "#F34A07", color: "#fff" }} // icon={<WorkIcon />}
            // icon={<BsBookmarkStarFill />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              Shiba Run Game Release
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize">
                Development and launch of Shiba Run game for iPhone
              </li>
              <li className="capitalize">
                Integration of in-game rewards with chinese tokens
              </li>
              <li className="capitalize">
                Partnership with popular influencers and content creators
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#FFE083", color: "#000" }}
            // icon={<GiFallingStar />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              Expansion and Partnerships{" "}
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize">
                {" "}
                Launching the game on additional platforms (Android, web, etc.)
              </li>
              <li className="capitalize">
                Collaboration with other meme token communities for
                cross-promotion
              </li>
              <li className="capitalize">
                Exploring strategic partnerships for wider adoption
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Map;
