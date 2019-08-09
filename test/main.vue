<template>
  <div id="target"></div>
</template>

<style>
  .key {
    color: red;
  }

  .string {
    color: blue;
  }

  .boolean {
    color: purple;
  }

  .number {
    color: green;
  }
</style>


<script>
  import highlight from "../src/highlight";

  const some_json = `
    {
      "name": "Eren",
      "relatives": [{
        "name": "Mikasa",
        "is_mom": false,
        "age": 19
      }, {
        "name": "Grisha",
        "is_mom": false,
        "age": false
      }, {
        "name": "Karla",
        "is_mom": true,
        "age": 34
      }]
    }
  `;

  const other_json = `
    {
        "glossary": {
            "title": "example glossary",
        "GlossDiv": {
                "title": "S",
          "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
              "SortAs": "SGML",
              "GlossTerm": "Standard Generalized Markup Language",
              "Acronym": "SGML",
              "Abbrev": "ISO 8879:1986",
              "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                "GlossSeeAlso": ["GML", "XML"]
                        },
              "GlossSee": "markup"
                    }
                }
            }
        }
    }
  `;

  const code_json = `
    {"widget": {
        "debug": "on",
        "window": {
            "title": "Sample Konfabulator Widget",
            "name": "main_window",
            "width": 500,
            "height": 500
        },
        "image": { 
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "vOffset": 250,
            "alignment": "center"
        },
        "text": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        }
    }}    
  `;

  const invalid_json = `
    my object { } my invalid json []
    testing
  `;

  export default {
    mounted() {
      const target = document.getElementById("target");
      const code = highlight(code_json);

      target.appendChild(code.element);

      code.hover(function (element, path, value) {
        console.log(path, value);
      });

      code.leave(function () {
        console.log("mouse leaved!");
      });
    }
  };
</script>
