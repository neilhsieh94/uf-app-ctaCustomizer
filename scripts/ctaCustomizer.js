const specificFormCtaFlag = false;
const specificFormCtaArr = [];
const specificCtaFlag = false;
const specificCtaArr = [];
const ctaCustomizer = () => {
  console.log("cta customizer is running");
  console.log(
    "Text spacing toggle liquid: ",
    "{{ text_spacing_toggle }}",
    "{{ text_spacing_val }}"
  );
  if (!document.querySelector(`.cta`)) return;
  // Currently only link cta
  let ctaTiles = [];

  // Helper Function
  const formCtaClickFunc = (formCta, placeholderChangeArr) => {
    const placeholderSpans = [...formCta.querySelectorAll(".cta-field-name")];
    placeholderSpans.forEach((placeholder) => {
      console.log("placeholder", placeholder.textContent.trim());
      const text = placeholder.textContent.trim();
      if (placeholderChangeArr.includes(text)) {
        const index = placeholderChangeArr.indexOf(text);
        const changeText = "{{ form_cta_label_text }}"[index][1];
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
    if ("{{ text_spacing_toggle }}" && "{{ text_spacing_val }}") {
      console.log("is true and enableing text spacing");
      console.log("cta is ", Boolean(cta));
      [
        ...cta.querySelectorAll("p"),
        ...cta.querySelectorAll("a"),
        ...cta.querySelectorAll("span"),
        ...cta.querySelectorAll("input"),
      ].forEach((pTag) => {
        pTag.style.letterSpacing = "{{ text_spacing_val }}" + "px";
      });
    }
  };

  const buttonCornerStylingFunc = (cta) => {
    const aButton = cta.querySelector(".cta-button");
    if ("{{ button_corner_toggle }}" && "{{ button_corner_val }}")
      aButton.style.borderRadius = "{{ button_corner_val }}";
  };

  const buttonFontStylingFunc = (cta) => {
    const aButton = cta.querySelector(".cta-button");
    if ("{{ font_size_toggle }}" && "{{ font_size_val }}")
      aButton.style.fontSize = "{{ font_size_val }}";
  };

  const buttonPaddingStylingFunc = (cta) => {
    const aButton = cta.querySelector(".cta-button");
    if ("{{ button_padding_val }}" && "{{ button_padding_toggle }}")
      aButton.style.padding = "{{ button_padding_val }}";
  };

  const multiLevelCopyFunc = (cta, ctaText) => {
    const copySplitArray = ctaText.split("{{ multi_level_symbol_val }}");
    const ctaPElem = cta.querySelector("p");
    ctaPElem.innerText = "";
    copySplitArray.forEach((copy, i) => {
      const pElem = document.createElement("span");
      pElem.innerText = copy;
      pElem.style.display = "block";
      let marginBottom = "10px";
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
        !"{{ text_spacing_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        letterSpacingFunc(cta);
      }

      // Button Styling
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

      // if (!omitButtonStyleFormCtaFlag || cta.classList.contains('cta-website')) {
      //   buttonStylingFunc(cta);
      // }

      // Multi Level Text
      if (
        !"{{ multi_level_text_omit_form_toggle }}" ||
        cta.classList.contains("cta-website")
      ) {
        const ctaText =
          cta.querySelector("p").innerText ||
          cta.querySelector(".run-away p").innerText;
        if (
          "{{ multi_level_text_toggle }}" &&
          "{{ multi_level_symbol_val }}".length &&
          ctaText.includes("{{ multi_level_symbol_val }}")
        ) {
          multiLevelCopyFunc(cta, ctaText);
        }
      }
    });
    let formCtas = [];
    if (specificFormCtaFlag) {
      specificFormCtaArr.forEach((ctaId) => {
        if (document.querySelector(`.cta[data-cta-id='${ctaId}']`))
          formCtas.push(document.querySelector(`.cta[data-cta-id='${ctaId}']`));
      });
    } else {
      formCtas = [...document.querySelectorAll(".tile.cta-form")];
    }

    if ("{{ form_cta_label_text }}".length) {
      const placeholderChangeArr = "{{ form_cta_label_text }}".map((e) => e[0]);
      formCtas.forEach((formCta) => {
        if (formCta.querySelector(".cta-field-name")) {
          formCtaClickFunc(formCta, placeholderChangeArr);
        }
      });
    }

    // Form CTA Click function for additional form fields
    if (
      "{{ form_cta_label_text }}".length ||
      !"{{ text_spacing_omit_form_toggle }}" ||
      !"{{ font_size_omit_form_toggle }}" ||
      !"{{ button_corner_omit_form_toggle }}" ||
      !"{{ button_padding_omit_form_toggle }}" ||
      !"{{ multi_level_text_omit_form_toggle }}"
    ) {
      formCtas.forEach((formCta) => {
        formCta.addEventListener("click", () => {
          if (formCta.querySelector(".cta-field-name")) {
            setTimeout(() => {
              if ("{{ labelPlaceholder }}".length) {
                const placeholderChangeArr = "{{ labelPlaceholder }}".map(
                  (e) => e[0]
                );
                formCtaClickFunc(formCta, placeholderChangeArr);
              }
              if (!"{{ text_spacing_omit_form_toggle }}") {
                letterSpacingFunc(formCta);
              }
              // if (!omitButtonStyleFormCtaFlag) {
              //   buttonStylingFunc(formCta);
              // }

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
                const ctaText = formCta.querySelector(".run-away p").innerText;
                if (
                  "{{ multi_level_text_toggle }}" &&
                  "{{ multi_level_symbol_val }}".length &&
                  ctaText.includes("{{ multi_level_symbol_val }}")
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
