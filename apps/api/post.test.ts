// import supertest from 'supertest';
// import App from '@/app';
// import prisma from '@/prisma';
// import { request } from 'express';

// const app = App.app;

// describe('Test CRUD Operation', () => {
//   const dataSample = {
//     post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     userId: 1,
//   };
//   let postId: number;
//   beforeEach(() => {
//     // menyiapkan program yang ingin dijalankan sebelum running test
//   });

//   beforeAll(async () => {
//     // menyiapkan program yang sekali dijalankan sebelum semua test dijalankan
//     await prisma.$connect();
//   });

//   afterEach(() => {});

//   afterAll(async () => {
//     //hapus data uji setelah pengujian selesai
//     await prisma.post.delete({
//         where: {id: postId},
//     });
//     await prisma.$disconnect()
//   });

//   // GOOD CASE
//   it(`should crete a new post`, async () => {
//     const response = await request.post(`/api/post`).send(dataSample)

//     expect(response.status).toBe(201);
//     postId = response.body.id; // menyimpan id dari postingan ke variabel postId
//   })

//   it(`should get a specific post by ID`, async () => {
//     const response = await request.get(`/api/post/${postId}`);

//     expect(response.s)
//   })
// });
