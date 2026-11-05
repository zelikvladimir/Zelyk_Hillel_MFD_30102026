const groupTabs = document.querySelectorAll('[data-group]');
const subnavs = document.querySelectorAll('[data-subnav]');
const subtabs = document.querySelectorAll('.subtab');
const params = new URLSearchParams(window.location.search);
const selectedScript = params.get('tab');
const selectedGroup = params.get('group');
const consoleHint = document.getElementById('console-hint');

const activeSubtab = [...subtabs].find((button) => button.dataset.tab === selectedScript);

// Показує ряд завдань обраної групи і підсвічує її кнопку.
function showGroup(groupName) {
    groupTabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.group === groupName);
    });

    subnavs.forEach((nav) => {
        nav.hidden = nav.dataset.subnav !== groupName;
    });
}

// Перемикання групи перезавантажує сторінку без параметра tab, тому скрипт попереднього завдання очищається.
groupTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        window.location.search = '?group=' + encodeURIComponent(tab.dataset.group);
    });
});

// Кожен клік по завданню перезавантажує сторінку, тому скрипт запускається заново.
subtabs.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.search = '?tab=' + encodeURIComponent(button.dataset.tab);
    });
});

if (activeSubtab) {
    const consoleHintTabs = getHintTabs();
    const groupName = activeSubtab.closest('[data-subnav]').dataset.subnav;

    showGroup(groupName);
    activeSubtab.classList.add('active');
    consoleHint.hidden = !consoleHintTabs.includes(selectedScript);

    const script = document.createElement('script');
    script.src = groupName + '/' + activeSubtab.dataset.tab + '.js?t=' + Date.now();
    document.body.appendChild(script);
} else if (selectedGroup) {
    showGroup(selectedGroup);
}

// Скидання відкриває сторінку без параметрів: обрана група, завдання та запущений скрипт очищаються.
document.getElementById('reset-button').addEventListener('click', () => {
    window.location.href = window.location.pathname;
});
