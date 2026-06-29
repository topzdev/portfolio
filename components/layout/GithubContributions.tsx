"use client";

import Link from "next/link";
import { SVGProps, useEffect, useMemo, useState } from "react";
import { Button } from "../ui/Button";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ApiResponse = {
  total: Record<string, number> | number;
  contributions: ContributionDay[];
};

type CalendarState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; days: ContributionDay[]; total: number };

const LEVEL_CLASS: Record<ContributionDay["level"], string> = {
  0: "bg-white/[0.06]",
  1: "bg-[#0993e5]/30",
  2: "bg-[#0993e5]/55",
  3: "bg-[#0993e5]/80",
  4: "bg-[#3db4ff]",
};

function buildWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  const weeks: (ContributionDay | null)[][] = [];
  let current: (ContributionDay | null)[] = [];

  days.forEach((day, index) => {
    const weekday = new Date(day.date).getUTCDay();

    if (index === 0 && weekday !== 0) {
      for (let pad = 0; pad < weekday; pad += 1) {
        current.push(null);
      }
    }

    current.push(day);

    if (weekday === 6) {
      weeks.push(current);
      current = [];
    }
  });

  if (current.length > 0) {
    while (current.length < 7) {
      current.push(null);
    }
    weeks.push(current);
  }

  return weeks;
}

function buildPlaceholderDays(): ContributionDay[] {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);

  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 364);

  const days: ContributionDay[] = [];

  for (const cursor = new Date(start); cursor <= end; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
    days.push({
      date: cursor.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    });
  }

  return days;
}

const PLACEHOLDER_WEEKS = buildWeeks(buildPlaceholderDays());

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}


export function IcTwotoneOpenInNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE */}<path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z" /></svg>
  )
}

export function GithubContributions({ username }: { username: string }) {
  const [state, setState] = useState<CalendarState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as ApiResponse;
        const days = data.contributions ?? [];
        const total = days.reduce((sum, day) => sum + day.count, 0);

        setState({ status: "ready", days, total });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("GitHub contributions fetch failed:", error);
        setState({ status: "error" });
      }
    }

    void load();

    return () => controller.abort();
  }, [username]);

  const weeks = useMemo(
    () =>
      state.status === "ready" ? buildWeeks(state.days) : PLACEHOLDER_WEEKS,
    [state],
  );

  const isLoading = state.status === "loading";

  if (state.status === "error") {
    return null;
  }

  return (
    <section
      aria-label="GitHub contributions in the last year"
      className=""
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide text-[#dddddd]">GitHub</h2>
        <Link href="https://github.com/topzdev" target="_blank">
          <Button variant="ghost" className="!gap-1">
            @topzdev <IcTwotoneOpenInNew className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="pb-1">
        <div className="inline-flex flex-col justify-between w-full">
          <div className="flex justify-between w-full">
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex flex-col justify-between w-full gap-2 sm:gap-3"
              >
                {week.map((day, dayIndex) =>
                  day ? (
                    <span
                      key={day.date}
                      className={`sm:h-2 sm:w-2 h-1 w-1 rounded-lg ${LEVEL_CLASS[day.level]}`}
                      title={
                        isLoading
                          ? undefined
                          : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`
                      }
                      aria-hidden={isLoading}
                    />
                  ) : (
                    <span
                      key={`empty-${weekIndex}-${dayIndex}`}
                      className="sm:h-2 sm:w-2 h-1 w-1 rounded-lg bg-transparent"
                      aria-hidden
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-light text-[#bdbdbd]">
          {state.status === "ready" ? (
            <>
              <span className="font-semibold text-white">
                {state.total.toLocaleString()}
              </span>{" "}
              contributions in the last year
            </>
          ) : <>&nbsp;</>}
        </p>
      </div>
    </section>
  );
}
