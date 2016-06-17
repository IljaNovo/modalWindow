var buttons = [];

buttons.push(new Button("кнопка", function(){}, ".button"));
buttons.push(new Button("кнопка", function(){}, ".button1"));


var newModalWindow = new ModalWindow("Окно", "моё модальное окно", buttons, ".new-modal-window", new Overlay(".overlay"));
                                     
$("body").append($(newModalWindow.window));