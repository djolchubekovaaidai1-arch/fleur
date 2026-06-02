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

export async function createProduct(product) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single()

  if (error) {
    throw new Error(error.message || 'Не удалось создать продукт в Supabase')
  }

  return data
}

export async function updateProduct(id, product) {
  const { data, error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw new Error(error.message || 'Не удалось обновить продукт в Supabase')
  }

  return data
}

export async function deleteProduct(id) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error(error.message || 'Не удалось удалить продукт из Supabase')
  }

  return true
}
