import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "oltjiytm",
  dataset: "production",
  useCdn: true,
});
export default client;
