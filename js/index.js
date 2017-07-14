function mostrar(){
    var mkviewer = $('#editor').val();
    $('#viewer').html(marked(mkviewer));
  }

$(document).ready( function(){
  mostrar();
  $('#editor').on('input', mostrar);
}
/*  function mostrar(){
    var mkviewer = $('#editor').val();
    $('#viewer').html(marked(mkviewer));
  }
  */
);