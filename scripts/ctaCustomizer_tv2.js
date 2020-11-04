/* eslint-disable curly */

// 246662
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
// const fontColor = ``;
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

const labelPlaceholderAllFlag = true;
const specificFormCtaFlag = false;
const specificFormCtaArr = [];

// Multilevel will need to have text in the back of the hub. In the app, we'll put the key symbols to check for
const multiLevelSymbol = "{{ multi_level_symbol_val }}";
const multiLevelSymbolToggle =
  !!"{{ multi_level_text_toggle }}".length &&
  JSON.parse("{{ multi_level_text_toggle }}");

const toArray = (array) => {
  if (array.length) {
    console.log("checking array", array);

    const arrayToJson = array.includes("'") ? array.replace(/'/g, '"') : array;

    console.log(arrayToJson, "JSON");
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

const ctaCustomizer_tv2 = () => {
  if (!document.querySelector(`.uf-cta-tile`)) return;
  // Currently only link cta
  let ctaTiles = [];

  // Helper Function
  const formCtaClickFunc_tv2 = (formCta, placeholderChangeArr) => {
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

  const letterSpacingFunc_tv2 = (cta) => {
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

  const buttonCornerStylingFunc_tv2 = (cta) => {
    const aButton =
      cta.querySelector(".uf-link-cta-tile-link") ||
      cta.querySelector(".uf-cta-submit-button");
    if (buttonCornerRoundToggle && buttonCornerRound) {
      aButton.style.borderRadius = `${buttonCornerRound}`;
    }
  };

  const buttonFontStylingFunc_tv2 = (cta) => {
    const aButton =
      cta.querySelector(".uf-link-cta-tile-link") ||
      cta.querySelector(".uf-cta-submit-button");
    if (fontSizeToggle && fontSize) aButton.style.fontSize = `${fontSize}px`;
  };

  const buttonPaddingStylingFunc_tv2 = (cta) => {
    const aButton =
      cta.querySelector(".uf-link-cta-tile-link") ||
      cta.querySelector(".uf-cta-submit-button");
    if (buttonPadding && buttonPaddingToggle)
      aButton.style.padding = `${buttonPadding}`;
  };

  const multiLevelCopyFunc_tv2 = (cta, ctaText) => {
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
        letterSpacingFunc_tv2(cta);
      }

      // Button Styling
      if (
        !omitButtonCornerFormCtaFlag ||
        cta.classList.contains("uf-link-cta-tile")
      ) {
        buttonCornerStylingFunc_tv2(cta);
      }

      if (
        !omitFontSizingFormCtaFlag ||
        cta.classList.contains("uf-link-cta-tile")
      ) {
        buttonFontStylingFunc_tv2(cta);
      }

      if (
        !omitButtonPaddingFormCtaFlag ||
        cta.classList.contains("uf-link-cta-tile")
      ) {
        buttonPaddingStylingFunc_tv2(cta);
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
          multiLevelCopyFunc_tv2(cta, ctaText);
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
          formCtaClickFunc_tv2(formCta, placeholderChangeArr);
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
                const placeholderChangeArr = labelPlaceholder.map((e) => e[0]);
                formCtaClickFunc_tv2(formCta, placeholderChangeArr);
              }
              if (!omitLetterSpacingFormCtaFlag) {
                letterSpacingFunc_tv2(formCta);
              }

              if (!omitButtonCornerFormCtaFlag) {
                buttonCornerStylingFunc_tv2(formCta);
              }

              if (!omitFontSizingFormCtaFlag) {
                buttonFontStylingFunc_tv2(formCta);
              }

              if (!omitButtonPaddingFormCtaFlag) {
                buttonPaddingStylingFunc_tv2(formCta);
              }

              if (!omitMultiLevelFormCtaFlag) {
                const ctaText = formCta.querySelector(".uf-cta-tagline")
                  .innerText;
                if (
                  multiLevelSymbolToggle &&
                  multiLevelSymbol.length &&
                  ctaText.includes(multiLevelSymbol)
                ) {
                  multiLevelCopyFunc_tv2(formCta, ctaText);
                }
              }
            }, 250);
          }
        });
      });
    }
  }
};
ctaCustomizer_tv2();
