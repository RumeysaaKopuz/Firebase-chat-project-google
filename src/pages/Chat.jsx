import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import { db,auth } from '../firebase/firebaseConfig';

const Chat = ({ room }) => {

  //koleksyonun referansini alma
const messagesCol =  collection(db, "messages")
  const handleSubmit = (e) => {
    e.preventDefault()

    // belirttigimiz koleksiyona yeni eleman ekler 
    addDoc(messagesCol,{
      text: e.target[0].value,
      user:auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    })  

  }
  return (
    <div className="chat">
      <header >
<p>Rumeysa</p>
<p>Haftasonu</p>
<a href="/">Farkli oda</a>
      </header>
      <main></main>
      <form onSubmit={handleSubmit}>
        <input placeholder="mesajinizi yaziniz..." type="text" />
        <button>Gonder</button>
      </form>
    </div>
  );
};

export default Chat;
