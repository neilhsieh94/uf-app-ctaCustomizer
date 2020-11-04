/* eslint-disable curly */

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

const labelPlaceholderToggle =
  !!"{{ form_cta_label_toggle }}".length &&
  JSON.parse("{{ form_cta_label_toggle }}");

const specificCtaArr =
  !!"{{ specific_cta_array }}".length &&
  toArray(`[${"{{ specific_cta_array }}"}]`);

const labelPlaceholder =
  !!"{{ form_cta_label_text }}".length &&
  toArray(`[${"{{ form_cta_label_text }}"}]`);

const fontCust =
  !!"{{ multi_level_text_val }}".length &&
  toArray(`[${"{{ multi_level_text_val }}"}]`);
const debugVariable =
  !!"{{ debug_mode }}".length && toArray("{{ debug_mode }}");

const ctaCustomizer_tv1 = () => {
  if (!document.querySelector(`.cta`)) return;
  // Currently only link cta
  let ctaTiles = [];

  // Helper Function
  const formCtaClickFunc_tv1 = (formCta, placeholderChangeArr) => {
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

  const letterSpacingFunc_tv1 = (cta) => {
    console.log("Toggle and val", letterSpacingToggle, letterSpacingVal);
    if (letterSpacingToggle && letterSpacingVal) {
      console.log(
        "span in letterspacing",
        Boolean(cta.querySelectorAll("span"))
      );
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

  const buttonCornerStylingFunc_tv1 = (cta) => {
    const aButton = cta.querySelector(".cta-button");
    if (buttonCornerRoundToggle && buttonCornerRound)
      aButton.style.borderRadius = `${buttonCornerRound}`;
  };

  const buttonFontStylingFunc_tv1 = (cta) => {
    const aButton = cta.querySelector(".cta-button");
    if (fontSizeToggle && fontSize) aButton.style.fontSize = `${fontSize}px`;
  };

  const buttonPaddingStylingFunc_tv1 = (cta) => {
    const aButton = cta.querySelector(".cta-button");
    if (buttonPadding && buttonPaddingToggle)
      aButton.style.padding = `${buttonPadding}`;
  };

  const multiLevelCopyFunc_tv1 = (cta, ctaText) => {
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
    if (specificCtaFlag && specificCtaArr.length) {
      specificCtaArr.forEach((ctaId) => {
        if (document.querySelector(`.cta[data-cta-id='${ctaId}']`))
          ctaTiles.push(document.querySelector(`.cta[data-cta-id='${ctaId}']`));
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
        letterSpacingFunc_tv1(cta);
      }

      // Button Styling
      if (
        !omitButtonCornerFormCtaFlag ||
        cta.classList.contains("cta-website")
      ) {
        buttonCornerStylingFunc_tv1(cta);
      }

      if (!omitFontSizingFormCtaFlag || cta.classList.contains("cta-website")) {
        buttonFontStylingFunc_tv1(cta);
      }

      if (
        !omitButtonPaddingFormCtaFlag ||
        cta.classList.contains("cta-website")
      ) {
        buttonPaddingStylingFunc_tv1(cta);
      }

      // if (!omitButtonStyleFormCtaFlag || cta.classList.contains('cta-website')) {
      //   buttonStylingFunc(cta);
      // }

      // Multi Level Text
      if (!omitMultiLevelFormCtaFlag || cta.classList.contains("cta-website")) {
        const ctaText =
          cta.querySelector("p").innerText ||
          cta.querySelector(".run-away p").innerText;
        if (
          multiLevelSymbolToggle &&
          multiLevelSymbol.length &&
          ctaText.includes(multiLevelSymbol)
        ) {
          multiLevelCopyFunc_tv1(cta, ctaText);
        }
      }
    });

    const formCtas = [...document.querySelectorAll(".tile.cta-form")];

    if (labelPlaceholderToggle && labelPlaceholder.length) {
      const placeholderChangeArr = labelPlaceholder.map((e) => e[0]);

      formCtas.forEach((formCta) => {
        if (formCta.querySelector(".cta-field-name")) {
          formCtaClickFunc_tv1(formCta, placeholderChangeArr);
        }
      });
    }

    console.log("before click function, letter toggle", letterSpacingToggle);

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
        console.log("for each, letter toggle", letterSpacingToggle);
        formCta.addEventListener("click", () => {
          console.log("clicked, letter toggle", letterSpacingToggle);
          if (formCta.querySelector(".cta-field-name")) {
            setTimeout(() => {
              console.log("timeout, letter toggle", letterSpacingToggle);

              if (labelPlaceholderToggle && labelPlaceholder.length) {
                const placeholderChangeArr = labelPlaceholder.map((e) => e[0]);
                formCtaClickFunc_tv1(formCta, placeholderChangeArr);
              }
              if (!omitLetterSpacingFormCtaFlag) {
                console.log("letter spacing");
                letterSpacingFunc_tv1(formCta);
              }
              // if (!omitButtonStyleFormCtaFlag) {
              //   buttonStylingFunc(formCta);
              // }

              if (!omitButtonCornerFormCtaFlag) {
                buttonCornerStylingFunc_tv1(formCta);
              }

              if (!omitFontSizingFormCtaFlag) {
                buttonFontStylingFunc_tv1(formCta);
              }

              if (!omitButtonPaddingFormCtaFlag) {
                buttonPaddingStylingFunc_tv1(formCta);
              }

              if (!omitMultiLevelFormCtaFlag) {
                const ctaText = formCta.querySelector(".run-away p").innerText;
                if (
                  multiLevelSymbolToggle &&
                  multiLevelSymbol.length &&
                  ctaText.includes(multiLevelSymbol)
                ) {
                  multiLevelCopyFunc_tv1(formCta, ctaText);
                }
              }
            }, 250);
          }
        });
      });
    }
  }
};

ctaCustomizer_tv1();
