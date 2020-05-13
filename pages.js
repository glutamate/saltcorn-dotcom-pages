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
        caption: "Open source extensible no-code platform",
        blurb: "Saltcorn is ..."
      },
      {
        besides: [
          {
            type: "blank",
            contents: iconText(
              "gem",
              "Sturdy Themes",
              "Our themes are updated regularly to keep them bug free!"
            )
          },
          {
            type: "blank",
            contents: "blah"
          },
          {
            type: "blank",
            contents: "blah"
          }
        ]
      }
    ]
  })
};

module.exports = { pages: { root } };
