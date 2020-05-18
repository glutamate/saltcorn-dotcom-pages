const { textarea, text, div, span, i, h3, h4, p, a } = require("saltcorn-markup/tags");

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
        invertColor: true,
        besides: [
          {
            type: "blank",
            contents: div(
              h4("What is no-code?"),
              p(`No-code platforms let you build complex applications 
            without writing a single line of code. Saltcorn focuses
            on database-backed applications built for a mobile and 
            desktop web browsers, for yourself, internally for
            your team or company, or for the public.`)
            )
          },
          {
            type: "blank",
            contents: div(
              h4("Why open source?"),
              p(`With an open-source
            platform, you are in control of your application and your data. 
            We provide simple instructions for hosting on cloud providers and
            operating systems, or use our managed service.`)
            )
          }
        ]
      },
      {
        class: "pb-3",
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
              "people-carry",
              "Free & Open Forever",
              "Open source/free software - MIT license. Complete freedom and control. Move providers or platform, take your data with you. No vendor lock-in"
            )
          },
          {
            type: "blank",
            contents: iconText(
              "tree",
              "Get started with extensions",
              "Use open plugins, themes and packs to build your application"
            )
          }
        ]
      },
      {
        class: "pt-3",
        besides: [
          {
            type: "blank",
            contents: " "
          },
          {
            type: "blank",
            contents:  div({class:"text-center"},
              h4("Code links"),
              div({class:"d-flex"},
              div({class:"mx-3"},
                a({href:"https://github.com/glutamate/saltcorns"},
                i({ class: `fab fa-2x fa-github` }),
                )
              ),
              div({class:"mx-3"},
                a({href:"https://www.npmjs.com/package/@saltcorn/saltcorn"},
                i({ class: `fab fa-2x fa-npm` }),
                )
              ),

              
              ))
          },
          {
            type: "blank",
            contents: ""
          }
        ]
      }
    ]
  })
};

module.exports = { sc_plugin_api_version: 1, pages: { root } };
