import tools from "@/data/tools.json";
import { notFound } from "next/navigation";

// Tell Next.js we're generating all possible routes statically
export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

type ToolDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    return notFound();
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {tool.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {tool.description}
        </p>

        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-6"
        >
          Visit Official Site
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {tool.features && tool.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Key Features
          </h2>
          <ul className="space-y-2">
            {tool.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tool.tags && tool.tags.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            TAGS
          </h2>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
