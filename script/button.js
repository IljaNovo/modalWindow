function Button(title, action, selector) {
    this.button = $("<input>")
        .attr("type","button")
        .addClass(selector)
        .attr("value", title);
    $(selector).click(action);
}