function Overlay(selector) {
    this.selector = selector;
    this.overlayElem = $("<div></div>").addClass(this.selector);
}