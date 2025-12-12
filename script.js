// Second Soul AI - front JS (single-file site)
const PD_URL = "https://eokbzzzx3ql4sns.m.pipedream.net"; // ← your Pipedream webhook

const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatWindow = document.getElementById("chatWindow");

function addBubble(text, cls="ai"){
  const d = document.createElement("div");
  d.className = `bubble ${cls}`;
  d.textContent = text;
  chatWindow.appendChild(d);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e)=>{ if(e.key==='Enter') sendMessage(); });

async function sendMessage(){
  const txt = input.value.trim();
  if(!txt) return;
  addBubble(`You: ${txt}`, "user");
  input.value = "";
  // temporary thinking bubble
  const thinking = document.createElement("div");
  thinking.className = "bubble ai";
  thinking.textContent = "Second Soul is thinking...";
  chatWindow.appendChild(thinking);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    const res = await fetch(PD_URL, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ message: txt })
    });
    // try parse json safely
    const data = await res.json().catch(()=>null);
    // remove thinking
    thinking.remove();
    if(!data) {
      addBubble("AI: No response (invalid server reply).", "ai");
      return;
    }
    const reply = data.reply ?? data?.response ?? data?.text ?? "No reply returned.";
    addBubble(`AI: ${reply}`, "ai");
  } catch(err){
    // remove thinking
    thinking.remove();
    console.error("Send error:", err);
    addBubble("AI: Server error. Try again later.", "ai");
  }
}// Second Soul AI - front JS (single-file site)
const PD_URL = "https://eokbzzzx3ql4sns.m.pipedream.net"; // ← your Pipedream webhook

const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatWindow = document.getElementById("chatWindow");

function addBubble(text, cls="ai"){
  const d = document.createElement("div");
  d.className = `bubble ${cls}`;
  d.textContent = text;
  chatWindow.appendChild(d);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e)=>{ if(e.key==='Enter') sendMessage(); });

async function sendMessage(){
  const txt = input.value.trim();
  if(!txt) return;
  addBubble(`You: ${txt}`, "user");
  input.value = "";
  // temporary thinking bubble
  const thinking = document.createElement("div");
  thinking.className = "bubble ai";
  thinking.textContent = "Second Soul is thinking...";
  chatWindow.appendChild(thinking);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    const res = await fetch(PD_URL, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ message: txt })
    });
    // try parse json safely
    const data = await res.json().catch(()=>null);
    // remove thinking
    thinking.remove();
    if(!data) {
      addBubble("AI: No response (invalid server reply).", "ai");
      return;
    }
    const reply = data.reply ?? data?.response ?? data?.text ?? "No reply returned.";
    addBubble(`AI: ${reply}`, "ai");
  } catch(err){
    // remove thinking
    thinking.remove();
    console.error("Send error:", err);
    addBubble("AI: Server error. Try again later.", "ai");
  }
}
