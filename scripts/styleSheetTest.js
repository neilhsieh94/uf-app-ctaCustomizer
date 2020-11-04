const blackBgToggle =
  !!"{{ black_bg_toggle }}".length && JSON.parse("{{ black_bg_toggle }}");

const pinkBorderToggle =
  !!"{{ pink_border_toggle }}".length && JSON.parse("{{ pink_border_toggle }}");

const appTest = () => {
  if (blackBgToggle) document.body.classList.add("black-bg");
  if (pinkBorderToggle) document.body.classList.add("pink-border");
};

appTest();
