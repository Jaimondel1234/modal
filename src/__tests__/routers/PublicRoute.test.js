import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { PublicRoute } from "../../routers/PublicRoute";

describe("Test <PublicRoute/>", () => {
  const props = { location: { pathname: "/" } };

  test("it must show the item if it is not authenticated", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={true}
          component={() => <span>Span Text</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(false);
  });

  test("it must display the item if it is not authenticated", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={false}
          component={() => <span>Span Text</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
