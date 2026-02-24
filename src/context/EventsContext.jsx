import { createContext, useContext, useState } from "react";
import { events as initialEvents } from "../data/events";

const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (event) => {
    setEvents((prev) => {
      const nextId =
        prev.length > 0 ? Math.max(...prev.map((e) => e.id)) + 1 : 1;
      return [...prev, { ...event, id: nextId }];
    });
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e))
    );
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <EventsContext.Provider
      value={{ events, addEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export const useEvents = () => {
  const ctx = useContext(EventsContext);
  if (!ctx) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return ctx;
};

