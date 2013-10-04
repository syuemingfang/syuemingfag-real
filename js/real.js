/*!

## Javascript

  CDN: `https://syuemingfag-real.googlecode.com/git/js/real.js`

  [GitHub project](https://github.com/syuemingfang/syuemingfag-real) [Documentation](http://comment.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfag-real/master/comment.json)

****************************************************************************************************/

/*!

+ Version: 0.1.0.0
+ Copyright © 2013 [Syue](mailto:syuemingfang@gmail.com). All rights reserved.
+ Date: *Oct 04 2013 04:18:20 GMT+0800 (Central Standard Time)*

### Examples
 1. **Standard** [Power by Cinderella](http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfag-real/master/example.html)
 2. **Debug** [Power by jsPipe](http://jspipe.cxm.tw/?url=http://html.cxm.tw/index.php?url=https://raw.github.com/syuemingfang/syuemingfag-real/master/example.html)

### How to Use
 1. **Setup** include this javascript files in your header.
  + **jQuery**
   `<script src='http://code.jquery.com/jquery-1.8.3.min.js'></script>`
  + **This Plguin**
   `<script src='https://syuemingfag-real.googlecode.com/git/js/real.js'></script>`
 2. **Usage**
  + **Format**  This Plugin accepts settings from an object of key/value pairs.
   `$(selector).real({key: value...})`
  + **Example**
     + `$('button').real({on: 'click'})`
 3. **Set** copy code from the `<head>` and `</head>` tags and paste it on your page.

        <script>
        $(document).ready(function(){
          //Usage
        });
        </script>

****************************************************************************************************/
;(function($){
 $.fn.real=function(opt){
  var f=$.fn.real;
  $.extend(f, {
    version: '0.1.0.0',
    //! 
    //!#### Options
    set: {
      on: 'click', //!+ **on** an object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
      str: 'Hello World' //!+ **str** a message
    },
    //! 
    //!****************************************************************************************************
    //!#### API
    log: function(str){
      //!+ **log(str)** outputs a message to the web console.
      console.log(str)
    }
  }); 
  //! 
  //!****************************************************************************************************
  //!#### Function
  var func=function(that, set){
    var initialize=function(){
      //!+ **initialize()**
      that.on(set.on, function(){
         start();
      });
    }
    var start=function(){
      //!+ **start()**
      f.log(set.str);
      setTimeout(start, 1000);
    }
    initialize();
  }
  return this.each(function(){ 
    var set=$.extend(f.set, opt);
    func($(this), set);
  });
 }
})(jQuery);