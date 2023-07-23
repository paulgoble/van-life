import { useLoaderData,
  useActionData,
  useNavigation,
  Form,
  redirect
} from "react-router-dom";

import { login } from "../utils";

export function loader({ request }) {
  return new URL(request.url).searchParams
}

export async function action({ request }) {
  const pathname = new URL(request.url).searchParams.get("redirect")

  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    await login({ email, password })
    localStorage.setItem("loggedin", true)

    return redirect(pathname || "/host")
  } catch(err) {
    return err.message
  }
}

export default function Login() {
  const searchParams = useLoaderData()
  const errorMessage = useActionData() || searchParams.get("message")
  const navigation = useNavigation()

  return (
    <div className="main">
      <h1>Sign in to your account</h1>
      <Form replace method="POST" className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="button-lg"
          disabled={navigation.state === 'submitting'}
        >
          {
            navigation.state === 'submitting'
            ? "Logging in..."
            : "Log in"
          }
        </button>

        {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
      </Form>
    </div>
  )
}