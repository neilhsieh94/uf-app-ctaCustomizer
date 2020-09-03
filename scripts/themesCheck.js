const letterSpacingToggle =
  !!"{{ text_spacing_toggle }}".length &&
  JSON.parse("{{ text_spacing_toggle }}");
const letterSpacingVal = "{{ text_spacing_val }}";
const buttonCornerRoundToggle =
  !!"{{ button_corner_toggle }}".length &&
  JSON.parse("{{ button_corner_toggle }}");

const buttonCornerRound = "{{ button_corner_val }}";
const fontSizeToggle =
  !!"{{ font_size_toggle }}".length && JSON.parse("{{ font_size_toggle }}");

const fontSize = "{{ font_size_val }}";
const buttonPaddingToggle =
  !!"{{ button_padding_toggle }}".length &&
  JSON.parse("{{ button_padding_toggle }}");

const buttonPadding = "{{ button_padding_val }}";

const omitLetterSpacingFormCtaFlag =
  !!"{{ text_spacing_omit_form_toggle }}".length &&
  JSON.parse("{{ text_spacing_omit_form_toggle }}");

const omitFontSizingFormCtaFlag =
  !!"{{ font_size_omit_form_toggle }}".length &&
  JSON.parse("{{ font_size_omit_form_toggle }}");

const omitButtonCornerFormCtaFlag =
  !!"{{ button_corner_omit_form_toggle }}".length &&
  JSON.parse("{{ button_corner_omit_form_toggle }}");

const omitButtonPaddingFormCtaFlag =
  !!"{{ button_padding_omit_form_toggle }}".length &&
  JSON.parse("{{ button_padding_omit_form_toggle }}");

const omitMultiLevelFormCtaFlag =
  !!"{{ multi_level_text_omit_form_toggle }}".length &&
  JSON.parse("{{ multi_level_text_omit_form_toggle }}");

const multiLevelSymbol = "{{ multi_level_symbol_val }}";
const multiLevelSymbolToggle =
  !!"{{ multi_level_text_toggle }}".length &&
  JSON.parse("{{ multi_level_text_toggle }}");

