import React from "react";

const Essay = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Project Overview: A Journey Through History
        </h1>

        {/* Brief Synopsis of Argument */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Brief Synopsis of Argument
          </h2>
          <p className="text-lg text-gray-700">
            This project tries to explore over a century of systemic challenges,
            opportunities, and cultural shifts experienced by Black Americans.
            In the game, players are put in the shoes of Samuel, a fictional
            Black man as he navigates through historical scenarios showing the
            effects systemic racism, resilience, and economic hardship have on
            real lives. The project uses interactive decision-making in a way to
            create empathy and awareness of questions of historical and social
            injustices, giving you a glimpse of the struggles throughout time.
          </p>
        </section>

        {/* Descriptive Paragraph of Project */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Descriptive Paragraph of Project
          </h2>
          <p className="text-lg text-gray-700">
            The project is an interactive web-based game that spans from the
            1920s to the 2020s. Using the medium of a text-based game, players
            are guided through pivotal decades in American history, dealing with
            challenges in each era. I chose to make a game for this project
            because it allows for active engagement from everyone, and who
            doesn’t like a fun game.
          </p>
        </section>

        {/* Process, Materials, and Schedule */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Single-Paragraph Description of Process, Necessary Materials, and
            Proposed Schedule
          </h2>
          <p className="text-lg text-gray-700">
            The project involves designing and coding a React-based web
            application using JavaScript, HTML, CSS, and Tailwind CSS for
            styling. Each decade is implemented as a separate game component
            with unique scenarios, choices, and outcomes, creating a cohesive
            narrative. Development begins with structuring the React components
            and implementing game logic, followed by testing and debugging for a
            seamless user experience. Necessary tools include a computer with a
            code editor (e.g., VSCode), React libraries, and deployment software
            (e.g., Vercel). The schedule is divided into three phases: (1) core
            game functionality and 1920s-1960s components (week 1), (2) final
            decades and testing (week 2), and (3) polishing the design,
            integrating feedback, and final deployment (week 3).
          </p>
        </section>
      </div>
    </div>
  );
};

export default Essay;
