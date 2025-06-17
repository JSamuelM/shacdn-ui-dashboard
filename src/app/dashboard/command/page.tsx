"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function Page() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="h-[500px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => console.log("Calendar")}>Calendar</CommandItem>
            <CommandItem onSelect={() => console.log("Search Emoji")}>Search Emoji</CommandItem>
            <CommandItem onSelect={() => console.log("Calculator")}>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => console.log("Profile")}>Profile</CommandItem>
            <CommandItem onSelect={() => console.log("Billing")}>Billing</CommandItem>
            <CommandItem onSelect={() => console.log("Settings")}>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <div className="mt-10 h-[200px] flex justify-center items-center">
        <p className="text-muted-foreground text-sm">
          Press{" "}
          <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">⌘</span>K
          </kbd>
          { " " }or{ " " }
          <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">CTRL</span>+ K
          </kbd>
        </p>
      </div>
    </div>
  );
}