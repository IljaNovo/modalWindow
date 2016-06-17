$(document).ready(function() {
    var buttons = [];

    buttons.push(new Button("кнопка1", function(){alert("кнопка1");}, "button"));
    buttons.push(new Button("кнопка2", function(){alert("кнопка2");}, "button1"));


    var newModalWindow = new ModalWindow("Окно", "моё модальное окно", buttons, "modal_form", new Overlay("overlay"));
    
    $("body").append($(newModalWindow.window));
    
    newModalWindow.show();
});