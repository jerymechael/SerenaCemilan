import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Order",
  description: "Track the status of your Serena Cemilan order.",
};

export default function TrackOrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
