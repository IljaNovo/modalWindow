function ModalWindow(title, message, buttons, overlay) {
    this.title = title;
    this.buttons = buttons;
    this.message = message;
    this.selector = "modal-form";
    this.overlay = overlay;
    
    var elemClose = $("<span>").addClass("modal-close").text("X");
    this.addCloseEvent(elemClose);
    var mainElems;
    mainElems =  $("<div>").addClass(this.selector);
    mainElems.append(elemClose);
    mainElems.append($("<header>").addClass("modal-head").text(title));
    mainElems.append($("<section>").addClass("modal-message").text(message));
    
    var formTag = $("<form>");
    for (var i = 0; i < buttons.length; ++i) {
        formTag.append(buttons[i].buttonElem);
    }
    mainElems.append(formTag);
    
    this.window = $("<div>").append(mainElems);
    
    this.window.append(overlay.overlayElem);
    
}

ModalWindow.prototype.hide = function() {
    $("." + this.selector)
        .animate({opacity: 0, top: '45%'}, 0,
        function() {
            $(this.window).css("display", "none");
            $(this.overlay.overlayElem).fadeOut(0);
        }.bind(this));
}

ModalWindow.prototype.show = function() {
    $(this.overlay.overlayElem).fadeIn(10,
        function() {
            $(this.window)
                .css("display", "block");
            $("." + this.selector).animate({opacity: 1, top: '50%'}, 0);  
    }.bind(this));
}

ModalWindow.prototype.addOpenEvent = function(elem) {
    $(elem)
        .click(function(event) {
            event.preventDefault();
            this.show();
	           }.bind(this)
    );
}

ModalWindow.prototype.addCloseEvent = function(elem) {
    $(this.overlay.overlayElem)
        .add(elem)
        .click(function() {
        this.hide();
        }.bind(this)
    );
}