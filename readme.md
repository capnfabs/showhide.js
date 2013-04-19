#showhide.js#

_showhide.js_ is a tiny [jQuery](http://jquery.com/) plugin that shows, hides and focuses form inputs based upon the value of other form inputs. This makes it just a bit easier to create clean questionnaires on websites.

#Example#

Take a look at the contact form on the [Deft, Digital Engineering Company website](http://deftweb.co) - elements become visible and invisible dynamically, based on user input.

#Usage#

#Set-up

- Include `jQuery`,
- Include `showhide.js` or `showhide.min.js`:

```html
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/showhide.min.js"></script>
```

##Show/Hide
Mark any element you want to show/hide dynamically with the `data-show` attribute, and set the content of `data-show` to a jQuery selector targeting the element, e.g.

```html
<label><input type="checkbox" id="showTheDiv" /> Show the div?</label>
<div data-show="#showTheDiv">
	The div is visible!
</div>
```

The div will only be visible when the checkbox is `checked`. You can bind `data-show` to work with radio-buttons too.

Other common binding expressions:

- `data-show=".magic"`
- `data-show="#elem1,#elem2,.setOfElements"

##Focus
You can also cause elements to automatically obtain focus once checkboxes and radiobuttons are checked. Simply apply `data-focus="#elemid"` (or `".class"`) to the appropriate element.

#License/Contrib
Licensed under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0).

Contributions and Bug-fixes are always welcome.