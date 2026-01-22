\# VibeCheck 😎



A fun web application that helps developers check their vibe, get random fortunes, enjoy programming jokes, and track their "smash" interactions. Built for CPE 411L.



\## 👥 Team Members

\- \*\*Carlo Estacio\*\* - \[@estaciocarlo](https://github.com/estaciocarlo)

\- \*\*\[Partner Name]\*\* - \[@Sedorico](https://github.com/Sedorico)



\## 🚀 Features



\### API Endpoints

\- \*\*Fortune Generator\*\* - Get random developer-themed fortunes

\- \*\*Joke Generator\*\* - Enjoy programming humor

\- \*\*Vibe Checker\*\* - Check your current mood (happy, tired, stressed)

\- \*\*Smash Counter\*\* - Track button smashes with history

\- \*\*Secret Endpoint\*\* - Unlock hidden messages with the right code

\- \*\*Health Check\*\* - Monitor API status



\### Technical Features

\- Error handling on all endpoints

\- Request validation

\- Timestamp tracking

\- Smash history (last 10 events)

\- Counter overflow protection (max 9999)

\- Reset functionality



\## 🛠️ Tech Stack



\*\*Backend:\*\*

\- Node.js

\- Express.js

\- CORS middleware



\*\*Frontend:\*\*

\- HTML5

\- CSS3

\- Vanilla JavaScript



\## 📦 Installation



\### Prerequisites

\- Node.js (v14 or higher)

\- npm



\### Setup Instructions



1\. \*\*Clone the repository\*\*

   ```bash

   git clone https://github.com/estaciocarlo/VibeCheck-ESTACIO-DEL-CARMEN.git

   cd VibeCheck-ESTACIO-DEL-CARMEN

   ```



2\. \*\*Install backend dependencies\*\*

   ```bash

   cd backend

   npm install

   ```



3\. \*\*Start the backend server\*\*

   ```bash

   node index.js

   ```

   The API will run at `http://localhost:3000`



4\. \*\*Open the frontend\*\*

   - Navigate to the `frontend` folder

   - Open `index.html` in your browser

   - Or use a live server extension in VS Code



\## 🔌 API Documentation



\### GET Endpoints



\#### `/api/fortune`

Returns a random developer fortune.

```json

{

\&nbsp; "fortune": "Your next commit will be clean and meaningful.",

\&nbsp; "timestamp": "2026-01-22T12:00:00.000Z"

}

```



\#### `/api/joke`

Returns a random programming joke.

```json

{

\&nbsp; "joke": "Why did the developer go broke? Because they used up all their cache.",

\&nbsp; "timestamp": "2026-01-22T12:00:00.000Z"

}

```



\#### `/api/vibe?mood=happy`

Returns vibe response based on mood (happy, tired, stressed).

```json

{

\&nbsp; "mood": "happy",

\&nbsp; "emoji": "😄",

\&nbsp; "message": "Keep going - you're shipping greatness!"

}

```



\#### `/api/smashes`

Returns current smash count.

```json

{

\&nbsp; "smashes": 42

}

```



\#### `/api/smash-history`

Returns recent smash history (last 10).

```json

{

\&nbsp; "history": \\\[

\&nbsp;   {

\&nbsp;     "count": 42,

\&nbsp;     "timestamp": "2026-01-22T12:00:00.000Z"

\&nbsp;   }

\&nbsp; ],

\&nbsp; "total": 42

}

```



\#### `/api/secret?code=411L`

Returns secret message with correct code.

```json

{

\&nbsp; "message": "🎉 Secret unlocked: +10 luck on your next merge!"

}

```



\#### `/api/health`

Health check endpoint.

```json

{

\&nbsp; "status": "ok",

\&nbsp; "uptime": 123.456,

\&nbsp; "timestamp": "2026-01-22T12:00:00.000Z"

}

```



\### POST Endpoints



\#### `/api/smash`

Increases smash counter.

```json

{

\&nbsp; "smashes": 43,

\&nbsp; "message": "Smashed 43 times!"

}

```



\### DELETE Endpoints



\#### `/api/smashes`

Resets smash counter to zero.

```json

{

\&nbsp; "smashes": 0,

\&nbsp; "message": "Smash counter reset! 🔄"

}

```



\## 📂 Project Structure



```

VibeCheck-ESTACIO-DEL-CARMEN/

├── backend/

│   ├── index.js           # Express server and API routes

│   ├── package.json       # Node dependencies

│   └── package-lock.json

├── frontend/

│   ├── index.html         # Main HTML page

│   ├── app.js            # Frontend JavaScript

│   └── style.css         # Styling

├── .gitignore

└── README.md

```



\## 🔄 Git Workflow



This project follows proper Git workflow practices:



\### Branches

1\. `main` - Production branch

2\. `feature/api-routes` - API endpoint development

3\. `feature/smash-counter` - Smash counter functionality

4\. `feature/frontend-ui` - Frontend interface



\### Workflow Rules

\- Minimum 2 commits per feature branch

\- Meaningful commit messages

\- Pull requests reviewed before merging

\- Partner comments on each PR



\## 🎯 Usage Examples



\### Check Your Vibe

```javascript

fetch('http://localhost:3000/api/vibe?mood=happy')

\&nbsp; .then(res => res.json())

\&nbsp; .then(data => console.log(data));

```



\### Get a Fortune

```javascript

fetch('http://localhost:3000/api/fortune')

\&nbsp; .then(res => res.json())

\&nbsp; .then(data => console.log(data.fortune));

```



\### Smash the Button

```javascript

fetch('http://localhost:3000/api/smash', { method: 'POST' })

\&nbsp; .then(res => res.json())

\&nbsp; .then(data => console.log(data.message));

```



\## 🤝 Contributing



1\. Create a feature branch

2\. Make at least 2 meaningful commits

3\. Open a pull request

4\. Get partner review

5\. Merge after approval



\## 📝 License



This project is created for educational purposes as part of CPE 411L coursework.



\## 🙏 Acknowledgments



\- CPE 411L Course

\- All the developers who debug at 3 AM 🌙



---



Made with ❤️ and lots of console.log() statements

