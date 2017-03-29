// app.post('/goals', function (request, response) {
//     if(request.session.user !== undefined) {
//         db.Goals.create({
//             name : request.body.work,
//             cat: 1,
//             userId: request.session.user.id,
//         })
//         db.Goals.create({
//             name : request.body.hobby,
//             cat: 2,
//             userId: request.session.user.id,
//         })
//           db.Goals.create({
//             name : request.body.sport,
//             cat: 3,
//             userId: request.session.user.id,
//         })
//             db.Goals.create({
//             name : request.body.travel,
//             cat: 4,
//             userId: request.session.user.id,
//         })
//     } else {
//         response.redirect('/login')
//     }

// });