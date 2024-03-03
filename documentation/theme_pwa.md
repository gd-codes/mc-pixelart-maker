# Dark Mode Toggle and PWA Installation Script

## `toggleTheme(click_event)`
- **Purpose**: Toggles between light and dark themes based on user interaction.
- **Parameters**:
  - `click_event`: Click event triggering the function.
- **Details**:
  - Updates the color scheme and styling of the body and relevant elements.
  - Manages the state of the light/dark theme toggle switch.

## `toggleThemeAutomatic(media_event)`
- **Purpose**: Toggles between light and dark themes automatically based on system preferences.
- **Parameters**:
  - `media_event`: Media event triggered by changes in the system theme.
- **Details**:
  - Adjusts the color scheme and styling of the body and relevant elements based on system preferences.
  - Updates the state of the light/dark theme toggle switch automatically.

## `installPWA(event)`
- **Purpose**: Installs a Progressive Web App (PWA) and registers a service worker.
- **Parameters**:
  - `event`: Click event triggering the PWA installation.
- **Details**:
  - Checks if a service worker is already registered and alerts the user accordingly.
  - Attempts to install the Offline website and provides instructions in an alert.
  - Registers a service worker (`sw.js`) for caching and offline functionality.
  - Displays messages based on the success or failure of the installation.

## Event Listeners
- Listens for changes in the system's preferred color scheme (`systemTheme`) and triggers `toggleThemeAutomatic`.
- Listens for the page load event and sets up event handlers for theme toggling and PWA installation.

## Additional Information
- This script includes functionality for toggling between light and dark themes and installing a Progressive Web App.
- It utilizes the `matchMedia` API to detect changes in the system's preferred color scheme.
- The PWA installation involves registering a service worker (`sw.js`) for caching resources and providing an offline experience.

