# Card exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

### Requirements
Requirements come from `https://github.com/facebook/create-react-app`

- Node v10.16 or more recent
- NPM v5.6 or more recent

Tested with node v12.18.2 and NPM v6.14.5

### Process
- Installation: `npm install`
- Run the app: `npm start`
- Launch Storybook: `npm run storybook`

## Design

### Responsiveness
The display follows the reference design on handheld-like, tablet-like and desktop-like devices. Not having the exact
dimensions used initially, certain values or dimensions might be a little off from the original source but at least
respect the intended hierarchy. I introduced an intermediary step between the two widest display to smoothly go from a
3-columns layout to a 5-columns layout by this 4-columns layout step.

### Branding
Colours and font used are the ones presented in the branding guidelines.

### Images
Images and icons are the one provided as well, except from the "hamburger menu" icon used in the narrowest display,
which I didn't find, so I simply used the one used on other displays.

### Compatibility
No constraints being set regarding the target browsers, I used freely some CSS features (Grid, custom properties,
alternative generated content) famous for not being supported by some older browsers (IE and early versions of Edge).

## Interactivity
There are links on:
- the logo (top left),
- "Privacy", "T&C", "Contact" in the footer,
- the "Return to the top" arrow (bottom right), (only actual working link)

The "menu" and "Profile" icons as well as the stars are buttons as they call actions rather than navigation.

The cards themselves offer a `hover` state enlarged.

## Data collection
The data come from the `data.json` file hosted on Github and is called remotely.

## Rating system
The gold stars on each card represent the `Math.floor()` of the rating coming from the data file. When clicking on a
star, the user gives his own rating of the card, and a calculation is performed to display the average rating
between the previous rating and the rating the user is giving. A real-life system would consider the number of previous
ratings and calculate the average accordingly.

The rating and the stars are updated according to the result of this new average.

## Accessibility
THere is no specific accessibility effort put in here, just a respect of best practices, so no accessibility warning should be apart from colour contrast.

## Testing
No unit test is implemented even though a few modules regarding testing are part of the project, they come from `create-react-app` and were not removed.

## Storybook
All the components are presented in Storybook. The rating system should also be functional in the cards. The default
viewports provided out of the box by Storybook are used, unfortunately they don't reflect best the responsiveness of the
app. Please play with the actual app's window to better appreciate the responsiveness.  
