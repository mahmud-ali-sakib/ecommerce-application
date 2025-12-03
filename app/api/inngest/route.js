import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { syncUserCreation } from "@/inngest/functions";
import { syncUserDeletion } from "@/inngest/functions";
import { syncUserUpdation } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    /* your functions will be passed here later! */
  ],
});
