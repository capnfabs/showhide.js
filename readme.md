#showhide.js#

_showhide.js_ is a tiny [jQuery](http://jquery.com/) plugin that shows, hides and focuses form inputs based upon the value of other form inputs. This makes it just a bit easier to create clean questionnaires on websites.

For an example, take a look at the contact form on the [Deft, Digital Engineering Company website](http://deftweb.co) - elements become visible and invisible dynamically, based on user input.

#Usage#

##Show/Hide
Mark any element you want to show/hide dynamically with the `data-show` attribute, and set the content of `data-show` to the `id` of an `input`, e.g.

	<label><input type="checkbox" id="showTheDiv" /> Show the div?</label>
	<div data-show="showTheDiv">
		The div is visible!
	</div>

The div will only be visible when the checkbox is `checked`. You can bind `data-show` to radio-buttons too.

Then, just add `$(document).showHide()` to your `$(document).ready()`.

##Focus
You can also cause elements to automatically obtain focus once checkboxes and radiobuttons are checked. Simply apply `data-focus="elemid"` to the appropriate element.

##Advanced Show/Hide
You can also setup elements to show when any of a _set_ of elements are checked (an `or` function). To do this, set `data-show="id1|id2|id3|id4"`.

#License/Contrib
Licensed under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0).

Contributions and Bug-fixes are always welcome.