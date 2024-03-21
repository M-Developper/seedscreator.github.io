let dataContainer = document.getElementById('data-container');
let inputNum = document.getElementById('number-input');

let readUsersFile = (file, callback) => {
    let usersFile = new XMLHttpRequest();
    usersFile.overrideMimeType('./json/users.json');
    usersFile.open('GET', file, true);
    usersFile.onreadystatechange = () => {
        if(usersFile.readyState == 4 && usersFile.status == '200')
            callback(usersFile.responseText);
    }
    usersFile.send(null);
}
let copyText = () => {
    navigator.clipboard.writeText(document.getElementById('fname').innerText);
}
document.querySelector('.form').onsubmit = (e) => {
    e.preventDefault();
    readUsersFile('/json/users.json', (text) => {
        let data = JSON.parse(text);
        for (let i = 0; i < inputNum.value; i++) {
            let chars = "0123456789",
            random="";
            for(let i = 0; i < 5; i++) {
                random += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            let password=""
            let pswRnm = "AZERTYUIOPMLKJHGFDSQWXCVBNnbvcxwqsdfghjklmpoiuytreza0123456987@#_+=$&*";
            for(let i = 0; i < 10; i++) {
                password += pswRnm.charAt(Math.floor(Math.random() * pswRnm.length));
            }
            dataContainer.innerHTML += `<div class="data fname" id="fname"">${data[i].GivenName}</div>`;
            dataContainer.innerHTML += `<div class="data lname">${data[i].Surname} </div>`;
            dataContainer.innerHTML += `<div class="data uname">${data[i].GivenName}${data[i].Surname}${random} </div>`;
            dataContainer.innerHTML += `<div class="data hotmail-address">${data[i].GivenName}${data[i].Surname}${random}@hotmail.com </div>`;
            dataContainer.innerHTML += `<div class="data mailnesia-address">${data[i].GivenName}${data[i].Surname}${random}@mailnesia.com </div>`;
            dataContainer.innerHTML += `<div class="data password">${password}</span></p>`;
            // console.log(`${data[i].GivenName}${data[i].Surname}${random}@hotmail.com`);
        }
        let passwords = document.querySelectorAll('.data-container .password');
        let fnames = document.querySelectorAll('.data-container .fname');
        let lnames = document.querySelectorAll('.data-container .lname');
        let unames = document.querySelectorAll('.data-container .uname');
        let hotmailAddress = document.querySelectorAll('.data-container .hotmail-address');
        let mailnesiaAddress = document.querySelectorAll('.data-container .mailnesia-ddress');

        fnames.forEach(fname => {
            fname.onclick = () => {
                navigator.clipboard.writeText(fname.innerText)
            }
        });

        lnames.forEach(lname => {
            lname.onclick = () => {
                navigator.clipboard.writeText(lname.innerText)
            }
        });

        unames.forEach(uname => {
            uname.onclick = () => {
                navigator.clipboard.writeText(uname.innerText)
            }
        });

        lnames.forEach(lname => {
            lname.onclick = () => {
                navigator.clipboard.writeText(lname.innerText)
            }
        });

        hotmailAddress.forEach(hot => {
            hot.onclick = () => {
                navigator.clipboard.writeText(hot.innerText)
            }
        });

        mailnesiaAddress.forEach(mail => {
            mail.onclick = () => {
                navigator.clipboard.writeText(mail.innerText)
            }
        });

        passwords.forEach(pswd => {
            pswd.onclick = () => {
                navigator.clipboard.writeText(pswd.innerText);
            }
        });
    });
    
}
