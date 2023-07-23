import { redirect } from "react-router-dom";

// https://stackoverflow.com/questions/76363543/issue-with-redirect-react-router-6-and-miragejs-why-is-my-redirect-throwing-thi/76608977#76608977

// function mutateResponse(path){
//   let response = redirect(path)
//   response.body = true
//   return response
// }

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return redirect(`/login?message=You must login first&redirect=${pathname}`);
  }
  return null
}

export async function login({ email, password }) {
  const user = { id: "123", email: "b@b.com", password: "p123", name: "Bob" }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve({
          user: {
            id: user.id,
            email: user.email,
            name: user.name
          },
          token: "Enjoy your pizza, here's a token!"
        })
      } else {
        reject({ message: "Invalid login credentials" })
      }
    }, 800)
  })
}
