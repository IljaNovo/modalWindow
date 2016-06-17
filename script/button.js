function Button(title, action, selector) {
    this.button = $("<input>")
        .attr("type","button")
        .class(selector);
    $(selector).click(action);
}