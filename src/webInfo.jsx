import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-base font-medium text-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-200 hover:bg-black/80 hover:text-white"
    >
      <span className="pb-[5px] text-2xl leading-none">×</span>
      <span>Close</span>
    </button>
  );
}

function ProjectDetail({ title, description, imageSrc, onClose }) {
  return (
    <div className="relative mx-auto min-h-screen w-full overflow-x-hidden rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100 px-5 pb-28 pt-8 lg:ml-2 lg:mr-2 lg:px-10">
      <div className="w-full">
        <h1 className="text-4xl font-bold tracking-[-0.04em] lg:text-5xl">
          {title}
        </h1>
        <div className="mt-8 max-w-[1100px] space-y-6 text-[18px] font-medium leading-[1.65] tracking-[-0.02em] text-neutral-500 lg:text-[22px]">
          {description}
        </div>
        <div className="mt-10">
          <img
            src={imageSrc}
            className="block w-full rounded-2xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            alt=""
          />
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
}

const WebInfo = () => {
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === "Personal Hub") {
    return (
      <ProjectDetail
        title={id}
        imageSrc="/projects/1.PNG"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              This Personal Hub is a thoughtfully designed productivity platform
              built to keep everyday tasks, routines, and ideas organized in one
              place. It includes a focused to-do list for managing priorities, a
              habit tracker for building consistency over time, and a notes
              section for storing important thoughts, reminders, and project
              ideas.
            </p>
            <p>
              Everything is backed by a Supabase database, so your data stays
              persistent, structured, and accessible whenever you need it. The
              goal of the project is to combine clean design with practical
              functionality, giving users a simple system that helps them stay
              on track without unnecessary complexity.
            </p>
          </>
        }
      />
    );
  }

  if (id === "To Do List") {
    return (
      <ProjectDetail
        title={id}
        imageSrc="/projects/4.png"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              A simple, old-school To Do List built with basic CSS and a
              straightforward structure. The project was created as a practical
              exercise in task management, focusing on the essential actions a
              user needs most, such as adding new tasks, marking items as
              complete, and removing them when they are no longer needed.
            </p>
            <p>
              It keeps the experience intentionally minimal so the functionality
              stays clear and easy to use. Although the design is basic, the
              project still serves its purpose well by providing a clean way to
              organize daily responsibilities without distractions. The layout
              reflects an early-stage build, where the priority was to establish
              the core logic and user flow first before moving toward more
              advanced styling or features.
            </p>
          </>
        }
      />
    );
  }

  if (id === "Online-Store") {
    return (
      <ProjectDetail
        title={id}
        imageSrc="/projects/5.png"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              An online store concept built to showcase a collection of perfumes
              in a clean and functional layout. The project is not focused on
              full e-commerce transactions, but instead on presenting products
              in an organized way so users can browse through the displayed
              items easily. It includes the visual structure of a store while
              keeping the experience simple and direct.
            </p>
            <p>
              The CSS is decent and balanced, giving the project a polished
              enough look without trying too hard to be overly advanced. It sits
              in a middle ground, where the design feels presentable and usable,
              but still leaves room for improvement. The main goal of the
              project is to demonstrate product presentation, layout structure,
              and basic storefront styling in a way that feels practical and
              straightforward.
            </p>
          </>
        }
      />
    );
  }

  if (id === "Instagram Replica") {
    return (
      <ProjectDetail
        title={id}
        imageSrc="/projects/6.png"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              An Instagram replica project built around a social feed for car
              images, where users can interact with posts by liking pictures and
              leaving comments. The goal of the project was to recreate the core
              experience of a social media platform in a focused way, with an
              emphasis on user interaction and clean content presentation.
            </p>
            <p>
              In addition to the feed, the project includes a login page, a
              signup page, and a forgot password option to simulate a more
              complete authentication flow. This makes the app feel more
              realistic and structured, while still keeping the scope centered
              on the main social features. The project demonstrates both
              interface design and basic platform functionality in a way that
              mirrors the feel of a real social media clone.
            </p>
          </>
        }
      />
    );
  }

  if (id === "Pass-Strength Analyzer") {
    return (
      <ProjectDetail
        title={id}
        imageSrc="/projects/7.png"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              A password strength analyzer built to evaluate password security
              in real time as the user types. The project checks the password
              live and gives immediate feedback on how strong or weak it is,
              making the core functionality the main focus of the build.
            </p>
            <p>
              The interface uses very basic, outdated CSS and intentionally
              keeps the visual design simple and unpolished. The project is
              mostly centered around JavaScript logic rather than styling, which
              makes it a more function-first exercise focused on interactivity,
              live input handling, and password validation behavior.
            </p>
          </>
        }
      />
    );
  }

  if (id === "Digital Clock") {
    return (
      <ProjectDetail
        title={id}
        imageSrc="/projects/8.png"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              A basic digital clock project built to display the current time in
              a simple, functional format. It updates like a normal digital
              clock and focuses on showing hours, minutes, and seconds clearly
              without adding unnecessary complexity.
            </p>
            <p>
              The design is very minimal, with almost no styling and a plain
              overall appearance. The project is intentionally basic, making it
              more of a functional JavaScript exercise than a visual one, while
              still working exactly like a standard digital clock.
            </p>
          </>
        }
      />
    );
  }

  if (id === "Capture") {
    return (
      <ProjectDetail
        title="Ultra Ego Physique Gym Website"
        imageSrc="/projects/Capture.PNG"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              Ultra Ego Physique is a gym website concept built to feel bold,
              high-energy, and visually sharp. It is more developed than the
              simpler portfolio projects and focuses on a stronger presentation
              layer for a fitness brand.
            </p>
            <p>
              The project combines a clean layout, confident typography, and a
              structured flow that fits a modern gym experience. It is built to
              look polished on first glance while still staying practical and
              easy to navigate.
            </p>
          </>
        }
      />
    );
  }

  if (id === "Musclelab") {
    return (
      <ProjectDetail
        title="Muscle Lab Gym Website"
        imageSrc="/projects/musclelab.PNG"
        onClose={() => nav("/")}
        description={
          <>
            <p>
              Muscle Lab is another gym website concept built around strong
              visuals and a clean front-end flow. The goal is to keep the site
              readable, sharp, and easy to move through while still feeling
              energetic.
            </p>
            <p>
              The layout uses spacing, contrast, and hierarchy to keep the page
              comfortable to read without making it feel empty. The result is a
              more polished gym presentation that sits well inside the
              portfolio.
            </p>
          </>
        }
      />
    );
  }

  return null;
};

export default WebInfo;
