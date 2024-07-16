/*
-----------------------------------------------------

JavaScript Global Methods and Properties

decodeURI()	Decodes a URI
decodeURIComponent()	Decodes a URI component
encodeURI()	Encodes a URI
encodeURIComponent()	Encodes a URI component
escape()	Deprecated. Use instead:
encodeURI()
encodeURIComponent()
eval()	Evaluates a string and executes it as if it was script code
Infinity	A numeric value that represents positive/negative infinity
isFinite()	Determines whether a value is a finite, legal number
isNaN()	Determines whether a value is an illegal number
NaN	"Not-a-Number" value
Number()	Converts an object's value to a number
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
String()	Converts an object's value to a string
undefined	Indicates that a variable has not been assigned a value
unescape()	Deprecated. Use instead:
decodeURI()
decodeURIComponent()

-----------------------------------------------------

Error Object Properties try {} catch {}

name	Sets or returns an error name
message	Sets or returns an error message (a string)
Error Names
Error Name
EvalError	Deprecated - use SyntaxError instead	 
RangeError	A number "out of range" has occurred	
ReferenceError	An illegal reference has occurred	
SyntaxError	A syntax error has occurred	
TypeError	A type error has occurred	
URIError	An error in encodeURI() has occurred

-----------------------------------------------------

JavaScript Date Methods and Properties

new Date()	Creates a new Date object
constructor	Creates a new Date object
constructor	Returns the function that created the Date prototype
getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
getUTCFullYear()	Returns the year, according to universal time
getUTCHours()	Returns the hour, according to universal time (from 0-23)
getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
getUTCMonth()	Returns the month, according to universal time (from 0-11)
getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
getYear()	Deprecated. Use the getFullYear() method instead
now()	Returns the number of milliseconds since midnight Jan 1, 1970
parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
prototype	Allows you to add properties and methods to an object
setDate()	Sets the day of the month of a date object
setFullYear()	Sets the year of a date object
setHours()	Sets the hour of a date object
setMilliseconds()	Sets the milliseconds of a date object
setMinutes()	Set the minutes of a date object
setMonth()	Sets the month of a date object
setSeconds()	Sets the seconds of a date object
setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
setUTCDate()	Sets the day of the month of a date object, according to universal time
setUTCFullYear()	Sets the year of a date object, according to universal time
setUTCHours()	Sets the hour of a date object, according to universal time
setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
setUTCMinutes()	Set the minutes of a date object, according to universal time
setUTCMonth()	Sets the month of a date object, according to universal time
setUTCSeconds()	Set the seconds of a date object, according to universal time
setYear()	Deprecated. Use the setFullYear() method instead
toDateString()	Converts the date portion of a Date object into a readable string
toGMTString()	Deprecated. Use the toUTCString() method instead
toISOString()	Returns the date as a string, using the ISO standard
toJSON()	Returns the date as a string, formatted as a JSON date
toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()	Converts a Date object to a string, using locale conventions
toString()	Converts a Date object to a string
toTimeString()	Converts the time portion of a Date object to a string
toUTCString()	Converts a Date object to a string, according to universal time
UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()	Returns the primitive value of a Date object

-----------------------------------------------------

Class Methods class Thingy {}

constructor()	A special method for creating and initializing objects created within a class
Class Keywords
extends	Extends a class (inherit)
static	Defines a static method for a class
super	Refers to the parent class

-----------------------------------------------------

JSON Methods

parse()	Parses a JSON string and returns a JavaScript object
stringify()	Convert a JavaScript object to a JSON string

-----------------------------------------------------

Map Methods and Properties

new Map()	Creates a new Map object
clear()	Removes all the elements from a Map
delete()	Removes a Map element specified by a key
entries()	Returns an iterator object with the [key, value] pairs in a Map
forEach()	Invokes a callback for each key/value pair in a Map
get()	Gets the value for a key in a Map
groupBy()	Groups object elements according to returned callback values
has()	Returns true if a key exists in a Map
keys()	Returns an iterator object with the keys in a Map
set()	Sets the value for a key in a Map
size	Returns the number of Map elements
values()	Returns an iterator object of the values in a Map

-----------------------------------------------------

Math Object Methods and Properties

abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
clz32(x)	Returns the number of leading zeros in a 32-bit binary representation of x
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
E	Returns Euler's number (approx. 2.718)
exp(x)	Returns the value of Ex
expm1(x)	Returns the value of Ex minus 1
floor(x)	Returns x, rounded downwards to the nearest integer
fround(x)	Returns the nearest (32-bit single precision) float representation of a number
LN2	Returns the natural logarithm of 2 (approx. 0.693)
LN10	Returns the natural logarithm of 10 (approx. 2.302)
log(x)	Returns the natural logarithmof x
log10(x)	Returns the base-10 logarithm of x
LOG10E	Returns the base-10 logarithm of E (approx. 0.434)
log1p(x)	Returns the natural logarithm of 1 + x
log2(x)	Returns the base-2 logarithm of x
LOG2E	Returns the base-2 logarithm of E (approx. 1.442)
max(x1,x2,..)	Returns the number with the highest value
min(x1,x2,..)	Returns the number with the lowest value
PI	Returns PI (approx. 3.14)
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns the sign of a number (checks whether it is positive, negative or zero)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
SQRT1_2	Returns the square root of 1/2 (approx. 0.707)
SQRT2	Returns the square root of 2 (approx. 1.414)
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)

-----------------------------------------------------

JavaScript Number Methods and Properties

constructor	Returns the function that created JavaScript's Number prototype
EPSILON	Returns the difference between 1 and the smallest number greater than 1
isFinite()	Checks whether a value is a finite number
isInteger()	Checks whether a value is an integer
isNaN()	Checks whether a value is Number.NaN
isSafeInteger()	Checks whether a value is a safe integer
MAX_SAFE_INTEGER	Returns the maximum safe integer in JavaScript.
MIN_SAFE_INTEGER	Returns the minimum safe integer in JavaScript
MAX_VALUE	Returns the largest number possible in JavaScript
MIN_VALUE	Returns the smallest number possible in JavaScript
NaN	Represents a "Not-a-Number" value
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
POSITIVE_INFINITY	Represents infinity (returned on overflow)
parseFloat()	Parses a string an returns a number
parseInt()	Parses a string an returns a whole number
prototype	Allows you to add properties and methods to an object
toExponential(x)	Converts a number into an exponential notation
toFixed(x)	Formats a number with x numbers of digits after the decimal point
toLocaleString()	Converts a number into a string, based on the locale settings
toPrecision(x)	Formats a number to x length
toString()	Converts a number to a string
valueOf()	Returns the primitive value of a number

-----------------------------------------------------

JavaScript Object Methods and Properties

assign()	Copies properties from a source object to a target object
constructor	Returns the function that created an object's prototype
create()	Returns an object created from an existing object
defineProperties()	Adds or changes properties
defineProperty()	Adds or changes a property
entries()	Returns an array of the key/value pairs of an object
freeze()	Prevents any changes to an object
fromEntries()	Returns an object created from an iterable list of key/value pairs
getOwnPropertyDescriptor()	Returns an array of the keys of an object
getOwnPropertyDescriptors()	Returns an array of the keys of an object
getOwnPropertyNames()	Returns an array of the keys of an object
groupBy()	Groups object elements according to returned callback values
isExtensible()	Returns true if an object is extensible
isFrozen()	Returns true if an object is frozen
isSealed()	Returns true if an object is sealed
keys()	Returns an array of the keys of an object
preventExtensions()	Prevents adding new properties to an object
prototype	Let you to add properties and methods to JavaScript objects
seal()	Prevents adding new or deleting existing object properties
toString()	Converts an object to a string and returns the result
valueOf()	Returns the primitive value of an object
values()	Returns an array of the property values of an object

-----------------------------------------------------

Operator Precedence Values
Expressions in parentheses are computed before the rest of the expression
Function are executed before the result is used in the rest of the expression
Val, Operator, Description, Example
18	( )	Expression Grouping	(100 + 50) * 3
17	.	Member Of	car.name
17	[]	Member Of	car["name"]
17	?.	Optional Chaining ES2020	x ?. y
17	()	Function Call	myFunction()
17	new	New with Arguments	new Date("June 5,2022")
16	new	New without Arguments	new Date()
Increment Operators
Postfix increments are executed before prefix increments
15	++	Postfix Increment	i++
15	--	Postfix Decrement	i--
14	++	Prefix Increment	++i
14	--	Prefix Decrement	--i
NOT Operators
14	!	Logical NOT	!(x==y)
14	~	Bitwise NOT	~x
Unary Operators
14	+	Unary Plus	+x
14	-	Unary Minus	-x
14	typeof	Data Type	typeof x
14	void	Evaluate Void	void(0)
14	delete	Property Delete	delete myCar.color
Arithmetic Operators
Exponentiations are executed before multiplications
Multiplications and divisions are executed before additions and subtractions
13	**	Exponentiation ES2016	10 ** 2
12	*	Multiplication	10 * 5
12	/	Division	10 / 5
12	%	Division Remainder	10 % 5
11	+	Addition	10 + 5
11	-	Subtraction	10 - 5
11	+	Concatenation	"John" + "Doe"
Shift Operators
10	<<	Shift Left	x << 2
10	>>	Shift Right (signed)	x >> 2
10	>>>	Shift Right (unsigned)	x >>> 2
Relational Operators
9	in	Property in Object	"PI" in Math
9	instanceof	Instance of Object	x instanceof Array
Comparison Operators
9	<	Less than	x < y 
9	<=	Less than or equal	x <= y
9	>	Greater than	x > y
9	>=	Greater than or equal	x >= Array
8	==	Equal	x == y
8	===	Strict equal	x === y
8	!=	Unequal	x != y
8	!==	Strict unequal	x !== y
Bitwise Operators
7	&	Bitwise AND	x & y
6	^	Bitwise XOR	x ^ y
5	|	Bitwise OR	x | y
Logical Operators
4	&&	Logical AND	x && y
3	||	Logical OR	x || y
3	??	Nullish Coalescing ES2020	x ?? y
Conditional (ternary) Operator
2	? :	Condition	? "yes" : "no"
Assignment Operators
Assignments are executed after other operations
2	=	Simple Assignment	x = y
2	+=	Addition Assignment	x += y
2	-=	Subtraction Assignment	x -= y
2	*=	Multiplication Assignment	x *= y
2	**=	Exponentiation Assignment	x **= y
2	/=	Division Assignment	x /= y
2	%=	Remainder Assignment	x %= y
2	<<=	Left Shift Assignment	x <<= y
2	>>=	Right Shift Assignment	x >>= y
2	>>>=	Unsigned Right Shift	x >>>= y
2	&=	Bitwise AND Assignment	x &= y
2	|=	Bitwise OR Assignment	x |= y
2	^=	Bitwise XOR Assignment	x ^= y
2	&&=	Logical AND Assignment	x &= y
2	||=	Logical OR Assignment	x ||= y
2	:	Colon Assignment	x : 5
2	=>	Arrow	x => y
2	yield	Pause / Resume	yield x
2	yield*	Delegate	yield* x
2	...	Spread	...x
1	,	Comma	x , y

-----------------------------------------------------

JavaScript Promise Methods and Properties

Promise.all()	Returns a single Promise from a list of promises
When all promises fulfill
Promise.allSettled()	Returns a single Promise from a list of promises
When all promises sette
Promise.any()	Returns a single Promise from a list of promises
When any promise fulfills
Promise.race()	Returns a single Promise from a list of promises
When the faster promise settles
Promise.reject()	Returns a Promise object rejected with a value
Promise.resolve()	Returns a Promise object resolved with a value
catch()	Provides a function to be called when a promise is rejected
finally()	Provides a function to be called when a promise is fulfilled or rejected
then()	Provide two functions to be called when a promise is fulfilled or rejected

-----------------------------------------------------

JavaScript Set Methods and Properties

new Set()	Creates a new Set
add()	Adds a new element to the Set
clear()	Removes all elements from a Set
delete()	Removes an element from a Set
entries()	Returns an Iterator with the [value,value] pairs from a Set
forEach()	Invokes a callback for each element
has()	Returns true if a value exists
keys()	Same as values()
values()	Returns an Iterator with the values in a Set

-----------------------------------------------------

JavaScript Statement Identifiers
JavaScript statements often start with a statement identifier to identify the JavaScript action to be performed.

Statement identifiers are reserved words and cannot be used as variable names (or any other things).

The following table lists all JavaScript statement identifiers:

break	Exits a switch or a loop
class	Declares a class
const	Declares a variable with a constant value
continue	Breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
debugger	Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while	Executes a block of statements and repeats the block while a condition is true
for	Loops through a block of code a number of times
for ... in	Loops through the properties of an object
for ... of	Loops through the values of an iterable object
function	Declares a function
if ... else ... else if	Marks a block of statements to be executed depending on a condition
let	Declares a variable
return	Stops the execution of a function and returns a value from that function
switch	Marks a block of statements to be executed depending on different cases
throw	Throws (generates) an error
try ... catch ... finally	Marks the block of statements to be executed when an error occurs in a try block, and implements error handling
var	Declares a variable
while	Marks a block of statements to be executed while a condition is true

-----------------------------------------------------

JavaScript String Methods

at()	Returns an indexed character from a string
charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
codePointAt()	Returns the Unicode value at an index (position) in a string
concat()	Returns two or more joined strings
constructor	Returns the string's constructor function
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
length	Returns the length of a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
padEnd()	Pads a string at the end
padStart()	Pads a string from the start
prototype	Allows you to add properties and methods to an object
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces
trimEnd()	Returns a string with removed whitespaces from the end
trimStart()	Returns a string with removed whitespaces from the start
valueOf()	Returns the primitive value of a string or a string object

-----------------------------------------------------

Window Object
The window object represents an open window in a browser.

If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.

Window Object Properties

closed	Returns a boolean true if a window is closed.
console	Returns the Console Object for the window.
See also The Console Object.
defaultStatus	Deprecated.
document	Returns the Document object for the window.
See also The Document Object.
frameElement	Returns the frame in which the window runs.
frames	Returns all window objects running in the window.
history	Returns the History object for the window.
See also The History Object.
innerHeight	Returns the height of the window's content area (viewport) including scrollbars
innerWidth	Returns the width of a window's content area (viewport) including scrollbars
length	Returns the number of <iframe> elements in the current window
localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
location	Returns the Location object for the window.
See also the The Location Object.
name	Sets or returns the name of a window
navigator	Returns the Navigator object for the window.
See also The Navigator object.
opener	Returns a reference to the window that created the window
outerHeight	Returns the height of the browser window, including toolbars/scrollbars
outerWidth	Returns the width of the browser window, including toolbars/scrollbars
pageXOffset	Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
pageYOffset	Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
parent	Returns the parent window of the current window
screen	Returns the Screen object for the window
See also The Screen object
screenLeft	Returns the horizontal coordinate of the window relative to the screen
screenTop	Returns the vertical coordinate of the window relative to the screen
screenX	Returns the horizontal coordinate of the window relative to the screen
screenY	Returns the vertical coordinate of the window relative to the screen
sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session
scrollX	An alias of pageXOffset
scrollY	An alias of pageYOffset
self	Returns the current window
status	Deprecated. Avoid using it.
top	Returns the topmost browser window

-----------------------------------------------------

Console Object Methods

assert()	Writes an error message to the console if a assertion is false
clear()	Clears the console
count()	Logs the number of times that this particular call to count() has been called
error()	Outputs an error message to the console
group()	Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
groupCollapsed()	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
groupEnd()	Exits the current inline group in the console
info()	Outputs an informational message to the console
log()	Outputs a message to the console
table()	Displays tabular data as a table
time()	Starts a timer (can track how long an operation takes)
timeEnd()	Stops a timer that was previously started by console.time()
trace()	Outputs a stack trace to the console
warn()	Outputs a warning message to the console

-----------------------------------------------------

Screen Object Properties

availHeight	Returns the height of the screen (excluding the Windows Taskbar)
availWidth	Returns the width of the screen (excluding the Windows Taskbar)
colorDepth	Returns the bit depth of the color palette for displaying images
height	Returns the total height of the screen
pixelDepth	Returns the color resolution (in bits per pixel) of the screen
width	Returns the total width of the screen

-----------------------------------------------------

Document Object Properties and Methods
The following properties and methods can be used on HTML documents:

Property / Method	Description
activeElement	Returns the currently focused element in the document
addEventListener()	Attaches an event handler to the document
adoptNode()	Adopts a node from another document
anchors	Deprecated
applets	Deprecated
baseURI	Returns the absolute base URI of a document
body	Sets or returns the document's body (the <body> element)
charset	Deprecated
characterSet	Returns the character encoding for the document
close()	Closes the output stream previously opened with document.open()
cookie	Returns all name/value pairs of cookies in the document
createAttribute()	Creates an attribute node
createComment()	Creates a Comment node with the specified text
createDocumentFragment()	Creates an empty DocumentFragment node
createElement()	Creates an Element node
createEvent()	Creates a new event
createTextNode()	Creates a Text node
defaultView	Returns the window object associated with a document, or null if none is available.
designMode	Controls whether the entire document should be editable or not.
doctype	Returns the Document Type Declaration associated with the document
documentElement	Returns the Document Element of the document (the <html> element)
documentMode	Deprecated
documentURI	Sets or returns the location of the document
domain	Returns the domain name of the server that loaded the document
domConfig	Deprecated
embeds	Returns a collection of all <embed> elements the document
execCommand()	Deprecated
forms	Returns a collection of all <form> elements in the document
getElementById()	Returns the element that has the ID attribute with the specified value
getElementsByClassName()	Returns an HTMLCollection containing all elements with the specified class name
getElementsByName()	Returns an live NodeList containing all elements with the specified name
getElementsByTagName()	Returns an HTMLCollection containing all elements with the specified tag name
hasFocus()	Returns a Boolean value indicating whether the document has focus
head	Returns the <head> element of the document
images	Returns a collection of all <img> elements in the document
implementation	Returns the DOMImplementation object that handles this document
importNode()	Imports a node from another document
inputEncoding	Deprecated
lastModified	Returns the date and time the document was last modified
links	Returns a collection of all <a> and <area> elements in the document that have a href attribute
normalize()	Removes empty Text nodes, and joins adjacent nodes
normalizeDocument()	Deprecated
open()	Opens an HTML output stream to collect output from document.write()
querySelector()	Returns the first element that matches a specified CSS selector(s) in the document
querySelectorAll()	Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
readyState	Returns the (loading) status of the document
referrer	Returns the URL of the document that loaded the current document
removeEventListener()	Removes an event handler from the document (that has been attached with the addEventListener() method)
renameNode()	Deprecated
scripts	Returns a collection of <script> elements in the document
strictErrorChecking	Deprecated
title	Sets or returns the title of the document
URL	Returns the full URL of the HTML document
write()	Writes HTML expressions or JavaScript code to a document
writeln()	Same as write(), but adds a newline character after each statement

-----------------------------------------------------

Properties and Methods
The following properties and methods can be used on all HTML elements:

Property / Method	Description
accessKey	Sets or returns the accesskey attribute of an element
addEventListener()	Attaches an event handler to an element
appendChild()	Adds (appends) a new child node to an element
attributes	Returns a NamedNodeMap of an element's attributes
blur()	Removes focus from an element
childElementCount	Returns an elements's number of child elements
childNodes	Returns a NodeList of an element's child nodes
children	Returns an HTMLCollection of an element's child elements
classList	Returns the class name(s) of an element
className	Sets or returns the value of the class attribute of an element
click()	Simulates a mouse-click on an element
clientHeight	Returns the height of an element, including padding
clientLeft	Returns the width of the left border of an element
clientTop	Returns the width of the top border of an element
clientWidth	Returns the width of an element, including padding
cloneNode()	Clones an element
closest()	Searches the DOM tree for the closest element that matches a CSS selector
compareDocumentPosition()	Compares the document position of two elements
contains()	Returns true if a node is a descendant of a node
contentEditable	Sets or returns whether the content of an element is editable or not
dir	Sets or returns the value of the dir attribute of an element
firstChild	Returns the first child node of an element
firstElementChild	Returns the first child element of an element
focus()	Gives focus to an element
getAttribute()	Returns the value of an element's attribute
getAttributeNode()	Returns an attribute node
getBoundingClientRect()	Returns the size of an element and its position relative to the viewport
getElementsByClassName()	Returns a collection of child elements with a given class name
getElementsByTagName()	Returns a collection of child elements with a given tag name
hasAttribute()	Returns true if an element has a given attribute
hasAttributes()	Returns true if an element has any attributes
hasChildNodes()	Returns true if an element has any child nodes
id	Sets or returns the value of the id attribute of an element
innerHTML	Sets or returns the content of an element
innerText	Sets or returns the text content of a node and its descendants
insertAdjacentElement()	Inserts a new HTML element at a position relative to an element
insertAdjacentHTML()	Inserts an HTML formatted text at a position relative to an element
insertAdjacentText()	Inserts text into a position relative to an element
insertBefore()	Inserts a new child node before an existing child node
isContentEditable	Returns true if an element's content is editable
isDefaultNamespace()	Returns true if a given namespaceURI is the default
isEqualNode()	Checks if two elements are equal
isSameNode()	Checks if two elements are the same node
isSupported()	Deprecated
lang	Sets or returns the value of the lang attribute of an element
lastChild	Returns the last child node of an element
lastElementChild	Returns the last child element of an element
matches()	Returns true if an element is matched by a given CSS selector
namespaceURI	Returns the namespace URI of an element
nextSibling	Returns the next node at the same node tree level
nextElementSibling	Returns the next element at the same node tree level
nodeName	Returns the name of a node
nodeType	Returns the node type of a node
nodeValue	Sets or returns the value of a node
normalize()	Joins adjacent text nodes and removes empty text nodes in an element
offsetHeight	Returns the height of an element, including padding, border and scrollbar
offsetWidth	Returns the width of an element, including padding, border and scrollbar
offsetLeft	Returns the horizontal offset position of an element
offsetParent	Returns the offset container of an element
offsetTop	Returns the vertical offset position of an element
outerHTML	Sets or returns the content of an element (including the start tag and the end tag)
outerText	Sets or returns the outer text content of a node and its descendants
ownerDocument	Returns the root element (document object) for an element
parentNode	Returns the parent node of an element
parentElement	Returns the parent element node of an element
previousSibling	Returns the previous node at the same node tree level
previousElementSibling	Returns the previous element at the same node tree level
querySelector()	Returns the first child element that matches a CSS selector(s)
querySelectorAll()	Returns all child elements that matches a CSS selector(s)
remove()	Removes an element from the DOM
removeAttribute()	Removes an attribute from an element
removeAttributeNode()	Removes an attribute node, and returns the removed node
removeChild()	Removes a child node from an element
removeEventListener()	Removes an event handler that has been attached with the addEventListener() method
replaceChild()	Replaces a child node in an element
scrollHeight	Returns the entire height of an element, including padding
scrollIntoView()	Scrolls the an element into the visible area of the browser window
scrollLeft	Sets or returns the number of pixels an element's content is scrolled horizontally
scrollTop	Sets or returns the number of pixels an element's content is scrolled vertically
scrollWidth	Returns the entire width of an element, including padding
setAttribute()	Sets or changes an attribute's value
setAttributeNode()	Sets or changes an attribute node
style	Sets or returns the value of the style attribute of an element
tabIndex	Sets or returns the value of the tabindex attribute of an element
tagName	Returns the tag name of an element
textContent	Sets or returns the textual content of a node and its descendants
title	Sets or returns the value of the title attribute of an element
toString()	Converts an element to a string

-----------------------------------------------------

Style Object Properties

alignContent	Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space
alignItems	Sets or returns the alignment for items inside a flexible container
alignSelf	Sets or returns the alignment for selected items inside a flexible container
animation	A shorthand property for all the animation properties below, except the animationPlayState property
animationDelay	Sets or returns when the animation will start
animationDirection	Sets or returns whether or not the animation should play in reverse on alternate cycles
animationDuration	Sets or returns how many seconds or milliseconds an animation takes to complete one cycle
animationFillMode	Sets or returns what values are applied by the animation outside the time it is executing
animationIterationCount	Sets or returns the number of times an animation should be played
animationName	Sets or returns a name for the @keyframes animation
animationTimingFunction	Sets or returns the speed curve of the animation
animationPlayState	Sets or returns whether the animation is running or paused
background	Sets or returns all the background properties in one declaration
backgroundAttachment	Sets or returns whether a background-image is fixed or scrolls with the page
backgroundColor	Sets or returns the background-color of an element
backgroundImage	Sets or returns the background-image for an element
backgroundPosition	Sets or returns the starting position of a background-image
backgroundRepeat	Sets or returns how to repeat (tile) a background-image
backgroundClip	Sets or returns the painting area of the background
backgroundOrigin	Sets or returns the positioning area of the background images
backgroundSize	Sets or returns the size of the background image
backfaceVisibility	Sets or returns whether or not an element should be visible when not facing the screen
border	Sets or returns borderWidth, borderStyle, and borderColor in one declaration
borderBottom	Sets or returns all the borderBottom properties in one declaration
borderBottomColor	Sets or returns the color of the bottom border
borderBottomLeftRadius	Sets or returns the shape of the border of the bottom-left corner
borderBottomRightRadius	Sets or returns the shape of the border of the bottom-right corner
borderBottomStyle	Sets or returns the style of the bottom border
borderBottomWidth	Sets or returns the width of the bottom border
borderCollapse	Sets or returns whether the table border should be collapsed into a single border, or not
borderColor	Sets or returns the color of an element's border (can have up to four values)
borderImage	A shorthand property for setting or returning all the borderImage properties
borderImageOutset	Sets or returns the amount by which the border image area extends beyond the border box
borderImageRepeat	Sets or returns whether the image-border should be repeated, rounded or stretched
borderImageSlice	Sets or returns the inward offsets of the image-border
borderImageSource	Sets or returns the image to be used as a border
borderImageWidth	Sets or returns the widths of the image-border
borderLeft	Sets or returns all the borderLeft properties in one declaration
borderLeftColor	Sets or returns the color of the left border
borderLeftStyle	Sets or returns the style of the left border
borderLeftWidth	Sets or returns the width of the left border
borderRadius	A shorthand property for setting or returning all the four borderRadius properties
borderRight	Sets or returns all the borderRight properties in one declaration
borderRightColor	Sets or returns the color of the right border
borderRightStyle	Sets or returns the style of the right border
borderRightWidth	Sets or returns the width of the right border
borderSpacing	Sets or returns the space between cells in a table
borderStyle	Sets or returns the style of an element's border (can have up to four values)
borderTop	Sets or returns all the borderTop properties in one declaration
borderTopColor	Sets or returns the color of the top border
borderTopLeftRadius	Sets or returns the shape of the border of the top-left corner
borderTopRightRadius	Sets or returns the shape of the border of the top-right corner
borderTopStyle	Sets or returns the style of the top border
borderTopWidth	Sets or returns the width of the top border
borderWidth	Sets or returns the width of an element's border (can have up to four values)
bottom	Sets or returns the bottom position of a positioned element
boxDecorationBreak	Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.
boxShadow	Attaches one or more drop-shadows to the box
boxSizing	Allows you to define certain elements to fit an area in a certain way
captionSide	Sets or returns the position of the table caption
caretColor	Sets or returns the caret/cursor color of an element
clear	Sets or returns the position of the element relative to floating objects
clip	Sets or returns which part of a positioned element is visible
color	Sets or returns the color of the text
columnCount	Sets or returns the number of columns an element should be divided into
columnFill	Sets or returns how to fill columns
columnGap	Sets or returns the gap between the columns
columnRule	A shorthand property for setting or returning all the columnRule properties
columnRuleColor	Sets or returns the color of the rule between columns
columnRuleStyle	Sets or returns the style of the rule between columns
columnRuleWidth	Sets or returns the width of the rule between columns
columns	A shorthand property for setting or returning columnWidth and columnCount
columnSpan	Sets or returns how many columns an element should span across
columnWidth	Sets or returns the width of the columns
content	Used with the :before and :after pseudo-elements, to insert generated content
counterIncrement	Increments one or more counters
counterReset	Creates or resets one or more counters
cursor	Sets or returns the type of cursor to display for the mouse pointer
direction	Sets or returns the text direction
display	Sets or returns an element's display type
emptyCells	Sets or returns whether to show the border and background of empty cells, or not
filter	Sets or returns image filters (visual effects, like blur and saturation)
flex	Sets or returns the length of the item, relative to the rest
flexBasis	Sets or returns the initial length of a flexible item
flexDirection	Sets or returns the direction of the flexible items
flexFlow	A shorthand property for the flexDirection and the flexWrap properties
flexGrow	Sets or returns how much the item will grow relative to the rest
flexShrink	Sets or returns how the item will shrink relative to the rest
flexWrap	Sets or returns whether the flexible items should wrap or not
cssFloat	Sets or returns the horizontal alignment of an element
font	Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration
fontFamily	Sets or returns the font family for text
fontSize	Sets or returns the font size of the text
fontStyle	Sets or returns whether the style of the font is normal, italic or oblique
fontVariant	Sets or returns whether the font should be displayed in small capital letters
fontWeight	Sets or returns the boldness of the font
fontSizeAdjust	Preserves the readability of text when font fallback occurs
fontStretch	Selects a normal, condensed, or expanded face from a font family
hangingPunctuation	Specifies whether a punctuation character may be placed outside the line box
height	Sets or returns the height of an element
hyphens	Sets how to split words to improve the layout of paragraphs
icon	Provides the author the ability to style an element with an iconic equivalent
imageOrientation	Specifies a rotation in the right or clockwise direction that a user agent applies to an image
isolation	Defines whether an element must create a new stacking content
justifyContent	Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.
left	Sets or returns the left position of a positioned element
letterSpacing	Sets or returns the space between characters in a text
lineHeight	Sets or returns the distance between lines in a text
listStyle	Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration
listStyleImage	Sets or returns an image as the list-item marker
listStylePosition	Sets or returns the position of the list-item marker
listStyleType	Sets or returns the list-item marker type
margin	Sets or returns the margins of an element (can have up to four values)
marginBottom	Sets or returns the bottom margin of an element
marginLeft	Sets or returns the left margin of an element
marginRight	Sets or returns the right margin of an element
marginTop	Sets or returns the top margin of an element
maxHeight	Sets or returns the maximum height of an element
maxWidth	Sets or returns the maximum width of an element
minHeight	Sets or returns the minimum height of an element
minWidth	Sets or returns the minimum width of an element
navDown	Sets or returns where to navigate when using the arrow-down navigation key
navIndex	Sets or returns the tabbing order for an element
navLeft	Sets or returns where to navigate when using the arrow-left navigation key
navRight	Sets or returns where to navigate when using the arrow-right navigation key
navUp	Sets or returns where to navigate when using the arrow-up navigation key
objectFit	Specifies how the contents of a replaced element should be fitted to the box established by its used height and width
objectPosition	Specifies the alignment of the replaced element inside its box
opacity	Sets or returns the opacity level for an element
order	Sets or returns the order of the flexible item, relative to the rest
orphans	Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element
outline	Sets or returns all the outline properties in one declaration
outlineColor	Sets or returns the color of the outline around a element
outlineOffset	Offsets an outline, and draws it beyond the border edge
outlineStyle	Sets or returns the style of the outline around an element
outlineWidth	Sets or returns the width of the outline around an element
overflow	Sets or returns what to do with content that renders outside the element box
overflowX	Specifies what to do with the left/right edges of the content, if it overflows the element's content area
overflowY	Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area
padding	Sets or returns the padding of an element (can have up to four values)
paddingBottom	Sets or returns the bottom padding of an element
paddingLeft	Sets or returns the left padding of an element
paddingRight	Sets or returns the right padding of an element
paddingTop	Sets or returns the top padding of an element
pageBreakAfter	Sets or returns the page-break behavior after an element
pageBreakBefore	Sets or returns the page-break behavior before an element
pageBreakInside	Sets or returns the page-break behavior inside an element
perspective	Sets or returns the perspective on how 3D elements are viewed
perspectiveOrigin	Sets or returns the bottom position of 3D elements
position	Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)
quotes	Sets or returns the type of quotation marks for embedded quotations
resize	Sets or returns whether or not an element is resizable by the user
right	Sets or returns the right position of a positioned element
scrollBehavior	Specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable boxt
tableLayout	Sets or returns the way to lay out table cells, rows, and columns
tabSize	Sets or returns the length of the tab-character
textAlign	Sets or returns the horizontal alignment of text
textAlignLast	Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"
textDecoration	Sets or returns the decoration of a text
textDecorationColor	Sets or returns the color of the text-decoration
textDecorationLine	Sets or returns the type of line in a text-decoration
textDecorationStyle	Sets or returns the style of the line in a text decoration
textIndent	Sets or returns the indentation of the first line of text
textJustify	Sets or returns the justification method used when text-align is "justify"
textOverflow	Sets or returns what should happen when text overflows the containing element
textShadow	Sets or returns the shadow effect of a text
textTransform	Sets or returns the capitalization of a text
top	Sets or returns the top position of a positioned element
transform	Applies a 2D or 3D transformation to an element
transformOrigin	Sets or returns the position of transformed elements
transformStyle	Sets or returns how nested elements are rendered in 3D space
transition	A shorthand property for setting or returning the four transition properties
transitionProperty	Sets or returns the CSS property that the transition effect is for
transitionDuration	Sets or returns how many seconds or milliseconds a transition effect takes to complete
transitionTimingFunction	Sets or returns the speed curve of the transition effect
transitionDelay	Sets or returns when the transition effect will start
unicodeBidi	Sets or returns whether the text should be overridden to support multiple languages in the same document
userSelect	Sets or returns whether the text of an element can be selected or not
verticalAlign	Sets or returns the vertical alignment of the content in an element
visibility	Sets or returns whether an element should be visible
whiteSpace	Sets or returns how to handle tabs, line breaks and whitespace in a text
width	Sets or returns the width of an element
wordBreak	Sets or returns line breaking rules for non-CJK scripts
wordSpacing	Sets or returns the spacing between words in a text
wordWrap	Allows long, unbreakable words to be broken and wrap to the next line
widows	Sets or returns the minimum number of lines for an element that must be visible at the top of a page
zIndex	Sets or returns the stack order of a positioned element

-----------------------------------------------------

Examples
In HTML onclick is the event listener, myFunction is the event handler:

<button onclick="myFunction()">Click me</button>
In JavaScript click is the event, myFunction is the event handler:

button.addEventListener("click", myFunction);
Event	Occurs When	Belongs To
abort	The loading of a media is aborted	UiEvent, Event
afterprint	A page has started printing	Event
animationend	A CSS animation has completed	AnimationEvent
animationiteration	A CSS animation is repeated	AnimationEvent
animationstart	A CSS animation has started	AnimationEvent
beforeprint	A page is about to be printed	Event
beforeunload	Before a document is about to be unloaded	UiEvent, Event
blur	An element loses focus	FocusEvent
canplay	The browser can start playing a media (has buffered enough to begin)	Event
canplaythrough	The browser can play through a media without stopping for buffering	Event
change	The content of a form element has changed	Event
click	An element is clicked on	MouseEvent
contextmenu	An element is right-clicked to open a context menu	MouseEvent
copy	The content of an element is copied	ClipboardEvent
cut	The content of an element is cut	ClipboardEvent
dblclick	An element is double-clicked	MouseEvent
drag	An element is being dragged	DragEvent
dragend	Dragging of an element has ended	DragEvent
dragenter	A dragged element enters the drop target	DragEvent
dragleave	A dragged element leaves the drop target	DragEvent
dragover	A dragged element is over the drop target	DragEvent
dragstart	Dragging of an element has started	DragEvent
drop	A dragged element is dropped on the target	DragEvent
durationchange	The duration of a media is changed	Event
ended	A media has reach the end ("thanks for listening")	Event
error	An error has occurred while loading a file	ProgressEvent, UiEvent, Event
focus	An element gets focus	FocusEvent
focusin	An element is about to get focus	FocusEvent
focusout	An element is about to lose focus	FocusEvent
fullscreenchange	An element is displayed in fullscreen mode	Event
fullscreenerror	An element can not be displayed in fullscreen mode	Event
hashchange	There has been changes to the anchor part of a URL	HashChangeEvent
input	An element gets user input	InputEvent, Event
invalid	An element is invalid	Event
keydown	A key is down	KeyboardEvent
keypress	A key is pressed	KeyboardEvent
keyup	A key is released	KeyboardEvent
load	An object has loaded	UiEvent, Event
loadeddata	Media data is loaded	Event
loadedmetadata	Meta data (like dimensions and duration) are loaded	Event
loadstart	The browser starts looking for the specified media	ProgressEvent
message	A message is received through the event source	Event
mousedown	The mouse button is pressed over an element	MouseEvent
mouseenter	The pointer is moved onto an element	MouseEvent
mouseleave	The pointer is moved out of an element	MouseEvent
mousemove	The pointer is moved over an element	MouseEvent
mouseover	The pointer is moved onto an element	MouseEvent
mouseout	The pointer is moved out of an element	MouseEvent
mouseup	A user releases a mouse button over an element	MouseEvent
mousewheel	Deprecated. Use the wheel event instead	WheelEvent
offline	The browser starts working offline	Event
online	The browser starts working online	Event
open	A connection with the event source is opened	Event
pagehide	User navigates away from a webpage	PageTransitionEvent
pageshow	User navigates to a webpage	PageTransitionEvent
paste	Some content is pasted in an element	ClipboardEvent
pause	A media is paused	Event
play	The media has started or is no longer paused	Event
playing	The media is playing after being paused or buffered	Event
popstate	The window's history changes	PopStateEvent
progress	The browser is downloading media data	Event
ratechange	The playing speed of a media is changed	Event
resize	The document view is resized	UiEvent, Event
reset	A form is reset	Event
scroll	An scrollbar is being scrolled	UiEvent, Event
search	Something is written in a search field	Event
seeked	Skipping to a media position is finished	Event
seeking	Skipping to a media position is started	Event
select	User selects some text	UiEvent, Event
show	A <menu> element is shown as a context menu	Event
stalled	The browser is trying to get unavailable media data	Event
storage	A Web Storage area is updated	StorageEvent
submit	A form is submitted	Event
suspend	The browser is intentionally not getting media data	Event
timeupdate	The playing position has changed (the user moves to a different point in the media)	Event
toggle	The user opens or closes the <details> element	Event
touchcancel	The touch is interrupted	TouchEvent
touchend	A finger is removed from a touch screen	TouchEvent
touchmove	A finger is dragged across the screen	TouchEvent
touchstart	A finger is placed on a touch screen	TouchEvent
transitionend	A CSS transition has completed	TransitionEvent
unload	A page has unloaded	UiEvent, Event
volumechange	The volume of a media is changed (includes muting)	Event
waiting	A media is paused but is expected to resume (e.g. buffering)	Event
wheel	The mouse wheel rolls up or down over an element	WheelEvent

-----------------------------------------------------

HTML DOM Event Properties
Property	Description	Belongs To
altKey	Returns whether the "ALT" key was pressed when the mouse event was triggered	MouseEvent
altKey	Returns whether the "ALT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
animationName	Returns the name of the animation	AnimationEvent
bubbles	Returns whether or not a specific event is a bubbling event	Event
button	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
buttons	Returns which mouse buttons were pressed when the mouse event was triggered	MouseEvent
cancelable	Returns whether or not an event can have its default action prevented	Event
charCode	Deprecated (Avoid using it)
Use the key property instead	KeyboardEvent
changeTouches	Returns a list of all the touch objects whose state changed between the previous touch and this touch	TouchEvent
clientX	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clientY	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clipboardData	Returns an object containing the data affected by the clipboard operation	ClipboardData
code	Returns the code of the key that triggered the event	KeyboardEvent
composed	Returns whether the event is composed or not	Event
ctrlKey	Returns whether the "CTRL" key was pressed when the mouse event was triggered	MouseEvent
ctrlKey	Returns whether the "CTRL" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
currentTarget	Returns the element whose event listeners triggered the event	Event
data	Returns the inserted characters	InputEvent
dataTransfer	Returns an object containing the data being dragged/dropped, or inserted/deleted	DragEvent, InputEvent
defaultPrevented	Returns whether or not the preventDefault() method was called for the event	Event
deltaX	Returns the horizontal scroll amount of a mouse wheel (x-axis)	WheelEvent
deltaY	Returns the vertical scroll amount of a mouse wheel (y-axis)	WheelEvent
deltaZ	Returns the scroll amount of a mouse wheel for the z-axis	WheelEvent
deltaMode	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	WheelEvent
detail	Returns a number that indicates how many times the mouse was clicked	UiEvent
elapsedTime	Returns the number of seconds an animation has been running	AnimationEvent
elapsedTime	Returns the number of seconds a transition has been running	 
eventPhase	Returns which phase of the event flow is currently being evaluated	Event
getModifierState()	Returns an array containing target ranges that will be affected by the insertion/deletion	MouseEvent
inputType	Returns the type of the change (i.e "inserting" or "deleting")	InputEvent
isComposing	Returns whether the state of the event is composing or not	InputEvent, KeyboardEvent
isTrusted	Returns whether or not an event is trusted	Event
key	Returns the key value of the key represented by the event	KeyboardEvent
key	Returns the key of the changed storage item	StorageEvent
keyCode	Deprecated (Avoid using it)
Use the key property instead	KeyboardEvent
location	Returns the location of a key on the keyboard or device	KeyboardEvent
lengthComputable	Returns whether the length of the progress can be computable or not	ProgressEvent
loaded	Returns how much work has been loaded	ProgressEvent
metaKey	Returns whether the "META" key was pressed when an event was triggered	MouseEvent
metaKey	Returns whether the "meta" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
MovementX	Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
MovementY	Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
newValue	Returns the new value of the changed storage item	StorageEvent
newURL	Returns the URL of the document, after the hash has been changed	HasChangeEvent
offsetX	Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
offsetY	Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
oldValue	Returns the old value of the changed storage item	StorageEvent
oldURL	Returns the URL of the document, before the hash was changed	HasChangeEvent
onemptied	When something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	 
pageX	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
pageY	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
persisted	Returns whether the webpage was cached by the browser	PageTransitionEvent
propertyName	Returns the name of the CSS property associated with the animation or transition	AnimationEvent, TransitionEvent
pseudoElement	Returns the name of the pseudo-element of the animation or transition	AnimationEvent, TransitionEvent
region		MouseEvent
relatedTarget	Returns the element related to the element that triggered the mouse event	MouseEvent
relatedTarget	Returns the element related to the element that triggered the event	FocusEvent
repeat	Returns whether a key is being hold down repeatedly, or not	KeyboardEvent
screenX	Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
screenY	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
state	Returns an object containing a copy of the history entries	PopStateEvent
storageArea	Returns an object representing the affected storage object	StorageEvent
target	Returns the element that triggered the event	Event
targetTouches	Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element	TouchEvent
timeStamp	Returns the time (in milliseconds relative to the epoch) at which the event was created	Event
total	Returns the total amount of work that will be loaded	ProgressEvent
touches	Returns a list of all the touch objects that are currently in contact with the surface	TouchEvent
transitionend	A CSS transition has completed	TransitionEvent
type	Returns the name of the event	Event
url	Returns the URL of the changed item's document	StorageEvent
which	Deprecated (Avoid using it)
Use the button property instead	MouseEvent
which	Deprecated (Avoid using it)
Use the key property instead	KeyboardEvent
view	Returns a reference to the Window object where the event occurred	UiEvent
x	Alias for clientX	MouseEvent
y	Alias for clientY	MouseEvent

-----------------------------------------------------

HTML DOM Event Methods
Method	Description	Belongs To
getModifierState()	Returns true if a specified key is activated	MouseEvent
getTargetRanges()	Returns an array containing target ranges that will be affected by the insertion/deletion	InputEvent
preventDefault()	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	Event
stopImmediate
Propagation()	Prevents other listeners of the same event from being called	Event
stopPropagation()	Prevents further propagation of an event during event flow	Event

-----------------------------------------------------

HTML Objects
<a>
<abbr>
<address>
<area>
<article>
<aside>
<audio>
<b>
<base>
<bdo>
<blockquote>
<body>
<br>
<button>
<canvas>
<caption>
<cite>
<code>
<col>
<colgroup>
<datalist>
<dd>
<del>
<details>
<dfn>
<dialog>
<div>
<dl>
<dt>
<em>
<embed>
<fieldset>
<figcaption>
<figure>
<footer>
<form>
<head>
<header>
<h1> - <h6>
<hr>
<html>
<i>
<iframe>
<img>
<ins>
<input> button
<input> checkbox
<input> color
<input> date
<input> datetime
<input> datetime-local
<input> email
<input> file
<input> hidden
<input> image
<input> month
<input> number
<input> password
<input> radio
<input> range
<input> reset
<input> search
<input> submit
<input> text
<input> time
<input> url
<input> week
<kbd>
<label>
<legend>
<li>
<link>
<map>
<mark>
<menu>
<menuitem>
<meta>
<meter>
<nav>
<object>
<ol>
<optgroup>
<option>
<output>
<p>
<param>
<pre>
<progress>
<q>
<s>
<samp>
<script>
<section>
<select>
<small>
<source>
<span>
<strong>
<style>
<sub>
<summary>
<sup>
<table>
<tbody>
<td>
<tfoot>
<th>
<thead>
<tr>
<textarea>
<time>
<title>
<track>
<u>
<ul>
<var>
<video>


*/

var arraythingy = ["abc"]
var anotherarraythingy = new Array()

anotherarraythingy.push("def")
console.log(anotherarraythingy)

arraythingy = arraythingy.concat(anotherarraythingy, "ghi")
console.log(arraythingy.toString())

console.log(arraythingy.filter(function (a) { return a.endsWith("c") || a.endsWith("i") }))

try {
    console()
} catch(err) {
    console.log(err.name + " // " + err.message)
}

function callMeAnytimeGirly(a) {
  if (a == "no") {
    console.log("wow me very sad")
  } else if (a == "yes") {
    console.log("wiw me very happy")
  }
}

callMeAnytimeGirly("yes")
callMeAnytimeGirly("no")
