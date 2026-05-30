import { NavLink } from 'react-router-dom'
import {
  FaHome,
  FaShoppingBag,
  FaTruck,
  FaPhone,
  FaStar
} from 'react-icons/fa'

export default function Sidebar() {
  const item =
    'flex items-center gap-3 p-3 rounded-xl hover:bg-accent-50 transition'

  return (
    <aside className="mobile-hide">

      <NavLink className={item} to="/">
        <FaHome />
        Главная
      </NavLink>

      <NavLink className={item} to="/catalog">
        <FaShoppingBag />
        Каталог
      </NavLink>

      <NavLink className={item} to="/delivery">
        <FaTruck />
        Доставка
      </NavLink>

      <NavLink className={item} to="/reviews">
        <FaStar />
        Отзывы
      </NavLink>

      <NavLink className={item} to="/contacts">
        <FaPhone />
        Контакты
      </NavLink>

    </aside>
  )
}