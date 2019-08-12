<template>
  <div id="target"></div>
</template>

<style>
  .hl-key,
  .hl-name {
    color: red;
  }

  .hl-string {
    color: blue;
  }

  .hl-boolean {
    color: purple;
  }

  .hl-number {
    color: green;
  }

  .hl-pre.invalid {
    color: #a8a8a8;
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

  const some_xml = `
    <OfertaMalucas>
      <Oferta>
        <Nome>Ofertinha maluquinha!</Nome>
      </Oferta>
    </OfertaMalucas>
  `;

  const big_xml = `
    <CATALOG some-attr="just-trying stuff out">
  <CD>
  <TITLE>Empire Burlesque</TITLE>
  <ARTIST>Bob Dylan</ARTIST>
  <COUNTRY>USA</COUNTRY>
  <COMPANY>Columbia</COMPANY>
  <PRICE>10.90</PRICE>
  <YEAR>1985</YEAR>
  <ORACLE>
  select * from scott.dept;
  </ORACLE>
  </CD>
  <CD>
  <TITLE>Hide your heart</TITLE>
  <ARTIST>Bonnie Tyler</ARTIST>
  <COUNTRY>UK</COUNTRY>
  <COMPANY>CBS Records</COMPANY>
  <PRICE>9.90</PRICE>
  <YEAR>1988</YEAR>
  </CD>
  <CD>
  <TITLE>Greatest Hits</TITLE>
  <ARTIST>Dolly Parton</ARTIST>
  <COUNTRY>USA</COUNTRY>
  <COMPANY>RCA</COMPANY>
  <PRICE>9.90</PRICE>
  <YEAR>1982</YEAR>
  <ORACLE>
  begin
  htp.p('This is the test data');
  end;
  </ORACLE>
  </CD>
  <CD>
  <TITLE>Still got the blues</TITLE>
  <ARTIST>Gary Moore</ARTIST>
  <COUNTRY>UK</COUNTRY>
  <COMPANY>Virgin records</COMPANY>
  <PRICE>10.20</PRICE>
  <YEAR>1990</YEAR>
  </CD>
</CATALOG>
  `;

  export default {
    mounted() {
      const target = document.getElementById("target");
      const code = highlight(big_xml, "text/xml");

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
