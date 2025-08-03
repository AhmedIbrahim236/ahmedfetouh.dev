const Code = () => {
  return (
    <div className="mt-4 w-full max-w-md bg-card rounded-lg shadow-lg overflow-hidden border animate-fade-in opacity-90 hover:opacity-100 transition-all duration-300">
      <div className="bg-muted p-2 flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
        <div className="w-3 h-3 rounded-full bg-accent/70"></div>
        <div className="w-3 h-3 rounded-full bg-primary/70"></div>
      </div>
      <pre className="text-left p-4 overflow-x-auto font-mono text-sm">
        <code>
          <span className="text-blue-500 dark:text-blue-400">function</span>{" "}
          <span className="text-green-500 dark:text-green-400">
            createExperience
          </span>
          (<span className="text-orange-500 dark:text-orange-400">passion</span>
          ) {"{"}
          <br />
          {"  "}
          <span className="text-purple-500 dark:text-purple-400">
            const
          </span>{" "}
          skills = [
          <span className="text-accent dark:text-accent/90">React</span>,{" "}
          <span className="text-accent dark:text-accent/90">Node.js</span>,{" "}
          <span className="text-accent dark:text-accent/90">TypeScript</span>
          ];
          <br />
          {"  "}
          <span className="text-blue-500 dark:text-blue-400">return</span>{" "}
          skills.
          <span className="text-green-500 dark:text-green-400">map</span>
          (skill =&gt; skill + passion);
          <br />
          {"}"};
        </code>
      </pre>
    </div>
  );
};

export default Code;
