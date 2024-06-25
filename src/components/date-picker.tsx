"use client";

import * as React from "react";
import { addDays, format } from "date-fns";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { CalendarDays } from "lucide-react";

export function DatePicker({ limit = true }: { limit?: boolean }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <input
        required
        name="date"
        type="hidden"
        value={date?.toISOString()}
        contentEditable={false}
      />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            fromDate={limit ? new Date() : undefined}
            toDate={addDays(new Date(), 31)}
            required
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
