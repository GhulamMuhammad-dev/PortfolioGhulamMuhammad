import Link from "next/link";
import Image from "next/image";
import { works } from "@/data/works";

export default function WorkSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      {works.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
        >
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="text-zinc-500 mt-2">
              {project.overview}
            </p>
          </article>
        </Link>
      ))}
    </section>
  );
}