$("body")
  .append($('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>'))
  .append($('<link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css" rel="stylesheet" type="text/css">'))
  .append($('<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>'))
  .append($('<script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>'))
  .append($('<script src="https://cdn.rawgit.com/anvaka/panzoom/v1.2.1/dist/panzoom.min.js"></script>'))
  .append($('<link href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css">'))
;

function augmentFrame() {
$(".outer").each(function() {
   var frame=$(this);
  frame.find(".slide > .guide > container-fluid > row").each(function(e) {
    console.log(e);
  });
})};

setInterval(augmentFrame,1000);
