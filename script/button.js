function Button(title, action) {
    this.buttonElem = $("<input>")
        .attr("type","button")
        .addClass("but")
        .attr("value", title);
    this.buttonElem.click(action);
}