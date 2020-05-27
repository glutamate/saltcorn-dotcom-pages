const { textarea, text, div, span, i, h3, h4, p, a, nbsp } = require("@saltcorn/markup/tags");

const iconText = (icon, header, blurb) =>
  div(
    { class: "mt-5 text-center" },
    i({ class: `fas fa-4x fa-${icon} text-primary mb-4` }),
    h3({ class: "h4 mb-2" }, header),
    p({ class: "text-muted mb-0" }, blurb)
  );

const exampleCard = (icon, header, blurb, link) =>
  ({
    type: "card",
    contents: div(
      { class: "mt-2 text-center" },
      
      h3({ class: "h4 mb-2" }, header),
      i({ class: `fa-2x ${icon} text-primary mb-4` }),
      p({ class: "text-muted mb-0" }, blurb),
      a({href:link}, link)
    )
  })

const root = {
  title: "Saltcorn | Home",
  getPage: async () => ({
    above: [
      {
        type: "hero",
        caption: "Open-source<br/>extensible no-code",
        blurb: "Saltcorn is a free and open platform for assembling your application from building blocks without writing any code",
        backgroundImage: 'https://res.cloudinary.com/djovhlikf/image/upload/v1589902386/christian-perner-UKLIuV8rAks-unsplash_foc5wl.jpg',
        cta: p(a ({ href: "/tenant/create", class: "btn btn-primary my-2" }, "Try it now"))
        // "https://res.cloudinary.com/djovhlikf/image/upload/e_brightness:60/v1589897969/patrick-tomasso-Oaqk7qqNh_c-unsplash_s833z4.jpg"
      },
      {
        invertColor: true,
        class: "pt-4",
        besides: [
          {
            type: "blank",
            contents: div({class:"my-5"},
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
            contents: div({class:"my-5"},
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
        class: "pb-3 pt-5",
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
              `Open source/free software - MIT license. Complete freedom and control.
              Move hosting or cloud platform, take your data with you. No vendor lock-in`
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
              h4("Examples"),
           
              )
          },
          {
            type: "blank",
            contents: ""
          }
        ]
      },
      {
        class: "pt-3",
        besides: [
          exampleCard("fas fa-bug", "Issue tracker", "Track bugs or feedback", "https://issues.saltcorn.com/"),
          exampleCard("fab fa-wikipedia-w", "Wiki", "User-editable pages", "https://wiki.saltcorn.com/"),
          exampleCard("fas fa-blog", "Blog", "", "https://blog.saltcorn.com/")
        ]
      },
      {
        class: "pt-3",
        besides: [
          exampleCard("fas fa-address-book", "Address book", "Contact list with meeting notes", "https://addressbook.saltcorn.com/"),
          {
            type: "blank",
            contents: " "
          },{
            type: "blank",
            contents: " "
          }
        ]
      },
      {
        class: "pt-3 mb-5",
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
              div({class:"mx-auto"},
                a({href:"https://github.com/glutamate/saltcorns"},
                i({ class: `fab fa-2x fa-github` }),
                )
              ),
              div({class:"mx-auto"},
                a({href:"https://www.npmjs.com/package/@saltcorn/cli"},
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
      },
      {
        type: "footer",
        contents: div(
          div("Cover image by ", nbsp,a({href:"https://unsplash.com/@christianperner"}, "Christian Perner")),
          div("Saltcorn code and websites Copyright (c) 2020 Tom Nielsen, released under MIT license"),

          )
      }
    ]
  })
};

module.exports = { sc_plugin_api_version: 1, pages: { root } };
