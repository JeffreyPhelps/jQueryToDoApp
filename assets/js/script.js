// Jeffrey Phelps 2018 jQuery-based ToDo List App

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let todoText = $(this).val();
        $("ul").append("<li><span>X </span>" + todoText + "</li>")
        $(this).val("");
    };
});

