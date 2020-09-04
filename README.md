# <img src="https://flipbot.uberflip.com/flipbot-app-logo.png" height="30"> Uberflip Marketplace App Template

## CTA Customizer

This customizer is used for Link and Form CTA common customizations.

NOTE: CTA tile corner rounding is not customized here, please see Tile Customizer app.

Included functionalities are the following:

### Specific CTA Targeting

List of specific CTAs to apply app customizations if toggled on. If off (default), CTA app customizations will apply to all CTAs.

List of CTA IDs - list CTA IDs separated by commas.

Example: 246662 or 246662, 12345

CTA IDs can be found in the 'Calls-To-Actions' side menu on the left, click into respective CTA, and the ID is listed beside the CTA title.

### Letter Spacing

Specify pixel distance between individual text characters.

Enable Letter Spacing - toggles this customization on/off.
Omit text spacing for all form CTAs - letter spacing customization will only apply to link CTAs. Letter spacing customization will not apply to form CTAs.
Letter Spacing Value value - sets the letter spacing size, values are in pixels.

### Button Font Size

Overides CTA button font sizes. Please ensure the font works in all breakpoints (ie. desktop, mobile, tablet).

Enable custom button font size - toggles this customization on/off.
Omit custom font sizes for form CTAs - Custom button font size customization will only apply to link CTAs. Custom button font size customization will not apply to form CTAs.
Font size value - sets the font size, values are in pixels.

### Rounded Corners

Apply button corner rounding to CTA buttons.

Enable Rounded Button Corners - toggles this customization on/off.
Omit rounded button corners for all form CTAs - Rounded Button Corners customization will only apply to link CTAs. Rounded Button Corners customization will not apply to form CTAs.
Button Rounded Corner Radius - Enter a corner radius according to the format of the CSS border-radius property. You can enter between one and four values:

One value (e.g. 15px): Value is applied to all four corners
Two values (e.g. 15px 30px): First value is applied to the top left and bottom right corners; second value is applied to the top-right and bottom-left corners
Three values (e.g. 15px 50px 30 px): First value is applied to the top left corner; second value is applied to top right and bottom left corners; third value is applied to bottom-right corner
Four values (e.g. 15 px 20 px 25 px 30 px): Values are applied to corners in clockwise order, starting from top left

All CSS units are valid. You can also set an additional radius to create elliptical corners: to do so, add a forward slash (ie. /) after the initial one to four values, then add a further one to four values (up to eight values total).

For further information and examples, see this description (https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) of the CSS border-radius property.

### Button Padding

Applies custom padding around the text of the CTA button which will change the size of the entire button.

Enable custom padding - toggles this customization on/off.
Omit button padding for form CTAs - Button padding customization will only apply to link CTAs. Button padding customization will not apply to form CTAs.
Button padding value - Enter a padding value according to the format of the CSS padding property. Accepted values are one, two, or three values:

One value (eg. 20px): Value is applied to all four sides
Two values (eg. 10px 20px): Values are applied to the vertical and horizontal sides respectively.
Three values (eg. 10px 15px 20px): Values are applied to the top, horizontal and bottom sides respectively.
Four values (eg. 10px 20px 15px 5px): Values are applied to the top, right, bottom, left sides respectively.

All CSS units are valid.

FOr further information and examples, see this description ((https://developer.mozilla.org/en-US/docs/Web/CSS/padding) of the CSS padding property.

### Multi-Level Copy - Linked CTAs

This feature is used to separate the CTA text into various sections or 'levels'. When enabled, this function will look at the current CTA text, and if they contain symbols that match with the symbols provided in this customizer app, this function will separate the text before/after the symbol into two sections, and this process will be repeated until it checks through the entirety of the CTA text.

Example CTA text: This is the first section %% This is the second section.

Symbol Provided in customizer app: %%

With feature enabled:

This is the first section.
This is the second section

You can have as many levels as needed. Note: CTA default hub CTA description text character limitations apply (including symbol character(s)).

Enable CTA Multi Level Text - toggles this customization on/off.
Omit multi level text for form CTAs - CTA Multi Level Text customization will only apply to link CTAs. CTA Multi Level Text customization will not apply to form CTAs.
Multi level text symbol - Enter symbol to separate CTA text into sections (could be any symbol, single, or multiple ie. % or %#)
Multi level text customizations - This section provides more customizability for the font size, font weight, and margin bottom for the different sections. They should be wrapped in square brackets, separated by commas like the following: ["font size", font weight, "margin bottom"], ie ["20px", "700", "5px"]. Since the CTA font size is adjustable in the Call-To-Action page, a suggested font sizing would be in percentages ie ["100%", "700", "5px"].

NOTE: all these fields are optional, if left empty, these properties will be left as is set by the hub (ie: Font weight set in Call-To-Action page, font-weight is normal, bottom margin: none). However, you can also leave certain sections as an empty quote to mean default ie.
["100%", "", "2px"] - This simply means, leave font-weight as normally set by the hub.
["","","2px"] - This means, only customize the bottom margin to be 2px.
["90%"] - This mean, only customize the font size to be 90% of what was set from within the Call-To-Action page.

Additionally, you can also adjust font sizes for the second, third, etc sections. Simply add another square bracket with this information separated by a comma. IE: ["100%", "700", "5px"], ["70%", "", "5px"], ["50%"] - This means, First section - font size of 100% of original font size set in Call-To-Action page, font weight of 700, and margin bottom of 5px. Second Section - font-size of 70% of original font size set in Call-To-Action page, normal font weight, and margin bottom of 5px. Third Section - font size of 50%, normal font weight, and no margin bottom. If there are CTAs without a 3rd section, this customization would simply be ignored.

### Labels as Placeholder Text - Form CTAs

This will allow custom texts to override the current form CTA labels. NOTE: please use this as a last resort, if possible, adjust the label texts in the Call-To-Action page. If text is not able to be customized there, proceed with this feature.

Enable form CTA label replacement - toggles this customization on/off.
Form CTA label replacement values - Input current text to be replaced, and the replacement text, separated by commas, wrapped in square brackets.
IE. ['Email', 'Your Email'] - it will look for all form CTAs with the label 'Email', and replace it with 'Your Email'.
['Email', 'Your Email'], ['First Name', 'Your First and Middle Name'] - this will look for the example above, as well as all form CTA label text 'First Name' and replace it with 'Your First and Middle Name'.

> NOTE: When importing your script file into _manifest.json_, the contents must be compiled into <a href="https://lingojam.com/TexttoOneLine" target="_blank">one line</a>.

## Possible Errors:

If you have commented lines in your scripts, after it is collapsed into one line, it will comment out anything that follows.
