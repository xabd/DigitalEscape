// File: app/[slug]/page.tsx
import tools from "@/data/tools.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolDetail({
  params,
}: {
  params: { slug: string };
}) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
      <p className="text-white-700 mb-4">{tool.description}</p>

      <ul className="mb-6">
        {tool.features.map((f, i) => (
          <li key={i} className="list-disc ml-6 text-sm text-white-800">
            {f}
          </li>
        ))}
      </ul>

      <div className="mb-4">
        {tool.tags?.map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-gray-100 text-sm text-gray-700 px-2 py-1 mr-2 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Visit Official Site
      </a>
    </main>
  );
}
