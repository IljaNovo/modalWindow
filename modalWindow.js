function ModalWindow(title, message, buttons, selector, overlay) {
    this.title = title;
    this.buttons = buttons;
    this.message = message;
    this.selector = selector;
    this.overlay = overlay;
    
    $("<div>").addClass(selector);
    $("<header>").text(title);
    $("<section>").text(message);
    for (var i = 0; i < buttons.length; ++i) {
        $("<form>").append(buttons[i]);
    }
    $("span").addClass("modal_close").text("X");
}

ModalWindow.prototype.closeForm = function() {
    $(this.selector)
        .animate({opacity: 0, top: '45%'}, 0,
        function() {
            $(this.overlayl.selector).css("display", "none");
            $(this.ovel).fadeOut(0);
        }.bind(this));
}

ModalWindow.prototype.openForm = function() {
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
            this.openForm();
	           }.bind(this)
    );
}

ModalWindow.prototype.addCloseEvent = function(selector) {
    $(this.overlayl.selector)
        .add(selector)
        .click(function() {
        this.closeForm();
        }.bind(this)
    );
}