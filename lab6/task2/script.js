'use strict';

/* УТИЛІТИ */
const generateId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const getDate    = () => new Date().toISOString();
const formatPrice = (p) => Number(p).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₴';

/* ПОЧАТКОВІ ДАНІ */
const MOCK = [
  {
    id: generateId(),
    name: 'Ноутбук Lenovo',
    price: 24999,
    category: 'Електроніка',
    image: 'https://i.pinimg.com/736x/4e/b7/b1/4eb7b188eaf99dc80d47a6f265273f3c.jpg',
    createdAt: getDate(),
    updatedAt: getDate(),
  },
  {
    id: generateId(),
    name: 'Куртка зимова',
    price: 1850,
    category: 'Одяг',
    image: 'https://i.pinimg.com/1200x/22/3e/5d/223e5d83cffbf5240d8f7e454a0544ab.jpg',
    createdAt: getDate(),
    updatedAt: getDate(),
  },
  {
    id: generateId(),
    name: 'Кобзар — Шевченко',
    price: 220,
    category: 'Книги',
    image: 'https://i.pinimg.com/1200x/81/94/6d/81946db99b5084dbf82ca72679077253.jpg',
    createdAt: getDate(),
    updatedAt: getDate(),
  },
  {
    id: generateId(),
    name: 'Стіл офісний',
    price: 5400,
    category: 'Меблі',
    image: 'https://i.pinimg.com/736x/7a/71/ee/7a71eed1757f439b502c2671262d9f58.jpg',
    createdAt: getDate(),
    updatedAt: getDate(),
  },
  {
    id: generateId(),
    name: 'Гантелі 10 кг',
    price: 980,
    category: 'Спорт',
    image: 'https://i.pinimg.com/736x/64/49/de/6449de93921d2c2cb725b7346c00ac46.jpg',
    createdAt: getDate(),
    updatedAt: getDate(),
  },
];

/* СТАН */
let products     = [...MOCK];
let activeFilter = null;
let activeSort   = null;

/* ЧИСТІ ФУНКЦІЇ */
const addProduct = (list, data) => [
  ...list,
  {
    id: generateId(),
    name: data.name,
    price: +data.price,
    category: data.category,
    image: data.image,
    createdAt: getDate(),
    updatedAt: getDate(),
  },
];

const updateProduct = (list, id, data) =>
  list.map(p =>
    p.id !== id
      ? p
      : { ...p, name: data.name, price: +data.price, category: data.category, image: data.image, updatedAt: getDate() }
  );

const deleteProduct = (list, id) => list.filter(p => p.id !== id);

const getCategories = (list) => [...new Set(list.map(p => p.category))];

const calcTotal = (list) => list.reduce((sum, p) => sum + p.price, 0);

const filterProducts = (list, category) =>
  category ? list.filter(p => p.category === category) : list;

const sortProducts = (list, by) => {
  if (!by) return list;
  return [...list].sort((a, b) =>
    by === 'price'
      ? a.price - b.price
      : new Date(a[by]) - new Date(b[by])
  );
};

const getVisible = (list, filter, sort) =>
  sortProducts(filterProducts(list, filter), sort);

/*  DOM-ЕЛЕМЕНТИ */
const elList    = document.getElementById('product-list');
const elEmpty   = document.getElementById('empty-msg');
const elTotal   = document.getElementById('total-price');
const elModal   = document.getElementById('modal');
const elForm    = document.getElementById('product-form');
const elEditId  = document.getElementById('edit-id');
const elFilters = document.getElementById('filter-buttons');
const elSnack   = document.getElementById('snackbar');

/* СПОВІЩЕННЯ КОРИСТУВАЧА */
let snackTimer = null;

const showSnackbar = (msg) => {
  elSnack.textContent = msg;
  elSnack.style.display = 'block';
  clearTimeout(snackTimer);
  snackTimer = setTimeout(() => {
    elSnack.style.display = 'none';
  }, 3000);
};

/* МОДАЛЬНЕ ВІКНО  */
const openModal = (editMode = false) => {
  elModal.classList.add('open');
  document.getElementById('modal-title').textContent = editMode ? 'Редагувати товар' : 'Новий товар';
  document.getElementById('submit-btn').textContent  = editMode ? 'Зберегти' : 'Додати';
};

const closeModal = () => {
  elModal.classList.remove('open');
  elForm.reset();
  elEditId.value = '';
};

