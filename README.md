# Search input jquery plugin e-search.js
jQuery e-search.js plugin which enables an input field to filter through a large data set by fading out the unmatched entries. Make no petition to your database, do the search from your static html elements.

Current Version: 1.1


## Demo and Examples

Demo:
http://e-search.thedemos.tk/

Example:
```js
<div class="containerItems">
   <div data-search="wordsearch1 wordsearch2">
   </div>
</div>
```

## How it Works?

1. Add jquery library and the e-search.js.
```js
<script src="js/jquery-3.1.0.min.js"></script>
<script src="e-search.js"></script>
```

2. Add containerItems class to the container of your items.
```js
<div class="row containerItems">
```

3. Add data-filter attribute to the items of your containerItems. Add your search words for each item.ADD WORDS WITH NO BLANK SPACES, UNLESS IT IS A DIFFERENT SEARCH WORD** .Like the example bellow: 
```js
<div data-search="westernmahjong strategy">
```

4. Add the selector of your input and Run the function of the e-search plugin.
```js
$('input.form-control.search-game').search();
```

## jQuery
jQuery Use the plugin as follows:
```javascript
   $('input').search();
```
When done searching and want to execute another code:
```javascript
   $('input').search(function(){ 			
      //execute after done typing.
   });
```
