import React, { useEffect, useRef, useState } from "react";
import ImageSlider from "./imageSliderPics.jsx";
import { useLottie } from "lottie-react";
import Animation2 from "../animations/Connect.json";

function useRevealOnce() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return [ref, shown];
}

const Home = () => {
  let [aiANS, setAIAns] = useState("");
  let [aiDisplay, setAIDisplay] = useState(false);
  let [value, setValue] = useState("");
  const QaA = [
    {
      que: "what is your name",
      ans: "I am caprarim, a front-end developer who is on the journey to be a fullstack dev :)",
      shortForm: /name|who/,
    },
    {
      que: "why did u start coding",
      ans: "Coding my passion and i enjoy it",
      shortForm: /why|start|passion/,
    },
    {
      que: "wow much experience do you have",
      ans: "I have 6 months of experience with front-end",
      shortForm: /experience|long/,
    },
    {
      que: "you have a portfolio?",
      ans: "Yes! I do have portfolio, It's uploaded in github and also, in this website you're in :)",
      shortForm: /portfolio|work|find|where/,
    },
    {
      que: "hi",
      ans: "Hello! What would you like to ask about me?",
      shortForm: /^(hi|hey|hii|heya|hello|yo)$/,
    },
    {
      que: "how are you",
      ans: "I'm good! What would you like to know about me?",
      shortForm: /how|good|wsp|wsg/,
    },
    {
      que: "how old are u",
      ans: "I'm 16 years old",
      shortForm: /age|old/,
    },
  ];

  function submitQuestion() {
    setAIAns("");
    const trimmedVal = value.trim().toLowerCase();
    if (trimmedVal.trim().toLowerCase() === "") {
      setAIAns("You must write something");
      setValue("");
      return;
    }
    const matchedQuestion = QaA.find((q) => {
      return trimmedVal === q.que || q.shortForm.test(trimmedVal);
    });
    if (matchedQuestion) {
      setAIAns(matchedQuestion.ans);
    } else {
      setAIAns("Sorry! I cannot answer this question!");
    }
    console.log(matchedQuestion);
    setValue("");
  }
  const featuredProjects = [
    {
      imgSrc: "/projects/1.PNG",
      webName: "Personal Hub",
      webDesc: "Functionality, Logic, Web Design",
    },
    {
      imgSrc: "/projects/4.png",
      webName: "To Do List",
      webDesc: "Functionality, Logic, Web Design",
    },
    {
      imgSrc: "/projects/5.png",
      webName: "Online-Store",
      webDesc: "Functionality, Logic, Web Design",
    },
    {
      imgSrc: "/projects/6.png",
      webName: "Instagram Replica",
      webDesc: "Functionality, Logic, Web Design",
    },
    {
      imgSrc: "/projects/7.png",
      webName: "Pass-Strength Analyzer",
      webDesc: "Functionality, Logic, Web Design",
    },
    {
      imgSrc: "/projects/8.png",
      webName: "Digital Clock",
      webDesc: "Functionality and Logic Focused",
    },
    {
      imgSrc: "/projects/Capture.PNG",
      webName: "Capture",
      webDesc: "Functionality, Logic, Web Design",
    },
    {
      imgSrc: "/projects/musclelab.PNG",
      webName: "Musclelab",
      webDesc: "Functionality, Logic, Web Design",
    },
  ];

  const heroLetters = [
    { key: "c", char: "C", image: "/projects/1.PNG" },
    { key: "a1", char: "A", image: "/projects/2.PNG" },
    { key: "p", char: "P", image: "/projects/3.png" },
    { key: "r1", char: "R", image: "/projects/4.png" },
    { key: "a2", char: "A", image: "/projects/5.png" },
    { key: "r2", char: "R", image: "/projects/6.png" },
    { key: "i", char: "I", image: "/projects/7.png" },
    { key: "m", char: "M", image: "/projects/8.png" },
  ];

  const sliderRows = [0, 1];

  const [heroRef, heroShown] = useRevealOnce();
  const [workTitleRef, workTitleShown] = useRevealOnce();
  const [workGridRef, workGridShown] = useRevealOnce();
  const [aboutRef, aboutShown] = useRevealOnce();
  const [storyRef, storyShown] = useRevealOnce();
  const [connectRef, connectShown] = useRevealOnce();
  const [activeLetter, setActiveLetter] = useState(null);
  const [leavingLetter, setLeavingLetter] = useState(null);

  const revealBase =
    "transition-all duration-700 ease-out will-change-transform";
  const revealHidden = "opacity-0 translate-y-8 scale-[0.98]";
  const revealShown = "opacity-100 translate-y-0 scale-100";
  const revealClass = (shown) =>
    `${revealBase} ${shown ? revealShown : revealHidden}`;

  const { View: ConnectView } = useLottie(
    {
      animationData: Animation2,
      loop: true,
    },
    { width: 200, height: 200 },
  );
  let [isNavDisplay, setNavDisplay] = useState(false);
  function showOptions() {
    setNavDisplay(true);
  }

  function hideSideBar() {
    setNavDisplay(false);
  }

  function isInCoreLetterArea(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const insetX = rect.width * 0.28;
    const insetY = rect.height * 0.28;

    return (
      x > insetX &&
      x < rect.width - insetX &&
      y > insetY &&
      y < rect.height - insetY
    );
  }

  function handleLetterMove(event, key) {
    if (isInCoreLetterArea(event)) {
      setActiveLetter(key);
      return;
    }

    if (activeLetter === key) {
      setActiveLetter(null);
    }
  }

  function handleLetterLeave(key) {
    if (activeLetter === key) {
      setActiveLetter(null);
    }
  }

  function handleLetterClick(key) {
    setLeavingLetter(key);
    setActiveLetter(null);
    setTimeout(() => {
      setLeavingLetter((current) => (current === key ? null : current));
    }, 220);
  }

  const openAiAssistant = () => {
    setAIDisplay(true);
  };

  const closeAiAssistant = () => {
    setAIDisplay(false);
  };

  return (
    <>
      {aiDisplay && (
        <div
          onClick={closeAiAssistant}
          className="fixed inset-0 z-[110] flex items-start justify-end bg-black/45 p-3 sm:p-5 lg:p-8"
        >
          <article
            onClick={(event) => event.stopPropagation()}
            className="mt-18 w-full max-w-[92vw] rounded-3xl border border-white/25 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#312e81] p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:mt-20 sm:max-w-[460px] sm:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
              <h3 className="text-lg font-semibold tracking-wide text-white sm:text-2xl">
                Ask me anything
              </h3>
              <button
                type="button"
                onClick={closeAiAssistant}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              >
                <span className="inline-flex items-center justify-center text-xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <input
                type="text"
                className="w-full rounded-xl border border-white/25 bg-white/95 px-4 py-3 text-sm tracking-wide text-black outline-none transition placeholder:text-gray-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/35 sm:text-base"
                placeholder="Ask about my work, experience, or journey..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                type="button"
                onClick={submitQuestion}
                className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_20px_rgba(124,58,237,0.35)] transition hover:brightness-110 sm:text-base"
              >
                Submit
              </button>
              <p className="min-h-[68px] rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm leading-relaxed tracking-wide text-gray-100 sm:text-base">
                {aiANS || "Ask a question and I will answer here."}
              </p>
            </div>
          </article>
        </div>
      )}

      <div className="relative overflow-x-hidden lg:ml-[25px] lg:mr-[25px] ml-[15px] mr-[15px] min-h-screen">
        <section className="fixed left-1/2 top-4 z-50 w-[calc(100vw-30px)] -translate-x-1/2 lg:w-fit">
          <div className="rounded-[1.25rem] border border-white/10 bg-black/70 px-3 py-2 font-sans text-base font-medium text-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.25)] backdrop-blur-md lg:rounded-full lg:px-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={isNavDisplay ? hideSideBar : showOptions}
                className="flex min-w-0 flex-1 items-center justify-between rounded-full px-2 py-1 text-[17px] font-semibold text-white lg:hidden"
              >
                <span>Menu</span>
                <span className="relative ml-3 h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${isNavDisplay ? "translate-y-2 rotate-45 opacity-0" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${isNavDisplay ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-black transition-all duration-300 ${isNavDisplay ? "-translate-y-2 -rotate-45 opacity-0" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-0 text-2xl leading-none transition-all duration-300 ${isNavDisplay ? "opacity-100" : "opacity-0"}`}
                  ></span>
                </span>
              </button>

              <div className="hidden items-center gap-2 lg:flex">
                <a
                  href="#home"
                  className="cursor-pointer rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:bg-white/8 hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#story"
                  className="cursor-pointer rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:bg-white/8 hover:text-white"
                >
                  Story
                </a>
                <a
                  href="#connect"
                  className="cursor-pointer rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:bg-white/8 hover:text-white"
                >
                  Connect
                </a>
                <a
                  href="#work"
                  className="cursor-pointer rounded-full px-4 py-1.5 text-white/85 transition-colors duration-200 hover:bg-white/15 hover:text-white"
                >
                  Work
                </a>
                <a
                  href="#"
                  onClick={() => setAIDisplay(true)}
                  className="cursor-pointer rounded-full px-4 py-1.5 text-white/85 transition-colors duration-200 hover:bg-white/15 hover:text-white"
                >
                  AI
                </a>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${isNavDisplay ? "mt-2 max-h-[320px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-2 rounded-[1.25rem] border border-white/10 bg-black/70 p-2 text-center text-white/70">
                <a
                  href="#home"
                  onClick={hideSideBar}
                  className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#story"
                  onClick={hideSideBar}
                  className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  Story
                </a>
                <a
                  href="#work"
                  onClick={hideSideBar}
                  className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  Work
                </a>
                <a
                  href="#connect"
                  onClick={hideSideBar}
                  className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </section>
        <button
          type="button"
          onClick={openAiAssistant}
          className="fixed right-4 top-5 z-[105] flex items-center gap-2 rounded-full border border-violet-200/40 bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 px-4 py-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(79,70,229,0.35)] transition hover:scale-[1.03] hover:brightness-110 sm:right-6 sm:top-6 sm:px-5 sm:py-2.5 sm:text-base"
        >
          <span className="text-base sm:text-lg">🤖</span>
          <span>AI</span>
        </button>
        <section
          className="relative isolate min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat lg:pt-28 lg:pb-8"
          style={{
            backgroundImage: "url('/myBg.png')",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            ref={heroRef}
            id="home"
            className={`relative mx-5 flex w-full max-w-[1200px] flex-col items-start justify-end lg:mx-10 ${revealClass(heroShown)}`}
          >
            <div className="flex flex-col mb-15 justify-center items-center">
              <h1 className="mt-100 lg:mt-35 text-[20px] font-medium leading-[1.08] tracking-[-0.04em] text-neutral-500 lg:text-[clamp(1.75rem,2.3vw,3rem)]">
                Hello! Meet your trusted web developer , building websites for
                entrepreneurs and businesses.
              </h1>
            </div>
            <div className="flex justify-center lg:mb-0">
              <div className="flex h-[500px] max-w-[1400px] lg:ml-40 justify-center whitespace-nowrap uppercase tracking-[-0.08em] text-[clamp(3.75rem,11vw,6rem)] font-black leading-none text-black sm:text-[clamp(4.5rem,10vw,7rem)] lg:text-[clamp(22.5rem,7vw,8rem)]">
                {heroLetters.map((letter) => (
                  <span
                    key={letter.key}
                    className="relative inline-block h-fit w-fit cursor-pointer align-baseline leading-none"
                    onMouseMove={(event) => handleLetterMove(event, letter.key)}
                    onMouseLeave={() => handleLetterLeave(letter.key)}
                    onClick={() => handleLetterClick(letter.key)}
                  >
                    {letter.char}
                    <img
                      src={letter.image}
                      alt=""
                      className={`pointer-events-none absolute left-1/2 top-1/2 z-20 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover transition-all duration-200 ease-out ${activeLetter === letter.key ? "opacity-100 scale-100" : leavingLetter === letter.key ? "opacity-0 scale-95" : "opacity-0 scale-95"}`}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="work"
          ref={workTitleRef}
          className={`mt-50 flex justify-center content-auto ${revealClass(workTitleShown)}`}
        >
          <h1 className="text-center mb-10 font-sans text-4xl font-black uppercase tracking-[-0.05em] text-black lg:text-7xl">
            my latest work
          </h1>
        </section>
        <div
          ref={workGridRef}
          className={`mx-auto grid max-w-[2400px] grid-cols-1 justify-items-center gap-5 bg-gray-100 pb-5 pt-15 overflow-hidden lg:grid-cols-3 ${revealClass(workGridShown)}`}
        >
          {featuredProjects.map((project) => (
            <ImageSlider
              key={project.webName}
              imgSrc={project.imgSrc}
              webName={project.webName}
              webDesc={project.webDesc}
            />
          ))}
        </div>
        <div
          ref={aboutRef}
          id="story"
          className={`flex justify-center items-center mt-2 lg:mb-0 mb-2 text-5xl font-mono font-bold ${revealClass(aboutShown)}`}
        >
          About me
        </div>
        <div className="grid grid-cols-1 lg:mt-5 lg:grid-cols-[600px_1fr] lg:grid-rows-[600px_200px] gap-5 max-h-[400px] content-auto">
          <div>
            <div
              ref={storyRef}
              className={`bg-gray-200 lg:pt-95 pl-5 pr-5 lg:pb-16 rounded-2xl h-[500px] lg:h-[600px] pt-2 font-sans text-[20px] leading-[1.35] font-medium tracking-[-0.02em] text-neutral-500 ${revealClass(storyShown)}`}
            >
              <p>
                Growing up, i always had the idea about how websites are made
                and how they function. However, i never really got into it
                because i had gotten addicted to video games{"."}
              </p>
              <p className="mt-2">
                That is, until i realized i destroying my life. So, i quit and i
                got into coding {"=)"} I do have less experience with
                programming, about 5 months with front-end development, but i
                get better everyday.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-200">
            <div className="flex w-max  gap-5 animate-[slide_20s_linear_infinite] will-change-transform">
              <div className="flex gap-5 h-[650px] items-center">
                {featuredProjects.map((project) => (
                  <ImageSlider
                    key={project.webName}
                    imgSrc={project.imgSrc}
                    webName={project.webName}
                    webDesc={project.webDesc}
                    compactMobile
                  />
                ))}
              </div>

              <div
                className="flex gap-5 h-[650px] items-center"
                aria-hidden="true"
              >
                {featuredProjects.map((project) => (
                  <ImageSlider
                    key={`dup-${project.webName}`}
                    imgSrc={project.imgSrc}
                    webName={project.webName}
                    webDesc={project.webDesc}
                    compactMobile
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={connectRef}
          id="connect"
          className={`lg:mt-65 mt-205 flex lg:flex-row flex-col lg:h-[110px] max-w-[2400px] rounded-2xl bg-gray-200 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] content-auto ${revealClass(connectShown)}`}
        >
          <div className="flex lg:items-center justify-center lg:justify-start">
            <p className="whitespace-nowrap font-sans text-[30px] font-medium tracking-[-0.05em] text-black">
              <span className="mr-2"></span>Connect with me
            </p>
          </div>

          <div className="flex flex-[1.4] items-center lg:justify-end justify-center mt-5 lg:mt-0 gap-4">
            <div className="group flex flex-col items-center ">
              <a
                href="https://www.youtube.com/@caprarim"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[34%_66%_58%_42%_/_44%_38%_62%_56%] bg-[#ffffff] p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:rounded-[52%_48%_70%_30%_/_33%_63%_37%_67%] group-hover:-rotate-6">
                  <img
                    src="/projects/yt.png"
                    alt="YouTube"
                    className="h-full w-full object-contain hover:rotate-2"
                  />
                </div>
                <span className="mt-1 text-[13px] font-medium text-black/0 transition-all duration-300 group-hover:text-black">
                  Instagram
                </span>
              </a>
            </div>

            <div className="group flex flex-col items-center">
              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[44%_56%_32%_68%_/_50%_34%_66%_50%] bg-[#ffffff] p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:rounded-[60%_40%_58%_42%_/_37%_58%_42%_63%] group-hover:rotate-4">
                  <img
                    src="/projects/discord.png"
                    alt="Discord"
                    className="h-full w-full object-contain hover:rotate-4"
                  />
                </div>
                <span className="mt-1 text-[13px] font-medium text-black/0 transition-all duration-300 group-hover:text-black">
                  Discord
                </span>
              </a>
            </div>

            <div className="group flex flex-col items-center">
              <a
                href="https://github.com/caprarim"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[58%_42%_60%_40%_/_44%_60%_40%_56%] bg-[#ffffff] p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:rounded-[36%_64%_40%_60%_/_58%_42%_58%_42%] group-hover:-rotate-3">
                  <img
                    src="/projects/git.png"
                    alt="GitHub"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-1 text-[13px] font-medium text-black/0 transition-all duration-300 group-hover:text-black">
                  GitHub
                </span>
              </a>
            </div>

            <div className="group flex flex-col items-center">
              <a
                href="https://www.instagram.com/caprarim.codes/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[30%_70%_42%_58%_/_55%_34%_66%_45%] bg-[#ffffff] p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:rounded-[58%_42%_52%_48%_/_40%_60%_40%_60%] group-hover:rotate-3">
                  <img
                    src="/projects/ig.png"
                    alt="Instagram"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-1 text-[13px] font-medium text-black/0 transition-all duration-300 group-hover:text-black">
                  Youtube
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
