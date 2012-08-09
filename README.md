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

Licence
-------

Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html

 This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.