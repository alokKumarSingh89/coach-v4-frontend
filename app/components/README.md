# RESTRICTIONS

Components folders can contains only [PRESENTATIONAL](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components.

That means most components inside this folder are stateless and should be defined as simple arrow functions.

# STRUCTURE

Each component has its own file and folder. Both follows its name with [CamelCase format](https://en.wikipedia.org/wiki/Camel_case). Therefore it is easy to read editor open tabs.

No more index.ts tabs hell :-)

# MODULARIZATION

Components folder must contain one main **index.ts** file where all components will be grouped into one export reflecting components names. So that developer can import any module from path `@components`

# STYLING

Styles are completely separated from components implementation. All styles are keeped in `@theme/{version}/components` folder. This is rule is handful when dynamic themes change is required and also keeps styles easy maintanable.
