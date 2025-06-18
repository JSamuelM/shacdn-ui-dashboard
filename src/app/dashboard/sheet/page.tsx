"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Page() {

  const [open, setOpen] = useState(false)

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button onClick={ () => setOpen(true) }>Open</Button>

      <Sheet open={ open } onOpenChange={ setOpen }>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}