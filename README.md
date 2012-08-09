Hint-Text
=========

jQuery plugin for providing hint text on input boxes

The plugin is very basic and simple. It is used to do only a few things:
1. Use placeholder where browsers support it
2. Provide fallback for browsers that don't support placeholder
3. Use one attribute ("placeholder") for the plugin

Styling
-------

The default styling of the plugin will match what placeholder does in chrome. The hint text is 'gray' and the gray will be removed and the default color (as defined in the stylesheet) will be used. 

Placeholder text is hard to style, and is different in every browser. You can write your own markdown to override the placeholder text:
* input::-webkit-input-placeholder
* input:-moz-placeholder

Options
-------

1. hintColor - Changes the color of the hint text. This color is removed when the user starts inputing their own text, and the default color applied by the css stylesheet will take over.

If you change the placeholder hint text color (see above), you can tell the plugin to change the hint color in older browsers to match by passing a different color value:
* $("input[placeholder]").hintText({hintColor:'red'});