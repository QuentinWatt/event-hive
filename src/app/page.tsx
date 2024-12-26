import { db } from "@/db";
import { eventsTable } from "@/db/schema/index";
import { desc } from "drizzle-orm";

export default async function Home() {
  const firstEvent = await db.query.eventsTable.findFirst({
    orderBy: desc(eventsTable.createdAt),
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Event Hive</h1>

      {firstEvent ? (
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">{firstEvent.name}</h2>
          <p className="text-gray-600">{firstEvent.description}</p>
          <p className="mt-2">
            📍 {firstEvent.location} • 📅{" "}
            {firstEvent.date_from.toLocaleDateString()} -{" "}
            {firstEvent.date_until.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>No events found</p>
      )}
    </main>
  );
}
