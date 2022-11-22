"use strict";
const tapd_editor = document.getElementById("content");

// 工作台任务渲染
togglbutton.render(
  // 指定元素筛选器
  // 对添加按钮的的元素，需要排除，避免重复添加
  // :not(.toggl)
  ".worktable-title .growing-title:not(.toggl)",
  { observe: true },
  (elem) => {
    // 获取当前项目名称
    const getProjectName = () =>
      document
        .querySelector(".worktable-project")
        .querySelector(".worktable-project__workspaces")
        .querySelector(".worktable-project__items")
        .querySelector(".current")
        .querySelector(".item-name")
        .textContent.trim();

    const rootEl = elem.closest(".worktable-title");
    const content = rootEl
      .querySelector(".growing-title")
      .querySelector(".growing-title-inner");

    //获取当前任务描述
    const descriptionSelector = () => {
      const text = content.querySelector(".J-worktablePreview");
      return text ? text.textContent.trim() : "";
    };

    // 创建计时器元素
    const link = togglbutton.createTimerLink({
      description: descriptionSelector,
      buttonType: "minimal", // button type, if skipped will render full size
      projectName: getProjectName,
      // tags: ["tag_1", "tag_2"],
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("item_action");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.float = "right";
    wrapper.appendChild(link);

    // Add link to element
    elem.lastChild.before(wrapper);
  }
);

// 仪表盘-我的待办
togglbutton.render(
  // 指定元素筛选器
  // 对添加按钮的的元素，需要排除，避免重复添加
  // :not(.toggl)
  ".list_todo .growing-title:not(.toggl)",
  { observe: true },
  (elem) => {
    const root_elem = elem.parentNode.parentNode;
    // 获取当前项目名称
    const getProjectName = () =>
      root_elem.childNodes[root_elem.childNodes.length - 2].textContent.trim();

    //获取当前任务描述
    const descriptionSelector = () => {
      const text = root_elem
        .querySelector(".growing-title")
        .querySelector(".growing-title-inner")
        .querySelector(".editable-value");
      return text ? text.textContent.trim() : "";
    };

    // 创建计时器元素
    const link = togglbutton.createTimerLink({
      description: descriptionSelector,
      buttonType: "minimal", // button type, if skipped will render full size
      projectName: getProjectName,
      // tags: ["tag_1", "tag_2"],
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("item_action");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.float = "right";
    wrapper.appendChild(link);

    // Add link to element
    elem.lastChild.before(wrapper);
  }
);
