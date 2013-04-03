// global STCGLOBAL

$(function() {
  if(typeof STCGLOBAL === 'undefined') { throw 'Error: the stoic script has not been loaded.'; }
  console.log('Document ready.');
  //=============================================================================================

  console.log($('#instance'));
  $('#instance').text(STCGLOBAL.instance());

  

});