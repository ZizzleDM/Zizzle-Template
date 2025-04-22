class ZizzleJournalSheet extends JournalSheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.classes = [...options.classes, "custom-journal"];
    options.template = "modules/zizzle-template/templates/journal-sheet.html";
    options.width = 600;
    options.height = 500;
    return options;
  }

  _getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    buttons.unshift({
      label: "Insert Callout",
      class: "insert-callout",
      icon: "fas fa-comment-dots",
      onclick: () => {
        const callout = '<div class="callout-block">Insert your highlighted text here.</div>';
        this._insertContent(callout);
      }
    });
    return buttons;
  }

  _insertContent(html) {
    const editor = this._element.find(".editor-content")[0];
    if (editor) {
      editor.innerHTML += html;
      this.document.update({ content: editor.innerHTML });
    }
  }
}

Hooks.once("init", () => {
  Journal.registerSheet("zizzle-template", ZizzleJournalSheet, {
    label: "Zizzle Template",
    makeDefault: false
  });
});
