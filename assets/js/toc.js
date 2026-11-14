(() => {
  const content = document.querySelector(".post-content");
  const sidebar = document.getElementById("note-toc");
  const list = document.getElementById("toc-list");
  if (!content || !sidebar || !list) return;

  const headings = Array.from(content.querySelectorAll("h1, h2, h3, h4, h5, h6"))
    .filter((heading) => heading.textContent.trim());
  if (!headings.length) return;

  const firstLevel = Math.min(...headings.map((heading) => Number(heading.tagName[1])));
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `note-heading-${index + 1}`;

    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent.trim();
    link.style.setProperty(
      "--toc-indent",
      `${(Number(heading.tagName[1]) - firstLevel) * 0.85}rem`
    );
    item.append(link);
    list.append(item);
  });

  sidebar.hidden = false;
  sidebar.parentElement.classList.add("has-toc");
})();
