// // document.addEventListener('DOMContentLoaded', () => {
// //     const form = document.getElementById('loginsignup');
// //     const loginBtn = document.getElementById('loginBtn');
// //     const signupBtn = document.getElementById('signupBtn');
// //     console.log('Form:', form);
// //     function sendData(action) {
// //         const formData = new FormData(form);
// //         formData.append('action', action);

// //         fetch('loginsignup.php', {
// //             method: 'POST',
// //             body: formData
// //         })
// //         .then(response => response.json())
// //         .then(data => {
// //             alert(data.message);
// //         })
// //         .catch(error => {
// //             console.error('Error:', error);
// //         });
// //     }

// //     loginBtn.addEventListener('click', () => sendData('login'));
// //     signupBtn.addEventListener('click', () => sendData('signup'));
// //   });

// document.getElementById('loginsignup').addEventListener('submit', function (event) {

//     event.preventDefault();

//     const email = document.getElementById('email').value;

//     if (email) {
//         alert('Thank you for subscribing, ' + email + '!');
//         console.log('Thank you for subscribing, ' + email + '!')
//         fetch('subscribe.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams({ email: email })
//         }).then(response => response.text())
//             .then(result => {
//                 alert(result);
//             }).catch(error => {
//                 console.error('Error:', error);
//             });
//     } else {
//         alert('Please fill out both fields.');
//     }
// });
