const STEPS = [
  { title: "Detected", body: "Roblox economy analytics showed individual wallets and average transactions far out of range. A live playtest confirmed it." },
  { title: "Contained", body: "Shut down the live servers so no one else could farm it." },
  { title: "Fixed", body: "An unhandled missing-data case looped and stacked elimination credit. I patched it and added explicit exit conditions." },
  { title: "Repaired", body: "Rolled back currency for the affected players: about 5 of 100 online." },
  { title: "Reopened", body: "Brought the servers back on the patched build." },
];

const Incident = () => {
  return (
    <section className="band" id="incident">
      <h2>What I did when my live game's economy broke</h2>
      <p className="intro">
        A bug let a handful of players earn millions of currency instead of a few hundred per elimination. Here is how it went, from detection to reopening.
      </p>
      <ol className="steps">
        {STEPS.map(({ title, body }) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{body}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Incident;
