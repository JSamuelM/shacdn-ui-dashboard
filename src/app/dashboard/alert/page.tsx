import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckIcon, Terminal } from "lucide-react";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert variant="default">
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckIcon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}