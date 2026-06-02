import { supabase } from '../lib/supabaseClient'

export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    throw new Error(error.message || 'Не удалось загрузить продукты из Supabase')
  }

  return Array.isArray(data) ? data : []
}
