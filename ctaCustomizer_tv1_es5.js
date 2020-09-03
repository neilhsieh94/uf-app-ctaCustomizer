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

/* eslint-disable curly */
var specificCtaFlag = false;
var specificCtaArr = []; // 246662

var letterSpacingToggle =
  !!"{{ text_spacing_toggle }}".length &&
  JSON.parse("{{ text_spacing_toggle }}");
var letterSpacingVal = "{{ text_spacing_val }}";
var buttonCornerRoundToggle =
  !!"{{ button_corner_toggle }}".length &&
  JSON.parse("{{ button_corner_toggle }}");
var buttonCornerRound = "{{ button_corner_val }}";
var fontSizeToggle =
  !!"{{ font_size_toggle }}".length && JSON.parse("{{ font_size_toggle }}");
var fontSize = "{{ font_size_val }}"; // const fontColor = ``;

var buttonPaddingToggle =
  !!"{{ button_padding_toggle }}".length &&
  JSON.parse("{{ button_padding_toggle }}");
var buttonPadding = "{{ button_padding_val }}";
var omitLetterSpacingFormCtaFlag =
  !!"{{ text_spacing_omit_form_toggle }}".length &&
  JSON.parse("{{ text_spacing_omit_form_toggle }}");
var omitFontSizingFormCtaFlag =
  !!"{{ font_size_omit_form_toggle }}".length &&
  JSON.parse("{{ font_size_omit_form_toggle }}");
var omitButtonCornerFormCtaFlag =
  !!"{{ button_corner_omit_form_toggle }}".length &&
  JSON.parse("{{ button_corner_omit_form_toggle }}");
var omitButtonPaddingFormCtaFlag =
  !!"{{ button_padding_omit_form_toggle }}".length &&
  JSON.parse("{{ button_padding_omit_form_toggle }}");
var omitMultiLevelFormCtaFlag =
  !!"{{ multi_level_text_omit_form_toggle }}".length &&
  JSON.parse("{{ multi_level_text_omit_form_toggle }}");
var labelPlaceholderAllFlag = true;
var specificFormCtaFlag = false;
var specificFormCtaArr = [];
var labelPlaceholderToggle = true; // Multilevel will need to have text in the back of the hub. In the app, we'll put the key symbols to check for

var multiLevelSymbol = "{{ multi_level_symbol_val }}";
var multiLevelSymbolToggle =
  !!"{{ multi_level_text_toggle }}".length &&
  JSON.parse("{{ multi_level_text_toggle }}");
var multiLevelCopy =
  "This is First Level $% This is Second Level $% Third Level";

