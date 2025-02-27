import axios from 'axios'
import { ref, watch } from 'vue'

export const posts = ref([])
export const loading = ref(true)

async function fetchPosts() {
  try {
    const binID = '678c3a55e41b4d34e47a5b8d'
    const XAccessKey = '$2a$10$x8BZ5T6mMEf7AAxKbEiqVufcon3S6eyGLpMxEFen5q9eb62WK08yW'

    const response = await axios.get(`https://api.jsonbin.io/v3/b/${binID}`, {
      headers: {
        'X-Access-Key': XAccessKey,
      },
    })
    posts.value = response.data.record
    loading.value = false
  } catch (error) {
    console.error('Error fetching info: ', error)
  }
}

fetchPosts()

watch(posts, () => {
  console.log(posts.value)
})


// import { posts } from '@/stores/posts'
// import { onMounted, ref, watch } from 'vue'
// import { useRoute } from 'vue-router'
// const route = useRoute()

// const filteredPost = ref([])

// // watch(posts, () => {
// //   filteredPost.value = posts.value.find((item) => item.id == route.params.id)
// //   console.log(filteredPost.value)
// // })

// onMounted(() => {
//   setTimeout(() => {
//     filteredPost.value = posts.value.find((item) => item.id == route.params.id)
//   }, 2000)
// })