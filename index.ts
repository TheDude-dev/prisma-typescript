            import { PrismaClient } from "@prisma/client";

            const prisma = new PrismaClient()

            async function main () {
                // Create user
            //     const user = await prisma.user.create({
            //         data: {
            //             name: "John Doe",
            //             email: "John@mail.com",
            //         }
            //     })
            //     console.log(user)

            // Get all user
            const users = await prisma.user.findMany({
                include: {
                    articles: true,
                }
            })

            // Create an article and associate it with user
            // const article = await prisma.article.create({
            //     data: {
            //         title: "Johs first Article",
            //         body: "This is Johns first article",
            //         author: {
            //             connect: {
            //                 id: 1,
            //             }
            //         }
            //     }
            // })

            // Get all the articles 
             const articles = await prisma.article.findMany()

            // Create user and article and associate the,

            // const user = await prisma.user.create({
            //     data: {
            //         name: "Susi",
            //         email: "Susi@mail.com",
            //         articles: {
            //             create: {
            //                 title: "Susis first article",
            //                 body: "This Susis first article"
            //             }
            //         }

            //     }
            // })

            // create another artcile
            // const article = await prisma.article.create({
            //     data: {
            //         title: "Susi",
            //         body: "This is a sample article ",
            //         author: {
            //             connect: {
            //                 id: 2
            //             }
            //         }
                    
            //     }
            // })

            // Loop through data

            // users.forEach(user =>{
            //     console.log(`USer: ${user.name}, Email: ${user.email}`)
            //     console.log('Articles: ')
            //     user.articles.forEach((article) => {
            //         console.log(` - Tilte: ${article.title}, Body: ${article.body}`)
            //     })

            //     console.log(`\n`)
            // } )

            // Update data

            // const user = await prisma.user.update({
            //     where: {
            //         id: 1
            //     },
            //     data : {
            //         name: "John Doe Jr."

            //     }
            // })

            // console.log(user)

            // Remove data 
            // const article = await prisma.article.delete({
            //     where: {
            //         id: 2
            //     }
            // })

            console.log(articles)
            }



            main()
            .then(async () => {
                await prisma.$disconnect()
            })
            .catch(async (e) => {
                console.error(e)
                await prisma.$disconnect()
                process.exit(1)
            })