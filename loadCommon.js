$(document).ready(function($){

/**
* Load html
*/
loadHTML = function(html, callback){
    $("#header").load(html, callback);
}
    
/**
* function to load a given css file 
*/ 
loadCSS = function(href) {
    var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
    $("head").append(cssLink); 
};

/**
* function to load a given js file 
*/ 
loadScript = function(src, callback) {
    var script=document.createElement('script'); 
    script.type="text/javascript"; 
    if(script.readyState){
        //IE 
        script.onreadystatechange=function(){ 
            if(script.readyState=="loaded"||script.readyState=="complete"){
                script.onreadystatechange=null; 
                callback(); 
            } 
        }; 
    }else{
        //other browsers 
        script.onload=function(){ 
            callback(); 
        }; 
    } 
    script.src=src;
    document.getElementsByTagName('head')[0].appendChild(script); 
};

/**
* function to load diagram
*/
loadDiagram = function(src) {
    var diagram = $('<script>require(["/scripts/' + src + '"], function () {})</script>');
    $("body").append(diagram); 
};

/**
* Load markdown
*/
loadMarkDown = function(mkd, callback){
    $("#markdown").load(mkd, callback);
}

// load jQuery first
loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',function(){
    var filename = "d3-cheat-sheet.md"
    loadMarkDown("./"+filename,function(){})
    
    // load the css file 
    loadCSS("./strapdown.css",function(){})

    // load the js file 
    loadScript("./bootstrap.min.js",function(){});
    loadScript("./strapdown.js",function(){});

});

});