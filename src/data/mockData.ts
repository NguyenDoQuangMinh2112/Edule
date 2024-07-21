// declare interface
export interface mockDataCourseInterface {
  id: number
  thumbnail: string
  title: string
  oldPrice: number
  newPrice: number
  avatarAuthor: string
  nameAuthor: string
  totalVideo: number
  totalHoure: string
}
export interface mockDataBlogInterface {
  id: number
  thumbnail: string
  title: string
  avatarAuthor: string
  nameAuthor: string
  description?: string
}
export const mockDataCourse: mockDataCourseInterface[] = [
  {
    id: 1,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    title: 'HTML CSS Pro',
    oldPrice: 2500000,
    newPrice: 1299000,
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    totalVideo: 20,
    totalHoure: '116h30'
  },
  {
    id: 2,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    title: 'HTML CSS Pro',
    oldPrice: 2500000,
    newPrice: 1299000,
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    totalVideo: 20,
    totalHoure: '116h30'
  },
  {
    id: 3,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    title: 'HTML CSS Pro',
    oldPrice: 2500000,
    newPrice: 1299000,
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    totalVideo: 20,
    totalHoure: '116h30'
  },
  {
    id: 4,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    title: 'HTML CSS Pro',
    oldPrice: 2500000,
    newPrice: 1299000,
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    totalVideo: 20,
    totalHoure: '116h30'
  }
]
export const mockDataBlog: mockDataBlogInterface[] = [
  {
    id: 1,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg',
    title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    description: 'dasdsadaaaaaaa'
  },
  {
    id: 2,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png',
    title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    description: 'dasdsadaaaaaaa'
  },
  {
    id: 3,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    description: 'dasdsadaaaaaaa'
  },
  {
    id: 4,
    thumbnail: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg',
    title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
    avatarAuthor: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
    nameAuthor: 'Quang Minh',
    description: 'dasdsadaaaaaaa'
  }
]
export interface lessonInterface {
  title: string
  duration: string
}
export interface mockDataLessonItemInterface {
  id: number
  title: string
  lessons: lessonInterface[]
}
export const mockDataLessonItem: mockDataLessonItemInterface[] = [
  {
    id: 1,
    title: 'Khái niệm kỹ thuật cần biết',
    lessons: [
      {
        title: 'Mô hình Client - Server là gì?',
        duration: '11:35'
      },
      {
        title: 'Domain là gì? Tên miền là gì?',
        duration: '10:34'
      },
      {
        title: 'Mua áo F8 | Đăng ký học Offline',
        duration: '01:00'
      }
    ]
  },
  {
    id: 2,
    title: 'Môi trường, con người IT',
    lessons: [
      {
        title: 'Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục',
        duration: '24:10'
      },
      {
        title: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?',
        duration: '34:51'
      },
      {
        title: 'Trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp của học viên F8?',
        duration: '47:13'
      }
    ]
  }
]
