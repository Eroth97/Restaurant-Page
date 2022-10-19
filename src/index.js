import { createHeader, createContent } from "./homepage";

let content = document.getElementById('content');

createContent(content);
document.body.insertBefore(createHeader(), content);