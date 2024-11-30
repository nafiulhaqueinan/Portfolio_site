"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 0,
    text: "Years of Experience",
  },
  {
    num: 7,
    text: "Projects Completed",
  },
  {
    num: 9,
    text: "Technologies Mastered",
  },
  {
    num: 800,
    text: "Code commits",
  },
  {
    num: 2,
    text: "Research Paper",
  },
];

const Stats = () => {
  const youtubeVideoLink = "https://www.youtube.com/embed/f6rxoc2v99A";

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15
                      ? "max-w-[100px]"
                      : "max-w-[150px]"
                  } leading-sung text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Video Section */}
        <div className="mt-8">
          <h2 className="text-center text-xl font-bold text-white/80 mb-6">
            Watch the Video
          </h2>
          <div className="relative w-full max-w-5xl mx-auto" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
              src={youtubeVideoLink}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
