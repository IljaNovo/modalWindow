function Overlay(selector) {
    this.selector = selector;
    $("<div></div>").addClass(this.selector);
}