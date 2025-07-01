import { renderRouter, screen, waitFor } from "expo-router/testing-library";

describe("Explore Screen", () => {
  it("renders correctly", async () => {
    renderRouter({
      appDir: "app",
      overrides: {},
    });

    await waitFor(() => {
      screen.debug();
    });
  });
});
