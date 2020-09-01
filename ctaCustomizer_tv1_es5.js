"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var specificFormCtaFlag = false;
var specificFormCtaArr = [];

var ctaCustomizer = function ctaCustomizer() {
  if (!document.querySelector(".cta")) return;

  var ctaTiles = [];

  var formCtaClickFunc = function formCtaClickFunc(
    formCta,
    placeholderChangeArr
  ) {
    var placeholderSpans = _toConsumableArray(
      formCta.querySelectorAll(".cta-field-name")
    );

    placeholderSpans.forEach(function(placeholder) {
      console.log("placeholder", placeholder.textContent.trim());
      var text = placeholder.textContent.trim();

      if (placeholderChangeArr.includes(text)) {
        var index = placeholderChangeArr.indexOf(text);
        var changeText = "{{ form_cta_label_text }}"[index][1];
        var cloneSpan = placeholder.cloneNode();
        cloneSpan.textContent = changeText;
        cloneSpan.classList.remove("cta-field-name");
        cloneSpan.classList.add("cta-field-name-clone");
        placeholder.insertAdjacentElement("afterend", cloneSpan);
        placeholder.style.display = "none";
      }
    });
  };

  var letterSpacingFunc = function letterSpacingFunc(cta) {
    if ("{{ text_spacing_toggle }}" && "{{ text_spacing_val }}") {
      []
        .concat(
          _toConsumableArray(cta.querySelectorAll("p")),
          _toConsumableArray(cta.querySelectorAll("a")),
          _toConsumableArray(cta.querySelectorAll("span")),
          _toConsumableArray(cta.querySelectorAll("input"))
        )
        .forEach(function(pTag) {
          pTag.style.letterSpacing = "{{ text_spacing_val }}";
        });
    }
  };

  var buttonCornerStylingFunc = function buttonCornerStylingFunc(cta) {
    var aButton = cta.querySelector(".cta-button");
    if ("{{ button_corner_toggle }}" && "{{ button_corner_val }}")
      aButton.style.borderRadius = "{{ button_corner_val }}";
  };

  var buttonFontStylingFunc = function buttonFontStylingFunc(cta) {
    var aButton = cta.querySelector(".cta-button");
    if ("{{ font_size_toggle }}" && "{{ font_size_val }}")
      aButton.style.fontSize = "{{ font_size_val }}";
  };

  var buttonPaddingStylingFunc = function buttonPaddingStylingFunc(cta) {
    var aButton = cta.querySelector(".cta-button");
    if ("{{ button_padding_val }}" && "{{ button_padding_toggle }}")
      aButton.style.padding = "{{ button_padding_val }}";
  };

  var multiLevelCopyFunc = function multiLevelCopyFunc(cta, ctaText) {
    var copySplitArray = ctaText.split("{{ multi_level_symbol_val }}");
    var ctaPElem = cta.querySelector("p");
    ctaPElem.innerText = "";
    copySplitArray.forEach(function(copy, i) {
      var pElem = document.createElement("span");
      pElem.innerText = copy;
      pElem.style.display = "block";
      var marginBottom = "10px";

      if ("{{ multi_level_text_val }}"[i]) {
        if ("{{ multi_level_text_val }}"[i][0])
          pElem.style.fontSize = "{{ multi_level_text_val }}"[i][0];
        if ("{{ multi_level_text_val }}"[i][1])
          pElem.style.fontWeight = "{{ multi_level_text_val }}"[i][1];
        if ("{{ multi_level_text_val }}"[i][2])
          marginBottom = "{{ multi_level_text_val }}"[i][2];
      }

      pElem.style.marginBottom = marginBottom;
      ctaPElem.appendChild(pElem);
    });
  };

  if (document.querySelector(".cta")) {
    if (specificCtaArr.length) {
      specificCtaArr.forEach(function(ctaId) {
        if (document.querySelector(".cta[data-cta-id='".concat(ctaId, "']")))
          ctaTiles.push(
            document.querySelector(".cta[data-cta-id='".concat(ctaId, "']"))
          );
      });
    } else {
      ctaTiles = _toConsumableArray(document.querySelectorAll(".tile.cta"));
    }

    ctaTiles.forEach(function(cta) {
      if (
        !"{{ text_spacing_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        letterSpacingFunc(cta);
      }

      if (
        !"{{ button_corner_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        buttonCornerStylingFunc(cta);
      }

      if (
        !"{{ font_size_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        buttonFontStylingFunc(cta);
      }

      if (
        !"{{ button_padding_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        buttonPaddingStylingFunc(cta);
      }

      if (
        !"{{ multi_level_text_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        var ctaText =
          cta.querySelector("p").innerText ||
          cta.querySelector(".run-away p").innerText;

        if (ctaText.includes("{{ multi_level_symbol_val }}")) {
          multiLevelCopyFunc(cta, ctaText);
        }
      }
    });
    var placeholderChangeArr = "{{ form_cta_label_text }}".map(function(e) {
      return e[0];
    });
    var formCtas = [];

    if (specificFormCtaFlag) {
      specificFormCtaArr.forEach(function(ctaId) {
        if (document.querySelector(".cta[data-cta-id='".concat(ctaId, "']")))
          formCtas.push(
            document.querySelector(".cta[data-cta-id='".concat(ctaId, "']"))
          );
      });
    } else {
      formCtas = _toConsumableArray(
        document.querySelectorAll(".tile.cta-form")
      );
    }

    if ("{{ form_cta_label_text }}".length) {
      formCtas.forEach(function(formCta) {
        if (formCta.querySelector(".cta-field-name")) {
          formCtaClickFunc(formCta, placeholderChangeArr);
        }
      });
    }

    if (
      "{{ form_cta_label_text }}".length ||
      !"{{ text_spacing_omit_form_toggle }}" ||
      !"{{ font_size_omit_form_toggle }}" ||
      !"{{ button_corner_omit_form_toggle }}" ||
      !"{{ button_padding_omit_form_toggle }}" ||
      !"{{ multi_level_text_omit_form_toggle }}"
    ) {
      formCtas.forEach(function(formCta) {
        formCta.addEventListener("click", function() {
          if (formCta.querySelector(".cta-field-name")) {
            setTimeout(function() {
              if (labelPlaceholder.length) {
                var _placeholderChangeArr = labelPlaceholder.map(function(e) {
                  return e[0];
                });

                formCtaClickFunc(formCta, _placeholderChangeArr);
              }

              if (!"{{ text_spacing_omit_form_toggle }}") {
                letterSpacingFunc(formCta);
              }

              if (!"{{ button_corner_omit_form_toggle }}") {
                buttonCornerStylingFunc(formCta);
              }

              if (!"{{ font_size_omit_form_toggle }}") {
                buttonFontStylingFunc(formCta);
              }

              if (!"{{ button_padding_omit_form_toggle }}") {
                buttonPaddingStylingFunc(formCta);
              }

              if (!"{{ multi_level_text_omit_form_toggle }}") {
                var ctaText = formCta.querySelector(".run-away p").innerText;

                if (ctaText.includes("{{ multi_level_symbol_val }}")) {
                  multiLevelCopyFunc(formCta, ctaText);
                }
              }
            }, 250);
          }
        });
      });
    }
  }
};
