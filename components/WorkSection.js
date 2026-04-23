import WorkCard from "./WorkCard";
import { works } from "@/data/works";

export default function WorkSection() {
  return (
    <section className="max-w-full mx-auto px-16 py-4 mb-8">
      <h2 className="text-3xl font-bold mb-10 text-black/80">Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            description={work.description}
            image={work.image}
            href={work.href}
          />
        ))}
      </div>
    </section>
  );
}