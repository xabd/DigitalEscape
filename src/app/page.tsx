"use client";

import { useState } from "react";
import tools from "@/data/tools.json";
import Link from "next/link";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-gray-100 dark:bg-gray-800 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-violet-400">
          🔐 DigitalEscape
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-center text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-fade-in mb-6">
          Your trusted guide to the best privacy-first tools
        </p>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search tools..."
            className="px-4 py-2 rounded-md border shadow-sm focus:outline-none focus:ring focus:border-indigo-300 dark:bg-gray-700 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* Body: Sidebar + Grid */}
      <div className="flex gap-6 px-6 py-6">
        {/* Sidebar (filters or tags) */}
        <aside className="w-64 hidden md:block">
          <h2 className="text-lg font-semibold mb-3">📂 Categories</h2>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 dark:text-gray-300">
              🔐 Privacy
            </li>
            <li className="text-sm text-gray-600 dark:text-gray-300">
              🛡️ Security
            </li>
            <li className="text-sm text-gray-600 dark:text-gray-300">
              📧 Email
            </li>
            <li className="text-sm text-gray-600 dark:text-gray-300">🌍 VPN</li>
            <li className="text-sm text-gray-600 dark:text-gray-300">
              🔒 Passwords
            </li>
            {/* Add dynamic filters later if you want */}
          </ul>
        </aside>

        {/* Main content area */}
        <section className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <Link key={tool.slug} href={`/${tool.slug}`}>
              <div className="card cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {tool.description}
                </p>
                <div className="text-xs flex flex-wrap gap-1">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-100 dark:bg-violet-800 text-indigo-700 dark:text-violet-100 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
