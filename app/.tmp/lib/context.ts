import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
import { getTheme } from '@assets/theme';

/**
 * MUI Theme definition
 * ---
 * Loads custom theme definition
 */
const theme = getTheme();

/**
 * Creates page context
 * ---
 * Uses MUI Theme, creates new instance of SheetsRegistry and SheetsManager
 */
function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

/**
 * Retrieves current page context to be used by application
 * ---
 * Creates new context for every server-side request
 */
function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/**
 * Exports
 */
export default getPageContext;
