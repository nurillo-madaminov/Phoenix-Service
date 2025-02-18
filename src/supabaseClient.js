import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vxlscckbfvletlnvlqsa.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bHNjY2tiZnZsZXRsbnZscXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NzczMjgsImV4cCI6MjA1NTE1MzMyOH0.k7GYCrhagszbacZIEBBSurUpW9UdRzmxaKngPIJPVcE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