var toArray = function toArray(array) {
  if (array.length) {
    console.log("checking array", array);
    var arrayToJson = array.includes("'") ? array.replace(/'/g, '"') : array;
    console.log(arrayToJson, "JSON");
    return JSON.parse(arrayToJson);
  }
};

var labelPlaceholder =
  !!"{{ form_cta_label_text }}".length && toArray("{{ form_cta_label_text }}");
var fontCust =
  !!"{{ multi_level_text_val }}".length &&
  toArray("{{ multi_level_text_val }}");

var ctaCustomizer = function ctaCustomizer() {
  if (!document.querySelector(".cta")) return; // Currently only link cta

  var ctaTiles = []; // Helper Function

  var formCtaClickFunc = function formCtaClickFunc(
    formCta,
    placeholderChangeArr
  ) {
    var placeholderSpans = _toConsumableArray(
      formCta.querySelectorAll(".cta-field-name")
    );

    placeholderSpans.forEach(function(placeholder) {
      var text = placeholder.textContent.trim();

      if (placeholderChangeArr.includes(text)) {
        var index = placeholderChangeArr.indexOf(text);
        var changeText = labelPlaceholder[index][1];
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
    if (letterSpacingToggle && letterSpacingVal) {
      []
        .concat(
          _toConsumableArray(cta.querySelectorAll("p")),
          _toConsumableArray(cta.querySelectorAll("a")),
          _toConsumableArray(cta.querySelectorAll("span")),
          _toConsumableArray(cta.querySelectorAll("input"))
        )
        .forEach(function(pTag) {
          pTag.style.letterSpacing = "".concat(letterSpacingVal, "px");
        });
    }
  };

  var buttonCornerStylingFunc = function buttonCornerStylingFunc(cta) {
    var aButton = cta.querySelector(".cta-button");
    if (buttonCornerRoundToggle && buttonCornerRound)
      aButton.style.borderRadius = "".concat(buttonCornerRound);
  };

  var buttonFontStylingFunc = function buttonFontStylingFunc(cta) {
    var aButton = cta.querySelector(".cta-button");
    if (fontSizeToggle && fontSize)
      aButton.style.fontSize = "".concat(fontSize, "px");
  };

  var buttonPaddingStylingFunc = function buttonPaddingStylingFunc(cta) {
    var aButton = cta.querySelector(".cta-button");
    if (buttonPadding && buttonPaddingToggle)
      aButton.style.padding = "".concat(buttonPadding);
  };

  var multiLevelCopyFunc = function multiLevelCopyFunc(cta, ctaText) {
    var copySplitArray = ctaText.split(multiLevelSymbol);
    var ctaPElem = cta.querySelector("p");
    ctaPElem.innerText = "";
    copySplitArray.forEach(function(copy, i) {
      var pElem = document.createElement("span");
      pElem.innerText = copy;
      pElem.style.display = "block";
      var marginBottom = "10px";

      if (fontCust[i]) {
        console.log("in multiLevelCopy", fontCust, fontCust[i]);
        if (fontCust[i][0]) pElem.style.fontSize = "".concat(fontCust[i][0]);
        if (fontCust[i][1]) pElem.style.fontWeight = "".concat(fontCust[i][1]);
        if (fontCust[i][2]) marginBottom = "".concat(fontCust[i][2]);
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
      // Letter Spacing
      // Checks if to omit form CTAs, always will run on Link CTAs
      if (
        !omitLetterSpacingFormCtaFlag ||
        cta.classList.contains("cta-website")
      ) {
        letterSpacingFunc(cta);
      } // Button Styling

      if (
        !omitButtonCornerFormCtaFlag ||
        cta.classList.contains("cta-website")
      ) {
        buttonCornerStylingFunc(cta);
      }

      if (!omitFontSizingFormCtaFlag || cta.classList.contains("cta-website")) {
        buttonFontStylingFunc(cta);
      }

      if (
        !omitButtonPaddingFormCtaFlag ||
        cta.classList.contains("cta-website")
      ) {
        buttonPaddingStylingFunc(cta);
      } // if (!omitButtonStyleFormCtaFlag || cta.classList.contains('cta-website')) {
      //   buttonStylingFunc(cta);
      // }
      // Multi Level Text

      if (!omitMultiLevelFormCtaFlag || cta.classList.contains("cta-website")) {
        var ctaText =
          cta.querySelector("p").innerText ||
          cta.querySelector(".run-away p").innerText;

        if (
          multiLevelSymbolToggle &&
          multiLevelSymbol.length &&
          ctaText.includes(multiLevelSymbol)
        ) {
          multiLevelCopyFunc(cta, ctaText);
        }
      }
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

    if (labelPlaceholder.length) {
      var placeholderChangeArr = labelPlaceholder.map(function(e) {
        return e[0];
      });
      formCtas.forEach(function(formCta) {
        if (formCta.querySelector(".cta-field-name")) {
          formCtaClickFunc(formCta, placeholderChangeArr);
        }
      });
    } // Form CTA Click function for additional form fields

    if (
      labelPlaceholder.length ||
      !omitLetterSpacingFormCtaFlag ||
      !omitFontSizingFormCtaFlag ||
      !omitButtonCornerFormCtaFlag ||
      !omitButtonPaddingFormCtaFlag ||
      !omitMultiLevelFormCtaFlag
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

              if (!omitLetterSpacingFormCtaFlag) {
                letterSpacingFunc(formCta);
              } // if (!omitButtonStyleFormCtaFlag) {
              //   buttonStylingFunc(formCta);
              // }

              if (!omitButtonCornerFormCtaFlag) {
                buttonCornerStylingFunc(formCta);
              }

              if (!omitFontSizingFormCtaFlag) {
                buttonFontStylingFunc(formCta);
              }

              if (!omitButtonPaddingFormCtaFlag) {
                buttonPaddingStylingFunc(formCta);
              }

              if (!omitMultiLevelFormCtaFlag) {
                var ctaText = formCta.querySelector(".run-away p").innerText;

                if (
                  multiLevelSymbolToggle &&
                  multiLevelSymbol.length &&
                  ctaText.includes(multiLevelSymbol)
                ) {
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

ctaCustomizer();
