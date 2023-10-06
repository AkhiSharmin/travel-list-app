export default function App() {
  return <>
    <Logo />
    <Form />
    <PackingList />
    <Starts />
  </>
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>
}
function Form() {
  return <div className="add-form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>
}
function PackingList() {
  return <div className="list">LIST</div>
}
function Starts() {
  return <footer>
    <en>You have X items on your list, and you already packed X (X%)</en>
  </footer>
}