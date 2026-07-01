import './AboutModal.css'

const MAP_URL = 'https://yandex.ru/maps/?text=Москва%2C%20ул.%20Барклая%2C%207%2C%20корп.%204'

export default function AboutModal({ onClose }) {
  function handleRoute(e) {
    const tg = window.Telegram?.WebApp
    if (tg?.openLink) {
      e.preventDefault()
      tg.openLink(MAP_URL)
    }
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal about-modal">
        <div className="modal-header">
          <h3>О магазине</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="about-body">
          <div className="about-block">
            <div className="about-label">Адрес</div>
            <div className="about-value">Stocky<br />Москва, ул. Барклая, 7, корп. 4</div>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="route-btn"
              onClick={handleRoute}
            >
              📍 Построить маршрут
            </a>
          </div>

          <div className="about-block">
            <div className="about-label">Режим работы</div>
            <div className="about-value">Ежедневно: 11:00–21:00</div>
          </div>

          <div className="about-block">
            <div className="about-label">Контакты</div>
            <div className="about-value">
              <a href="tel:+79367772677" className="about-link">📞 +7 (936) 777-26-77</a><br />
              <a href="https://t.me/komissionka_stocky" target="_blank" rel="noopener noreferrer" className="about-link">💬 t.me/komissionka_stocky</a>
            </div>
          </div>

          <div className="about-block">
            <div className="about-label">О нас</div>
            <div className="about-value">
              Магазин брендовой одежды и аксессуаров в Москве. Только оригинал —
              никаких реплик и подделок. Шоурум с примеркой, доставка по России.
              Рейтинг 4.3 на Яндекс Картах.
            </div>
          </div>

          <div className="about-discount-block">
            🎁 При покупке от 3 вещей — скидка 10% на весь заказ
          </div>

          <div className="about-note">
            Бронирование вещей действует 1 час перед личной встречей или по индивидуальной договорённости с продавцом.
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-submit" onClick={onClose}>Понятно</button>
        </div>
      </div>
    </div>
  )
}
