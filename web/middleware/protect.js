export default function({ $auth, redirect, route }) {
  if (route.path === '/' && $auth.loggedIn) {
    redirect('/main')
  }
}
