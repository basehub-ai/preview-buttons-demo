import { Pump } from "basehub/react-pump";
import { draftMode } from "next/headers";

export default function Home() {
  return (
    <Pump
      queries={[{ homepage: { title: true } }]}
      draft={draftMode().isEnabled}
    >
      {async ([{ homepage }]) => {
        "use server";

        return (
          <main>
            <h1 className="text-5xl">{homepage.title}</h1>
          </main>
        );
      }}
    </Pump>
  );
}
