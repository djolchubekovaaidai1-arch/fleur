import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

import {
  FaGoogle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaSave,
  FaSignOutAlt,
  FaEdit
} from 'react-icons/fa'

export default function Profile() {
  const { user, login, logout } = useAuth()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')
  const [isEditing, setIsEditing] = useState(true)

  useEffect(() => {
    if (user) {
      const savedName =
        localStorage.getItem('profileName') ||
        user.displayName ||
        ''

      const savedPhone =
        localStorage.getItem('profilePhone') ||
        ''

      const savedBio =
        localStorage.getItem('profileBio') ||
        ''

      setName(savedName)
      setPhone(savedPhone)
      setBio(savedBio)

      if (localStorage.getItem('profileName')) {
        setIsEditing(false)
      }
    }
  }, [user])

  const handleSave = () => {
    localStorage.setItem('profileName', name)
    localStorage.setItem('profilePhone', phone)
    localStorage.setItem('profileBio', bio)

    setIsEditing(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F9F3E8] flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-[30px] shadow-lg w-full max-w-md">

          <h1 className="text-4xl text-center mb-4 font-light">
            Личный кабинет
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Войдите через Google
          </p>

          <button
            onClick={login}
            className="w-full bg-[#4A7C59] hover:bg-[#3B6448] transition text-white py-4 rounded-2xl flex items-center justify-center gap-3"
          >
            <FaGoogle />
            Войти через Google
          </button>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F9F3E8] py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">

          {/* HEADER */}
          <div className="h-52 bg-gradient-to-r from-[#6A9A78] to-[#4A7C59]" />

          {/* CONTENT */}
          <div className="px-10 pb-10">

            <div className="-mt-24">
              <img
                src={user.photoURL}
                className="profile-avatar w-44 h-44 rounded-full"
              />
            </div>

            <h2 className="text-5xl mt-6">
              {name || user.displayName}
            </h2>

            <p className="text-gray-500 mt-2">
              Профиль пользователя
            </p>

            {/* РЕДАКТИРОВАНИЕ */}
            {isEditing ? (
              <div className="mt-10">

                <div className="grid md:grid-cols-2 gap-8">

                  <div>
                    <label className="block mb-3 font-medium">
                      Имя
                    </label>

                    <div className="relative">
                      <FaUser className="absolute left-4 top-5 text-gray-400" />

                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-[#E8DFD0] rounded-2xl pl-12 p-4"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-3 font-medium">
                      Телефон
                    </label>

                    <div className="relative">
                      <FaPhone className="absolute left-4 top-5 text-gray-400" />

                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+996"
                        className="w-full border border-[#E8DFD0] rounded-2xl pl-12 p-4"
                      />
                    </div>
                  </div>

                </div>

                <div className="mt-8">

                  <label className="block mb-3 font-medium">
                    О себе
                  </label>

                  <textarea
                    rows="5"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Расскажите немного о себе..."
                    className="w-full border border-[#E8DFD0] rounded-2xl p-4 resize-none"
                  />

                </div>

                <button
                  onClick={handleSave}
                  className="mt-8 bg-[#4A7C59] hover:bg-[#3B6448] text-white px-8 py-4 rounded-2xl flex items-center gap-3"
                >
                  <FaSave />
                  Сохранить
                </button>

              </div>
            ) : (
              /* ПРОСМОТР ПРОФИЛЯ */
              <div className="mt-10">

                <div className="bg-[#F9F3E8] rounded-3xl p-8 border border-[#E8DFD0]">

                  <h3 className="text-3xl mb-8">
                    Мой профиль
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <p className="text-gray-500 mb-2">
                        Имя
                      </p>

                      <p className="text-xl font-medium">
                        {name}
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <p className="text-gray-500 mb-2">
                        Телефон
                      </p>

                      <p className="text-xl font-medium">
                        {phone || 'Не указан'}
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <p className="text-gray-500 mb-2">
                        Email
                      </p>

                      <p className="text-xl font-medium break-all">
                        {user.email}
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                      <p className="text-gray-500 mb-2">
                        О себе
                      </p>

                      <p className="text-xl font-medium">
                        {bio || 'Нет информации'}
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">

                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-[#4A7C59] hover:bg-[#3B6448] text-white px-8 py-4 rounded-2xl flex items-center gap-3"
                    >
                      <FaEdit />
                      Редактировать
                    </button>

                    <button
                      onClick={logout}
                      className="bg-[#4A7C59] hover:bg-[#3B6448] text-white px-8 py-4 rounded-2xl flex items-center gap-3"
                    >
                      <FaSignOutAlt />
                      Выйти
                    </button>

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}