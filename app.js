$(document).ready(function() {
    $("#add-todo").click(function() {
        var todo = $("#todo-input").val();
            $("#todo-list").append("<li><input type='checkbox'>" + todo + "</li>");
            $("#todo-input").val("");
    });
});
