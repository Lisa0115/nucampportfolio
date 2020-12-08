
// $('.terms-modal').on('click', function(e){
//   e.preventDefault();
//   $('#termModal').modal('show').find('.modal-content').load($(this).attr('href'));
// });

// Fill modal with content from link href
// $("#termModal").on("show.bs.modal", function(e) {
//   var link = $(e.relatedTarget);
//   $(this).find(".modal-content").load(link.attr("href"));
// });


// $(document).ready(function(e){
//   $("#btnModal").click(function(){

//     $.post("../terms.html",function(xx){
//       $("#tmpModal").html(xx)

//       $("#termModal").modal("show");
//     })
//   })

// });


$(function() {


  // $("#reserveButton").click(function(){
  //     // alert("show modal");
  //     $("#reserveModal").modal("show");
  //     // $("#reserveMondal").modal({"backdrop": "static"});
  // });

  $("#privacyButton").click(function(){
      // alert("show modal");
      $("#privacyModal").modal("show");
      // $("#reserveMondal").modal({"backdrop": "static"});
  });
  
  $("#termsButton").click(function(){
    // alert("show modal");
    $("#termsModal").modal("show");
    // $("#reserveMondal").modal({"backdrop": "static"});
  });

});