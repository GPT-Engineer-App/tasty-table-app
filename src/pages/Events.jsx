import { Calendar } from "@/components/ui/calendar";

function Events() {
  const events = [
    { date: "2023-10-01", title: "Live Music Night" },
    { date: "2023-10-15", title: "Wine Tasting" },
    { date: "2023-10-30", title: "Halloween Party" },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      <Calendar events={events} />
    </main>
  );
}

export default Events;