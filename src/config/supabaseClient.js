import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eehadexshhyitouxrtkf.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaGFkZXhzaGh5aXRvdXhydGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MDcwNzQsImV4cCI6MjA0NTE4MzA3NH0.j8cRD_tLp30hVzgBMwESGgkbubZXDVmH6y_MZHwjLnA"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase