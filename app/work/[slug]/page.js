import { works } from "@/data/works";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;

  const project = works.find(
    (work) => work.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section>
        <p className="text-zinc-500">
          {project.client} · {project.role}
        </p>

        <h1 className="text-5xl font-bold mt-2">
          {project.title}
        </h1>
      </section>

      {/* VIDEO */}
      <section className="mt-12">
        <video
          controls
          autoPlay
          muted
          loop
          className="w-full rounded-2xl"
        >
          <source
            src={project.video}
            type="video/mp4"
          />
        </video>
      </section>

      {/* OVERVIEW */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          Overview
        </h2>

        <p className="mt-4 text-lg text-zinc-600">
          {project.overview}
        </p>
      </section>

      {/* STRATEGY */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">
          Strategy
        </h2>

        <p className="mt-4 text-lg text-zinc-600">
          {project.strategy}
        </p>
      </section>

      {/* GALLERY */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-8">
          Key Stills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.gallery.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} ${index + 1}`}
              width={1200}
              height={800}
              className="rounded-xl w-full"
            />
          ))}
        </div>
      </section>

      {/* OUTCOME */}
      <section className="mt-20 pb-20">
        <h2 className="text-2xl font-semibold">
          Outcome
        </h2>

        <p className="mt-4 text-lg text-zinc-600">
          {project.outcome}
        </p>
      </section>
    </main>
  );
}