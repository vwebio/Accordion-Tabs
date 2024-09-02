const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

// Функция для переключения вкладок и содержимого
const toggleShow = (event) => {
  const target = event.currentTarget;
  const item = target.classList.contains("accordion-tab") ? target : target.parentElement;

  const { actabGroup: group, actabId: id } = item.dataset;

  // Обрабатываем все вкладки (tabs)
  tabs.forEach((tab) => {
    tab.classList.toggle("accordion-active", tab.dataset.actabGroup === group && tab.dataset.actabId === id);
  });

  // Обрабатываем все контентные блоки (labels)
  labels.forEach((label) => {
    const tabItem = label.parentElement;
    tabItem.classList.toggle("accordion-active", tabItem.dataset.actabGroup === group && tabItem.dataset.actabId === id);
  });
};

// Обработчики событий на все элементы labels и tabs
labels.forEach((label) => label.addEventListener("click", toggleShow));
tabs.forEach((tab) => tab.addEventListener("click", toggleShow));
