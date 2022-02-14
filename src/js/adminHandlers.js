async function createAdmin(e) {
  e.preventDefault();
  try {
    const data = {
      username: e.target["new-admin-username"].value,
      password: e.target["new-admin-password"].value,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }),
    };
    const response = await (
      await fetch("http://localhost:3000/admin/register", options)
    ).json();
    if (response.err) {
      alert(response.err);
    }
    console.log(response);
    return response;
  } catch (err) {
    console.warn(err);
  }
}

async function abolishAdmin(e) {
  e.preventDefault();
  try {
    const removeBox = document.querySelector("#bad-admin-username");
    const badmin = removeBox.value.toLowerCase();

    const options = {
      method: "DELETE",
      headers: new Headers({
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }),
    };
    const response = await (
      await fetch(`http://localhost:3000/admin/abolish/${badmin}}`, options)
    ).json();
    if (response.err) {
      alert(response.err);
    }
    console.log(response);
    return response;
  } catch (err) {
    console.warn(err);
  }
}

// async function changePassword(e) {
//   e.preventDefault();
//   try {
//     const data = {
//       username: e.target["update-admin-username"].value,
//       newPassword: e.target["new-password"].value,
//     };
//     const options = {
//       method: "PATCH",
//       body: JSON.stringify(data),
//       headers: new Headers({ authorization: localStorage.getItem("token") }),
//     };
//     const response = await (
//       await fetch("http://localhost:3000/admin/newpassword", options)
//     ).json();
//     e.target.reset();
//     if (response.err) {
//       alert(response.err);
//     }
//     console.log(response);
//     return response;
//   } catch (err) {
//     console.warn(err);
//   }
// }

module.exports = {
  createAdmin,
  abolishAdmin,
  // changePassword,
};
