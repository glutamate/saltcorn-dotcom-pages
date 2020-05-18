const { textarea, text, div, i, h3, p } = require("saltcorn-markup/tags");

const iconText = (icon, header, blurb) =>
  div(
    { class: "mt-5 text-center" },
    i({ class: `fas fa-4x fa-${icon} text-primary mb-4` }),
    h3({ class: "h4 mb-2" }, header),
    p({ class: "text-muted mb-0" }, blurb)
  );

const root = {
  title: "Saltcorn | Home",
  getPage: async () => ({
    above: [
      {
        type: "hero",
        caption: "Open-source &ensp; extensible &ensp; no-code",
        blurb: "Saltcorn is ..."
      },
      {
        besides: [
          {
            type: "blank",
            contents: iconText(
              "concierge-bell",
              "Simply without writing code",
              "Build database-backed applications without writing a single line of code"
            )
          },
          {
            type: "blank",
            contents: iconText(
              "tree",
              "Get started with extensions",
              "Use open plugins, themes and packs to build your application"
            )
          },
          {
            type: "blank",
            contents: iconText(
              "people-carry",
              "Open & Free Forever",
              "Open source/free software - MIT license. Complete freedom and control. Move providers or platform, take your data with you. No vendor lock-in"
            )
          }
        ]
      }
    ]
  })
};

module.exports = { sc_plugin_api_version: 1, pages: { root } };
