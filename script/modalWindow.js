function ModalWindow(title, message, buttons, selector, overlay) {
    this.title = title;
    this.buttons = buttons;
    this.message = message;
    this.selector = selector;
    var mainElems;
    mainElems =  $("<div>").addClass(selector);
    mainElems.append($("<span>").addClass("modal-close"));
    mainElems.append($("<header>").text(title));
    mainElems.append($("<section>").text(message));
    var formTag = $("<form>");
    for (var i = 0; i < buttons.length; ++i) {
        $("<form>").append(buttons[i]);
    }
    mainElems.append(formTag);
    this.window = $("<div>").append(overlay);
    this.window = $("<div>").append(mainElems);
    
    this.addCloseEvent(".modal-close");
}

ModalWindow.prototype.hide = function() {
    $(this.selector)
        .animate({opacity: 0, top: '45%'}, 0,
        function() {
            $(this.overlayl.selector).css("display", "none");
            $(this.ovel).fadeOut(0);
        }.bind(this));
}

ModalWindow.prototype.show = function() {
    $(this.overlayl.selector).fadeIn(10,
        function() {
            $(this.selector)
                .css("display", "block")
				.animate({opacity: 1, top: '50%'}, 0);  
    }.bind(this));
}

ModalWindow.prototype.addOpenEvent = function(selector) {
    $(selector)
        .click(function(event) {
            event.preventDefault();
            this.show();
	           }.bind(this)
    );
}

ModalWindow.prototype.addCloseEvent = function(selector) {
    $(this.overlayl.selector)
        .add(selector)
        .click(function() {
        this.hide();
        }.bind(this)
    );
}