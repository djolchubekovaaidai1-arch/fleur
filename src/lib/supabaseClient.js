import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Проверка на случай, если переменные не загрузились
if (!supabaseUrl || !supabaseKey) {
  console.error('Ошибка: Переменные Supabase не найдены в .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