const toArray = (array) => {
  if (array.length) {
    const arrayToJson = array.includes("'") ? array.replace(/'/g, '"') : array;
    return JSON.parse(arrayToJson);
  }
};

const specificCtaFlag =
  !!"{{ specifc_cta_toggle }}".length && JSON.parse("{{ specifc_cta_toggle }}");
const specificCtaArr =
  !!"{{ specific_cta_array }}".length && toArray("{{ specific_cta_array }}");

const labelPlaceholderToggle =
  !!"{{ form_cta_label_toggle }}".length &&
  JSON.parse("{{ form_cta_label_toggle }}");

const labelPlaceholder =
  !!"{{ form_cta_label_text }}".length && toArray("{{ form_cta_label_text }}");

const fontCust =
  !!"{{ multi_level_text_val }}".length &&
  toArray("{{ multi_level_text_val }}");

const debugVariable =
  !!"{{ debug_mode }}".length && toArray("{{ debug_mode }}");

/* ***************************************************** */
/* ***************************************************** */
/* -****************** DEBUGGER MODE ******************* */
/* ***************************************************** */
/* ***************************************************** */

if (debugVariable) {
  const dividerStyles = [
    "background-color: rgba(0, 47, 217, 0.7)",
    "color: white",
    "display: block",
    "line-height: 1.5",
  ].join(";");
  const textStyles = ["display: block", "line-height: 1.5"].join(";");
  console.log("%c********************************************", dividerStyles);

  console.log(
    "%c CTA CUSTOMIZER MODE ENABLED. See below for key value pairs reflecting what is selected in the app.",
    textStyles
  );
  console.log(`%c Specific CTA toggle: ${specificCtaFlag}`, textStyles);
  console.log(`%c Specific CTA array: ${specificCtaArr}`, textStyles);
  console.log(`%c Letter spacing toggle: ${letterSpacingToggle}`, textStyles);
  console.log(
    `%c Omit Letter spacing for Form CTA Toggle: ${omitLetterSpacingFormCtaFlag}`,
    textStyles
  );
  console.log(`%c Letter spacing variable: ${letterSpacingVal}`, textStyles);
  console.log(
    `%c Button corner round toggle: ${buttonCornerRoundToggle}`,
    textStyles
  );
  console.log(
    `%c Omit Button Corner for Form CTA Toggle: ${omitButtonCornerFormCtaFlag}`,
    textStyles
  );
  console.log(
    `%c Button Corner round variable: ${buttonCornerRound}`,
    textStyles
  );
  console.log(`%c Font size toggle: ${fontSizeToggle}`, textStyles);
  console.log(
    `%c Omit Font size for Form CTA Toggle: ${omitFontSizingFormCtaFlag} `,
    textStyles
  );
  console.log(`%c Font size variable: ${fontSize}`, textStyles);
  console.log(`%c Button padding toggle: ${buttonPaddingToggle}`, textStyles);
  console.log(
    `%c Omit Button padding for Form CTA Toggle: ${omitButtonPaddingFormCtaFlag}`,
    textStyles
  );
  console.log(`%c Button padding variable: ${buttonPadding}`, textStyles);
  console.log(
    `%c Multi level text toggle: ${multiLevelSymbolToggle}`,
    textStyles
  );
  console.log(
    `%c Omit Multi level text for Form CTA Toggle: ${omitMultiLevelFormCtaFlag}`,
    textStyles
  );
  console.log(`%c Multi level variable: ${multiLevelSymbol}`, textStyles);
  console.log(
    `%c Multi level font customizations variable: ${fontCust}`,
    textStyles
  );
  console.log(`%c Button padding variable: ${buttonPadding}`, textStyles);
  console.log(
    `%c Form CTA label toggle: ${labelPlaceholderToggle}`,
    textStyles
  );
  console.log(
    `%c Form CTA label placeholder text: ${labelPlaceholder}`,
    textStyles
  );
  console.log("%c********************************************", dividerStyles);
}

/* ***************************************************** */
/* ***************************************************** */
/* ********** THEME DEPENDANT FUNCTIONS BELOW ********** */
/* ***************************************************** */
/* ***************************************************** */

if (!!document.body.dataset.domainTheme) {
  //Input Tv2 code

  const ctaCustomizer = () => {
    if (!document.querySelector(`.uf-cta-tile`)) return;
    // Currently only link cta
    let ctaTiles = [];

    // Helper Function
    const formCtaClickFunc = (formCta, placeholderChangeArr) => {
      const placeholderSpans = [...formCta.querySelectorAll(".uf-cta-label")];
      placeholderSpans.forEach((placeholder) => {
        const text = placeholder.textContent.trim();
        if (placeholderChangeArr.includes(text)) {
          const index = placeholderChangeArr.indexOf(text);
          const changeText = labelPlaceholder[index][1];
          const cloneSpan = placeholder.cloneNode();
          cloneSpan.textContent = changeText;
          // cloneSpan.classList.remove('uf-cta-label');
          cloneSpan.classList.add("uf-cta-label-clone");
          placeholder.insertAdjacentElement("afterend", cloneSpan);
          placeholder.style.display = "none";
        }
      });
    };

    const letterSpacingFunc = (cta) => {
      if (letterSpacingToggle && letterSpacingVal) {
        [
          ...cta.querySelectorAll("p"),
          ...cta.querySelectorAll("a"),
          ...cta.querySelectorAll("span"),
          ...cta.querySelectorAll("input"),
          ...cta.querySelectorAll("label"),
          ...cta.querySelectorAll("button"),
        ].forEach((pTag) => {
          pTag.style.letterSpacing = `${letterSpacingVal}px`;
        });
      }
    };

    const buttonCornerStylingFunc = (cta) => {
      const aButton =
        cta.querySelector(".uf-link-cta-tile-link") ||
        cta.querySelector(".uf-cta-submit-button");
      if (buttonCornerRoundToggle && buttonCornerRound) {
        aButton.style.borderRadius = `${buttonCornerRound}`;
      }
    };

    const buttonFontStylingFunc = (cta) => {
      const aButton =
        cta.querySelector(".uf-link-cta-tile-link") ||
        cta.querySelector(".uf-cta-submit-button");
      if (fontSizeToggle && fontSize) aButton.style.fontSize = `${fontSize}px`;
    };

    const buttonPaddingStylingFunc = (cta) => {
      const aButton =
        cta.querySelector(".uf-link-cta-tile-link") ||
        cta.querySelector(".uf-cta-submit-button");
      if (buttonPadding && buttonPaddingToggle)
        aButton.style.padding = `${buttonPadding}`;
    };

    const multiLevelCopyFunc = (cta, ctaText) => {
      const copySplitArray = ctaText.split(multiLevelSymbol);
      const ctaPElem = cta.querySelector("p");
      ctaPElem.innerText = "";
      copySplitArray.forEach((copy, i) => {
        const pElem = document.createElement("span");
        pElem.innerText = copy;
        pElem.style.display = "block";
        let marginBottom = "10px";
        if (fontCust[i]) {
          if (fontCust[i][0]) pElem.style.fontSize = `${fontCust[i][0]}`;
          if (fontCust[i][1]) pElem.style.fontWeight = `${fontCust[i][1]}`;
          if (fontCust[i][2]) marginBottom = `${fontCust[i][2]}`;
        }
        pElem.style.marginBottom = marginBottom;
        ctaPElem.appendChild(pElem);
      });
    };

    if (document.querySelector(".uf-cta-tile")) {
      if (specificCtaFlag && specificCtaArr.length) {
        specificCtaArr.forEach((ctaId) => {
          if (document.querySelector(`.uf-cta-tile[data-id='${ctaId}']`))
            ctaTiles.push(
              document.querySelector(`.uf-cta-tile[data-id='${ctaId}']`)
            );
        });
      } else {
        ctaTiles = [...document.querySelectorAll(".uf-cta-tile")];
      }

      ctaTiles.forEach((cta) => {
        // Letter Spacing
        // Checks if to omit form CTAs, always will run on Link CTAs
        if (
          !omitLetterSpacingFormCtaFlag ||
          cta.classList.contains("uf-link-cta-tile")
        ) {
          letterSpacingFunc(cta);
        }

        // Button Styling
        if (
          !omitButtonCornerFormCtaFlag ||
          cta.classList.contains("uf-link-cta-tile")
        ) {
          buttonCornerStylingFunc(cta);
        }

        if (
          !omitFontSizingFormCtaFlag ||
          cta.classList.contains("uf-link-cta-tile")
        ) {
          buttonFontStylingFunc(cta);
        }

        if (
          !omitButtonPaddingFormCtaFlag ||
          cta.classList.contains("uf-link-cta-tile")
        ) {
          buttonPaddingStylingFunc(cta);
        }

        // Multi Level Text
        if (
          !omitMultiLevelFormCtaFlag ||
          cta.classList.contains("uf-link-cta-tile")
        ) {
          const ctaText =
            cta.querySelector("p").innerText ||
            cta.querySelector(".uf-link-cta-tile-text").innerText;
          if (
            multiLevelSymbolToggle &&
            multiLevelSymbol.length &&
            ctaText.includes(multiLevelSymbol)
          ) {
            multiLevelCopyFunc(cta, ctaText);
          }
        }
      });
      const formCtas = [
        ...document.querySelectorAll(".uf-cta-tile.uf-form-cta-tile"),
      ];

      if (labelPlaceholderToggle && labelPlaceholder.length) {
        const placeholderChangeArr = labelPlaceholder.map((e) => e[0]);

        formCtas.forEach((formCta) => {
          if (formCta.querySelector(".uf-cta-label")) {
            formCtaClickFunc(formCta, placeholderChangeArr);
          }
        });
      }

      // Form CTA Click function for additional form fields
      if (
        labelPlaceholderToggle ||
        !omitLetterSpacingFormCtaFlag ||
        !omitFontSizingFormCtaFlag ||
        !omitButtonCornerFormCtaFlag ||
        !omitButtonPaddingFormCtaFlag ||
        !omitMultiLevelFormCtaFlag
      ) {
        formCtas.forEach((formCta) => {
          formCta.addEventListener("click", () => {
            if (formCta.querySelector(".uf-cta-label")) {
              setTimeout(() => {
                if (labelPlaceholderToggle && labelPlaceholder.length) {
                  const placeholderChangeArr = labelPlaceholder.map(
                    (e) => e[0]
                  );
                  formCtaClickFunc(formCta, placeholderChangeArr);
                }
                if (!omitLetterSpacingFormCtaFlag) {
                  letterSpacingFunc(formCta);
                }

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
                  const ctaText = formCta.querySelector(".uf-cta-tagline")
                    .innerText;
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
} else {
  //Input Tv1 code

  const ctaCustomizer = () => {
    if (!document.querySelector(`.cta`)) return;
    // Currently only link cta
    let ctaTiles = [];

    // Helper Function
    const formCtaClickFunc = (formCta, placeholderChangeArr) => {
      const placeholderSpans = [...formCta.querySelectorAll(".cta-field-name")];
      placeholderSpans.forEach((placeholder) => {
        const text = placeholder.textContent.trim();
        if (placeholderChangeArr.includes(text)) {
          const index = placeholderChangeArr.indexOf(text);
          const changeText = labelPlaceholder[index][1];
          const cloneSpan = placeholder.cloneNode();
          cloneSpan.textContent = changeText;
          cloneSpan.classList.remove("cta-field-name");
          cloneSpan.classList.add("cta-field-name-clone");
          placeholder.insertAdjacentElement("afterend", cloneSpan);
          placeholder.style.display = "none";
        }
      });
    };

    const letterSpacingFunc = (cta) => {
      if (letterSpacingToggle && letterSpacingVal) {
        [
          ...cta.querySelectorAll("p"),
          ...cta.querySelectorAll("a"),
          ...cta.querySelectorAll("span"),
          ...cta.querySelectorAll("input"),
        ].forEach((pTag) => {
          pTag.style.letterSpacing = `${letterSpacingVal}px`;
        });
      }
    };

    const buttonCornerStylingFunc = (cta) => {
      const aButton = cta.querySelector(".cta-button");
      if (buttonCornerRoundToggle && buttonCornerRound)
        aButton.style.borderRadius = `${buttonCornerRound}`;
    };

    const buttonFontStylingFunc = (cta) => {
      const aButton = cta.querySelector(".cta-button");
      if (fontSizeToggle && fontSize) aButton.style.fontSize = `${fontSize}px`;
    };

    const buttonPaddingStylingFunc = (cta) => {
      const aButton = cta.querySelector(".cta-button");
      if (buttonPadding && buttonPaddingToggle)
        aButton.style.padding = `${buttonPadding}`;
    };

    const multiLevelCopyFunc = (cta, ctaText) => {
      const copySplitArray = ctaText.split(multiLevelSymbol);
      const ctaPElem = cta.querySelector("p");
      ctaPElem.innerText = "";
      copySplitArray.forEach((copy, i) => {
        const pElem = document.createElement("span");
        pElem.innerText = copy;
        pElem.style.display = "block";
        let marginBottom = "10px";
        if (fontCust[i]) {
          if (fontCust[i][0]) pElem.style.fontSize = `${fontCust[i][0]}`;
          if (fontCust[i][1]) pElem.style.fontWeight = `${fontCust[i][1]}`;
          if (fontCust[i][2]) marginBottom = `${fontCust[i][2]}`;
        }
        pElem.style.marginBottom = marginBottom;
        ctaPElem.appendChild(pElem);
      });
    };

    if (document.querySelector(".cta")) {
      if (specificCtaArr.length) {
        specificCtaArr.forEach((ctaId) => {
          if (document.querySelector(`.cta[data-cta-id='${ctaId}']`))
            ctaTiles.push(
              document.querySelector(`.cta[data-cta-id='${ctaId}']`)
            );
        });
      } else {
        ctaTiles = [...document.querySelectorAll(".tile.cta")];
      }

      ctaTiles.forEach((cta) => {
        // Letter Spacing
        // Checks if to omit form CTAs, always will run on Link CTAs
        if (
          !omitLetterSpacingFormCtaFlag ||
          cta.classList.contains("cta-website")
        ) {
          letterSpacingFunc(cta);
        }

        // Button Styling
        if (
          !omitButtonCornerFormCtaFlag ||
          cta.classList.contains("cta-website")
        ) {
          buttonCornerStylingFunc(cta);
        }

        if (
          !omitFontSizingFormCtaFlag ||
          cta.classList.contains("cta-website")
        ) {
          buttonFontStylingFunc(cta);
        }

        if (
          !omitButtonPaddingFormCtaFlag ||
          cta.classList.contains("cta-website")
        ) {
          buttonPaddingStylingFunc(cta);
        }

        // if (!omitButtonStyleFormCtaFlag || cta.classList.contains('cta-website')) {
        //   buttonStylingFunc(cta);
        // }

        // Multi Level Text
        if (
          !omitMultiLevelFormCtaFlag ||
          cta.classList.contains("cta-website")
        ) {
          const ctaText =
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

      const formCtas = [...document.querySelectorAll(".tile.cta-form")];

      if (labelPlaceholder.length) {
        const placeholderChangeArr = labelPlaceholder.map((e) => e[0]);

        formCtas.forEach((formCta) => {
          if (formCta.querySelector(".cta-field-name")) {
            formCtaClickFunc(formCta, placeholderChangeArr);
          }
        });
      }

      // Form CTA Click function for additional form fields
      if (
        labelPlaceholder.length ||
        !omitLetterSpacingFormCtaFlag ||
        !omitFontSizingFormCtaFlag ||
        !omitButtonCornerFormCtaFlag ||
        !omitButtonPaddingFormCtaFlag ||
        !omitMultiLevelFormCtaFlag
      ) {
        formCtas.forEach((formCta) => {
          formCta.addEventListener("click", () => {
            if (formCta.querySelector(".cta-field-name")) {
              setTimeout(() => {
                if (labelPlaceholder.length) {
                  const placeholderChangeArr = labelPlaceholder.map(
                    (e) => e[0]
                  );
                  formCtaClickFunc(formCta, placeholderChangeArr);
                }
                if (!omitLetterSpacingFormCtaFlag) {
                  letterSpacingFunc(formCta);
                }
                // if (!omitButtonStyleFormCtaFlag) {
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
                  const ctaText = formCta.querySelector(".run-away p")
                    .innerText;
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
}
