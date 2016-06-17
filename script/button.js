function Button(title, action, selector) {
    this.buttonElem = $("<input>")
        .attr("type","button")
        .addClass(selector)
        .attr("value", title);
    $(this.buttonElem).click(action);
}