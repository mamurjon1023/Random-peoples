let users = document.querySelector(".users");

fetch("https://randomuser.me/api/")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let results = data.results;
    let user = results[0];

    let img = user.picture.large;
    let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    let phone = user.phone;
    let address = `${user.location.street.number} ${user.location.street.name} ${user.location.country}`;
    let email = user.email;

    let box = document.createElement("div");
    let image = document.createElement("img");
    let ism = document.createElement("h1");
    let emailEl = document.createElement("li");
    let phoneEl = document.createElement("li");
    let addressEl = document.createElement("li");
    let list = document.createElement("ul");

    image.src = image;
    ism.textContent = name;
    emailEl.textContent = email;
    addressEl.textContent = address;
    phoneEl.textContent = phone;

    list.appendChild(emailEl);
    list.appendChild(phoneEl);
    list.appendChild(addressEl);

    box.appendChild(image);
    box.appendChild(ism);
    box.appendChild(list);

    users.appendChild(box);
});