Built With:

Express.js
Node.js
Vite
Bootstrap
MongoDB

Getting Started

Installation:

1. Clone the repo
   git clone https://github.com/lennix/mp3last
2. Install NPM packages
   npm install
3. Change git remote url to avoid accidental pushes to base project
   git remote set-url origin github_username/repo_name
   git remote -v
4. Run npm run dev for front end
5. Run npm run dev for back end
Usage:

Get Request- http://localhost:8080/api/users
{
  "result": 200,
  "data": [
    {
      "_id": "671926cc389e1ddb50fe4635",
      "firstName": "josh",
      "lastName": "C",
      "email": "something@somthing.com",
      "password": "passwordlol",
      "createdAt": "2024-10-23T16:39:40.822Z",
      "updatedAt": "2024-10-23T16:39:40.823Z",
      "__v": 0
    },
    {
      "_id": "671c6a64a9da42e54a345e83",
      "email": "josh@gmail.com",
      "password": "okok",
      "mileGoal": 2,
      "createdAt": "2024-10-26T04:04:52.444Z",
      "updatedAt": "2024-10-26T04:04:52.444Z",
      "__v": 0
    },
![Screen Shot 2024-11-23 at 7 29 24 AM](https://github.com/user-attachments/assets/9017747b-9fc8-469c-8784-746f7992f324)

Put Request- http://localhost:8080/api/users/:id

Open Issues:
User Login not functioning properly 
User info not displayed yet
Mile calculator not implemented yet

Future Features:
Music Playlists
Trail Maps
Local Group Meet Up Events
Digital Race Challenges with ranking
Location Tracking shareable with family
Adding Friends 
Mobile Friendly 


Contributing:

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
Fork the Project
Create your Feature Branch (git checkout -b feature/newFeature)
Commit your Changes (git commit -m 'Add some newFeature')
Push to the Branch (git push origin feature/newFeature)
Open a Pull Request


Contact:
Joshua Lennix- jlennix22@gmail.com
Project Link: https://github.com/lennix/mp3last