const openEditModal = (id) => {
  const p = products.find(x => x.id === id);
  if (!p) return;
  elEditId.value = id;
  document.getElementById('f-name').value     = p.name;
  document.getElementById('f-price').value    = p.price;
  document.getElementById('f-category').value = p.category;
  document.getElementById('f-image').value    = p.image;
  openModal(true);
};

/* ── РЕНДЕР КАРТОК ───────────────────────── */
const createCard = (p) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = p.id;

  card.innerHTML = `
    <img
      src="${p.image}"
      alt="${p.name}"
      onerror="this.src='https://via.placeholder.com/300x160?text=No+Image'"
    />
    <div class="product-info">
      <div class="id">ID: ${p.id}</div>
      <h3>${p.name}</h3>
      <div class="price">${formatPrice(p.price)}</div>
      <div class="category">${p.category}</div>
      <div class="product-actions">
        <button class="edit-btn">Редагувати</button>
        <button class="delete-btn">Видалити</button>
      </div>
    </div>
  `;

  card.querySelector('.edit-btn').addEventListener('click', () => openEditModal(p.id));
  card.querySelector('.delete-btn').addEventListener('click', () => deleteWithAnimation(p.id));

  return card;
};

/* РЕНДЕР КНОПОК ФІЛЬТРУ */
const renderFilterButtons = () => {
  const cats = getCategories(products);

  elFilters.querySelectorAll('[data-filter]').forEach(b => b.remove());

  if (!document.getElementById('filter-all')) {
    const btn = document.createElement('button');
    btn.id = 'filter-all';
    btn.textContent = 'Всі';
    btn.addEventListener('click', () => { activeFilter = null; render(); });
    elFilters.prepend(btn);
  }

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.dataset.filter = cat;
    btn.textContent = cat;
    btn.addEventListener('click', () => { activeFilter = cat; render(); });
    elFilters.appendChild(btn);
  });

  elFilters.querySelectorAll('button').forEach(btn => {
    const isAll = btn.id === 'filter-all';
    btn.classList.toggle('active', isAll ? activeFilter === null : btn.dataset.filter === activeFilter);
  });
};

/* ГОЛОВНИЙ РЕНДЕР */
const render = () => {
  const visible = getVisible(products, activeFilter, activeSort);

  elList.innerHTML = '';
  visible.forEach(p => elList.appendChild(createCard(p)));

  elEmpty.style.display = products.length === 0 ? 'block' : 'none';
  elTotal.textContent = 'Загальна вартість: ' + formatPrice(calcTotal(products));

  renderFilterButtons();

  document.querySelectorAll('[data-sort]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === activeSort);
  });
};

/* ВИДАЛЕННЯ З АНІМАЦІЄЮ */
const deleteWithAnimation = (id) => {
  const card = elList.querySelector(`[data-id="${id}"]`);
  const p = products.find(x => x.id === id);
  if (!p) return;

  const doDelete = () => {
    products = deleteProduct(products, id);
    render();
    showSnackbar(`Товар «${p.name}» видалено.`);
  };

  if (card) {
    card.classList.add('removing');
    card.addEventListener('animationend', doDelete, { once: true });
  } else {
    doDelete();
  }
};

/* ── ОБРОБНИКИ ПОДІЙ ─────────────────────── */
document.getElementById('add-btn').addEventListener('click', () => openModal(false));

document.getElementById('cancel-btn').addEventListener('click', closeModal);

elModal.addEventListener('click', (e) => {
  if (e.target === elModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

elForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!elForm.checkValidity()) { elForm.reportValidity(); return; }

  const data = {
    name:     document.getElementById('f-name').value.trim(),
    price:    document.getElementById('f-price').value,
    category: document.getElementById('f-category').value,
    image:    document.getElementById('f-image').value.trim(),
  };

  const editId = elEditId.value;

  if (editId) {
    products = updateProduct(products, editId, data);
    showSnackbar(`Оновлено: ID ${editId} — «${data.name}»`);
  } else {
    products = addProduct(products, data);
    showSnackbar(`Додано товар «${data.name}»`);
  }

  closeModal();
  render();
});

document.querySelectorAll('[data-sort]').forEach(btn => {
  btn.addEventListener('click', () => {
    activeSort = activeSort === btn.dataset.sort ? null : btn.dataset.sort;
    render();
  });
});

document.getElementById('reset-sort').addEventListener('click', () => {
  activeSort = null;
  render();
});

/* ── СТАРТ ───────────────────────────────── */
render();