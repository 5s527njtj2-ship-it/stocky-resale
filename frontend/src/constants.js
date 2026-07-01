// Главные разделы (верхний уровень навигации)
export const SECTIONS = [
  { id: 'men',   label: 'Мужское',  emoji: '👔' },
  { id: 'women', label: 'Женское',  emoji: '👚' },
]

// Подкатегории по разделам
export const SUBCATEGORIES = {
  men: [
    { id: 'all',       label: 'Всё' },
    { id: 'm-outer',   label: 'Верхняя одежда' },
    { id: 'm-suit',    label: 'Костюмы' },
    { id: 'm-bottom',  label: 'Брюки' },
    { id: 'm-shoes',   label: 'Обувь' },
    { id: 'm-bags',    label: 'Сумки' },
    { id: 'm-watch',   label: 'Часы' },
    { id: 'm-belt',    label: 'Ремни' },
    { id: 'm-hat',     label: 'Головные уборы' },
    { id: 'm-acc',     label: 'Аксессуары' },
  ],
  women: [
    { id: 'all',       label: 'Всё' },
    { id: 'w-outer',   label: 'Верхняя одежда' },
    { id: 'w-dress',   label: 'Платья и юбки' },
    { id: 'w-bottom',  label: 'Брюки' },
    { id: 'w-shoes',   label: 'Обувь' },
    { id: 'w-bags',    label: 'Сумки' },
    { id: 'w-jewelry', label: 'Украшения' },
    { id: 'w-watch',   label: 'Часы' },
    { id: 'w-belt',    label: 'Ремни' },
    { id: 'w-hat',     label: 'Головные уборы' },
    { id: 'w-acc',     label: 'Аксессуары' },
  ],
}

// Плоский список всех категорий
export const CATEGORIES = [
  { id: 'all',        label: 'Все',                     emoji: '✦', section: null },

  { id: 'm-outer',    label: 'Мужское: верхняя одежда', emoji: '🧥', section: 'men' },
  { id: 'm-suit',     label: 'Костюмы',                 emoji: '🤵', section: 'men' },
  { id: 'm-bottom',   label: 'Мужские брюки',           emoji: '👖', section: 'men' },
  { id: 'm-shoes',    label: 'Мужская обувь',           emoji: '👞', section: 'men' },
  { id: 'm-bags',     label: 'Мужские сумки',           emoji: '💼', section: 'men' },
  { id: 'm-watch',    label: 'Мужские часы',            emoji: '⌚', section: 'men' },
  { id: 'm-belt',     label: 'Мужские ремни',           emoji: '🪢', section: 'men' },
  { id: 'm-hat',      label: 'Мужские головные уборы',  emoji: '🧢', section: 'men' },
  { id: 'm-acc',      label: 'Мужские аксессуары',      emoji: '✨', section: 'men' },

  { id: 'w-outer',    label: 'Женское: верхняя одежда', emoji: '🧥', section: 'women' },
  { id: 'w-dress',    label: 'Платья и юбки',           emoji: '👗', section: 'women' },
  { id: 'w-bottom',   label: 'Женские брюки',           emoji: '👖', section: 'women' },
  { id: 'w-shoes',    label: 'Женская обувь',           emoji: '👠', section: 'women' },
  { id: 'w-bags',     label: 'Женские сумки',           emoji: '👜', section: 'women' },
  { id: 'w-jewelry',  label: 'Украшения',               emoji: '💎', section: 'women' },
  { id: 'w-watch',    label: 'Женские часы',            emoji: '⌚', section: 'women' },
  { id: 'w-belt',     label: 'Женские ремни',           emoji: '🪢', section: 'women' },
  { id: 'w-hat',      label: 'Женские головные уборы',  emoji: '🧢', section: 'women' },
  { id: 'w-acc',      label: 'Женские аксессуары',      emoji: '✨', section: 'women' },
]

export const CATEGORIES_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c]))

export const CONDITIONS = ['Новое / с бирками', 'Отличное', 'Хорошее']

export const COND_COLORS = {
  'Новое / с бирками': { bg: '#111111', color: '#FFFFFF' },
  'Отличное':          { bg: '#F5F5F5', color: '#111111' },
  'Хорошее':           { bg: '#F5F5F5', color: '#6B6B6B' },
}

export const CLOTHING_SIZES = [
  'XXS','XS','S','M','L','XL','XXL','XXXL',
  '38','40','42','44','46','48','50','52','54','56','58',
  'One size','—'
]

export const MEN_CLOTHING_SIZES = [
  'XS','S','M','L','XL','XXL','XXXL',
  '44','46','48','50','52','54','56','58','60',
  '28','29','30','31','32','33','34','36','38',
  'One size','—'
]

export const SHOE_SIZES = [
  '34','35','36','36.5','37','37.5','38','38.5','39','40',
  '40.5','41','42','42.5','43','44','44.5','45','46','47','48',
  '—'
]

export const RING_SIZES = ['15','15.5','16','16.5','17','17.5','18','18.5','19','19.5','20','—']

export const ACCESSORY_SIZES = ['XS','S','M','L','XL','One size','—']

export const SIZES = [...new Set([
  ...CLOTHING_SIZES, ...MEN_CLOTHING_SIZES, ...SHOE_SIZES,
  ...RING_SIZES, ...ACCESSORY_SIZES
])]

export function getSizesForCategory(categoryId) {
  if (categoryId.includes('shoes')) return SHOE_SIZES
  if (categoryId === 'w-jewelry') return RING_SIZES
  if (categoryId.startsWith('m-') && !['m-belt','m-hat','m-acc','m-watch'].includes(categoryId)) return MEN_CLOTHING_SIZES
  if (['w-belt','w-hat','w-acc','w-watch','m-belt','m-hat','m-acc','m-watch'].includes(categoryId)) return ACCESSORY_SIZES
  return CLOTHING_SIZES
}
